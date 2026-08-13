
// =========================================
// CHECK LOGIN STATUS
// =========================================

const loggedIn =
    localStorage.getItem("skywayLoggedIn");


if (loggedIn !== "true") {

    window.location.href =
        "../login.html";

}



// =========================================
// GET CURRENT USER
// =========================================

const storedUser =
    localStorage.getItem("skywayCurrentUser");


if (storedUser) {

    const user =
        JSON.parse(storedUser);


    // =====================================
    // GET USER'S FULL NAME
    // =====================================

    const fullName =
        user.fullName || "Traveler";


    // Get first name

    const firstName =
        fullName.split(" ")[0];



    // =====================================
    // GREETING
    // =====================================

    const userFirstName =
        document.getElementById(
            "userFirstName"
        );


    if (userFirstName) {

        userFirstName.textContent =
            firstName;

    }



    // =====================================
    // PROFILE NAME
    // =====================================

    const dashboardUserName =
        document.getElementById(
            "dashboardUserName"
        );


    if (dashboardUserName) {

        dashboardUserName.textContent =
            fullName;

    }

}



// =========================================
// MOBILE SIDEBAR
// =========================================

const mobileMenuBtn =
    document.getElementById(
        "mobileMenuBtn"
    );


const sidebar =
    document.getElementById("sidebar");


if (mobileMenuBtn && sidebar) {

    mobileMenuBtn.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "show"
            );

        }
    );

}

// =========================================
// LOGOUT
// =========================================

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        () => {

            // End current login session

            localStorage.removeItem(
                "skywayLoggedIn"
            );


            // Remove current user session

            localStorage.removeItem(
                "skywayCurrentUser"
            );


            // Go back to login

            window.location.href =
                "../login.html";

        }
    );

}