

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {
e.preventDefault();


// Get form values
const fullName = document
    .getElementById("fullName")
    .value
    .trim();

const email = document
    .getElementById("signupEmail")
    .value
    .trim();

const password = document
    .getElementById("signupPassword")
    .value;

const confirmPassword = document
    .getElementById("confirmPassword")
    .value;

// Check passwords
if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
}

// Save the user
const user = {
    fullName: fullName,
    email: email
};

localStorage.setItem(
    "skywayUser",
    JSON.stringify(user)
);

// Redirect to dashboard
window.location.href = "Dashboard/dashboard.html";


});