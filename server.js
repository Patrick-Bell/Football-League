const path = require('path');
require('dotenv').config();

const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const { sessionSecret } = require('./secret'); // Adjust the path accordingly


const app = express();


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



console.log('Session Secret:', sessionSecret);

// Use session to keep track of login status
// Set session timeout to 30 minutes (adjust as needed)
app.use(session({
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 60 * 10, // 30 minutes in milliseconds
    },
  }));
  
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

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
      return res.json({ success: true, message: 'Authentication successful' });
    });
  })(req, res, next);
});



// Logout route
// Logout route
app.get('/logout', (req, res) => {
  req.logout((err) => {
      if (err) {
          return res.status(500).json({ success: false, message: 'Logout failed' });
      }
      res.json({ success: true, message: 'Logout successful' });
      console.log("Logged out")
  });
});


// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  console.log('Checking authentication status...');
  
  if (req.isAuthenticated()) {
    console.log('User is authenticated. Proceeding to the next middleware or route.');
    res.redirect(dashboardPath)
    return next();
  }

  console.log('User is not authenticated. Redirecting to login page.');
  res.redirect('/index'); // Redirect to the login page if not authenticated
}

// Protected route
app.get('/dashboard', isAuthenticated, (req, res) => {
  const dashboardPath = path.join(__dirname, 'dashboard.html');
  res.sendFile(dashboardPath);
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
