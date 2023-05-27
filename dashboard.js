// Check if the user is logged in
var username = localStorage.getItem("username");
if (!username) {
  // Redirect to the login page
  window.location.href = "index.html";
} else {
  // Display the username on the dashboard
  document.getElementById("username-display").textContent = username;
}

function logout() {
  // Clear the stored username
  localStorage.removeItem("username");

  // Redirect to the login page
  window.location.href = "index.html";
}
