const LOGOUT_TIMEOUT = 300000; // 10 seconds in milliseconds
let timeoutId;

function startLogoutTimer() {
    console.log('Starting logout timer');
    // Clear existing timer (if any)
    clearTimeout(timeoutId);

    // Set a new timer for auto-logout
    timeoutId = setTimeout(() => {
        console.log('Auto-logout timer triggered');
        // Perform logout action (e.g., make a request to /logout)
        fetch('/logout', { method: 'GET' })
            .then(() => {
                // Redirect to the login page or perform any other necessary actions
                window.location.href = '/index.html';
                alert("Logged out for inactivity");
                console.log("Logged out")
            })
            .catch(error => {
                console.error('Error during logout:', error);
            });
    }, LOGOUT_TIMEOUT);
}

function resetLogoutTimer() {
    console.log('Resetting logout timer');
    // Reset the timer on user activity
    startLogoutTimer();
}

// Attach event listeners for user activity (e.g., mousemove, keydown)
document.addEventListener('mousemove', resetLogoutTimer);
document.addEventListener('keydown', resetLogoutTimer);
