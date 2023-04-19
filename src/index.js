const form = document.querySelector('form');
const usernameInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('#login');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  const username = usernameInput.value;
  const password = passwordInput.value;
  // Here, you would typically send the username and password to a server to verify them
  // For this example, we'll just check if the username and password are both "admin"
  if (username === 'admin' && password === 'admin') {
    alert('Login successful!');
  } else {
    alert('Invalid username or password.');
  }
});
