const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("passwordToggle");
const loginForm = document.getElementById("loginForm");


// =========================================
// PASSWORD VISIBILITY
// =========================================

passwordToggle.addEventListener("click", () => {

    const isPassword =
        passwordInput.type === "password";


    if (isPassword) {

        passwordInput.type = "text";

        passwordToggle.innerHTML =
            '<i class="fa-regular fa-eye-slash"></i>';

        passwordToggle.setAttribute(
            "aria-label",
            "Hide password"
        );

    } else {

        passwordInput.type = "password";

        passwordToggle.innerHTML =
            '<i class="fa-regular fa-eye"></i>';

        passwordToggle.setAttribute(
            "aria-label",
            "Show password"
        );

    }

});



// =========================================
// LOGIN FORM
// =========================================

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const email =
        document.getElementById("email").value.trim();

    const password =
        passwordInput.value.trim();


    if (!email || !password) {

        alert("Please enter your email and password.");

        return;
    }


    console.log("Login submitted:", {
        email,
        password
    });


    /*
        Later we'll connect this to the
        Skyway backend/authentication system.
    */

});