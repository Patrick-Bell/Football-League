// Check if the current page is the index page
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    // Get the button element by ID
    const signinButton = document.getElementById('signinButton');

    // Attach an event listener to the button
    signinButton.addEventListener('click', function() {
        // Get the username and password from input fields
        const account = document.getElementById('usernameInput').value;
        const password = document.getElementById('passwordInput').value;

        // Make a POST request to your server for authentication
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ account, password }),
        })
        .then(response => response.json())
        .then(data => {
            // Check the authentication status
            if (data.success) {
                // Successful login, redirect or display a success message
                window.location.href = '/dashboard.html';

            } else {
                // Failed login, display an error message
                alert('Login failed. Please check your credentials.');
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
        });
    });
}


