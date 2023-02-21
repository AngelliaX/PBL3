// Get references to the "Your email" and "Password" input fields
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Get a reference to the "Sign in" button element
const signInButton = document.getElementById("sign-in-button");

// Attach a click event listener to the button
signInButton.addEventListener("click", function() {
  // Retrieve the values entered in the input fields
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  // Display the values in an alert message
  alert("Email: " + emailValue + "\nPassword: " + passwordValue);
});