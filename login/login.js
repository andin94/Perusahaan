const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if (email === 'dewabrata155@gmail.com' && password === '12345') 
{
    // Redirect to the home page on successful login
    window.location.replace('landingpage.html');
} 
else 
{
    // Display an error message if the email and password are incorrect
    alert('Invalid email or password. Please try again.');
}

