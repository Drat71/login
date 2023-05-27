function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the username and password match your criteria
  if (username === "admin" && password === "password") {
    // Store the username in local storage
    localStorage.setItem("username", username);

    // Redirect to the dashboard page
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
}

function logout() {
  // Clear the stored username
  localStorage.removeItem("username");

  // Redirect to the login page
  window.location.href = "index.html";
}
