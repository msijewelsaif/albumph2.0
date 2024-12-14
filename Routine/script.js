// Toggle Password Visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});

// Login Function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Check if username and password match the predefined values
    if (username === "saiful" && password === "123456") {
        message.textContent = "Login successful!";
        message.style.color = "green";

        // Redirect to Routine.html after successful login
        setTimeout(function() {
            window.location.href = 'Routine.html';
        }, 1000); // Redirect after 1 second
    } else {
        message.textContent = "Invalid username or password!";
        message.style.color = "red";
    }
}
