
const passwordInput =
    document.getElementById("password");

const passwordToggle =
    document.getElementById("passwordToggle");

const loginForm =
    document.getElementById("loginForm");

const rememberMe =
    document.getElementById("rememberMe");



// =========================================
// PASSWORD VISIBILITY
// =========================================

passwordToggle.addEventListener("click", function () {

    if (passwordInput.type === "password") {

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
// LOAD REMEMBERED EMAIL
// =========================================

const rememberedEmail =
    localStorage.getItem("skywayRememberedEmail");


if (rememberedEmail) {

    document.getElementById("email").value =
        rememberedEmail;

    rememberMe.checked = true;

}



// =========================================
// LOGIN
// =========================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const email =
        document.getElementById("email")
            .value
            .trim();


    const password =
        passwordInput.value
            .trim();



    // =====================================
    // GET REGISTERED USER
    // =====================================

    const storedUser =
        localStorage.getItem("skywayUser");


    if (!storedUser) {

        alert(
            "No account found. Please create an account first."
        );

        return;
    }


    const user =
        JSON.parse(storedUser);



    // =====================================
    // CHECK EMAIL
    // =====================================

    if (
        email.toLowerCase() !==
        user.email.toLowerCase()
    ) {

        alert("Incorrect email or password.");

        return;
    }



    // =====================================
    // CHECK PASSWORD
    // =====================================

    if (password !== user.password) {

        alert("Incorrect email or password.");

        return;
    }



    // =====================================
    // REMEMBER ME
    // =====================================

    if (rememberMe.checked) {

        localStorage.setItem(
            "skywayRememberedEmail",
            email
        );

    } else {

        localStorage.removeItem(
            "skywayRememberedEmail"
        );

    }



    // =====================================
    // SAVE CURRENT USER
    // =====================================

    localStorage.setItem(
        "skywayCurrentUser",
        JSON.stringify(user)
    );


    localStorage.setItem(
        "skywayLoggedIn",
        "true"
    );



    // =====================================
    // GO TO DASHBOARD
    // =====================================

    window.location.href =
        "Dashboard/dashboard.html";

});