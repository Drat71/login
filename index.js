// index.js
window.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('login-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var username = usernameInput.value;
    var password = passwordInput.value;
    if (username && password) {
      localStorage.setItem('username', username);
      window.location.replace('dashboard.html');
    } else {
      alert('Please enter both username and password.');
    }
  });
});
