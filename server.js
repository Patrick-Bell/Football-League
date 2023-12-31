const path = require('path');
require('dotenv').config();

const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const methodOverride = require('method-override');
const { sessionSecret } = require('./secret'); // Adjust the path accordingly


const app = express();


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



console.log('Session Secret:', sessionSecret);

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));
  

console.log('Code reached before console.log statements');
console.log('Username from process.env:', process.env.ACCOUNT);
console.log('Password from process.env:', process.env.PASSWORD);

const users = [
    {
        id: 1,
        account: process.env.ACCOUNT,
        password: process.env.PASSWORD
    }
];

console.log('Code reached after console.log statements');


// Passport local strategy
passport.use(new LocalStrategy(
  { usernameField: 'account', passwordField: 'password' }, // Specify the field names
  (account, password, done) => {
    const user = users.find(u => u.account === account && u.password === password);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect username or password' });
    }
  }
));


// Serialize and deserialize user (for session support)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});

// Serve the index.html file as the default page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/dashboard.html', checkAuthenticated, (req, res) => {
  res.sendFile(__dirname + '/dashboard.html');
});

// Login route
app.post('/login', (req, res, next) => {
  const { account, password } = req.body;
  console.log('Received credentials:', { account, password });

  passport.authenticate('local', { usernameField: 'account', passwordField: 'password' }, (err, user, info) => {
    if (err) {
      console.error('Passport authentication error:', err);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }

    if (!user) {
      console.error('Authentication failed. User not found. Info:', info);
    }

    req.logIn(user, (loginErr) => {
      if (loginErr) {
        console.error('Error during login:', loginErr);
        return res.status(500).json({ success: false, message: 'Internal Server Error during login' });
      }

      console.log('Authentication successful. User:', user);
      res.redirect("/dashboard.html")
    });
  })(req, res, next);
});



app.delete('/logout', checkAuthenticated, (req, res) => {
  req.logout(function (err) {
      if (err) {
          return next(err);
      }
      res.redirect('/');
  });
});


function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/index.html');
}

function checkNotAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
      return res.redirect('/');
  }
  next();
}



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
