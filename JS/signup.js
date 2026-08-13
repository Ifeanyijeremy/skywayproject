
const signupForm = document.getElementById("signupForm");

// =========================================
// PASSWORD TOGGLE
// =========================================

const signupPassword =
    document.getElementById("signupPassword");

const confirmPassword =
    document.getElementById("confirmPassword");

const signupPasswordToggle =
    document.getElementById("signupPasswordToggle");

const confirmPasswordToggle =
    document.getElementById("confirmPasswordToggle");


function togglePassword(input, button) {

    if (input.type === "password") {

        input.type = "text";

        button.innerHTML =
            '<i class="fa-regular fa-eye-slash"></i>';

        button.setAttribute(
            "aria-label",
            "Hide password"
        );

    } else {

        input.type = "password";

        button.innerHTML =
            '<i class="fa-regular fa-eye"></i>';

        button.setAttribute(
            "aria-label",
            "Show password"
        );

    }

}


signupPasswordToggle.addEventListener(
    "click",
    function () {

        togglePassword(
            signupPassword,
            signupPasswordToggle
        );

    }
);


confirmPasswordToggle.addEventListener(
    "click",
    function () {

        togglePassword(
            confirmPassword,
            confirmPasswordToggle
        );

    }
);



// =========================================
// SIGN UP
// =========================================

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

    const password =
    signupPassword.value;

const confirmPasswordValue =
    confirmPassword.value;

    const terms =
        document.getElementById("terms").checked;

    // =====================================
    // VALIDATION
    // =====================================

    if (password !== confirmPasswordValue) {

        alert("Passwords do not match.");

        return;
    }


    if (!terms) {

        alert(
            "Please agree to the Terms of Service and Privacy Policy."
        );

        return;
    }



    // =====================================
    // CHECK EXISTING USER
    // =====================================

    const existingUser =
        localStorage.getItem("skywayUser");


    if (existingUser) {

        const user =
            JSON.parse(existingUser);


        if (
            user.email.toLowerCase() ===
            email.toLowerCase()
        ) {

            alert(
                "An account with this email already exists. Please sign in."
            );

            window.location.href =
                "login.html";

            return;
        }

    }



    // =====================================
    // CREATE USER
    // =====================================

    const user = {

        fullName: fullName,

        email: email,

        password: password

    };



    // =====================================
    // SAVE USER
    // =====================================

    localStorage.setItem(
        "skywayUser",
        JSON.stringify(user)
    );



    // =====================================
    // SEND USER TO LOGIN
    // =====================================

    alert(
        "Account created successfully! Please sign in."
    );


    window.location.href =
        "login.html";

});