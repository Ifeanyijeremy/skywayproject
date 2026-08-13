
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

// const mobileMenuBtn =
//     document.getElementById(
//         "mobileMenuBtn"
//     );


// const sidebar =
//     document.getElementById("sidebar");


// if (mobileMenuBtn && sidebar) {

//     mobileMenuBtn.addEventListener(
//         "click",
//         () => {

//             sidebar.classList.toggle(
//                 "show"
//             );

//         }
//     );

// }





// const mobileMenuBtn =
//     document.getElementById("mobileMenuBtn");

// const sidebar =
//     document.getElementById("sidebar");


// if (mobileMenuBtn && sidebar) {

//     // =========================================
//     // OPEN / CLOSE SIDEBAR
//     // =========================================

//     mobileMenuBtn.addEventListener("click", (event) => {

//         // Prevent the document click from firing
//         event.stopPropagation();

//         sidebar.classList.toggle("show");


//         // Change hamburger ↔ X

//         if (sidebar.classList.contains("show")) {

//             mobileMenuBtn.innerHTML =
//                 '<i class="fa-solid fa-xmark"></i>';

//             mobileMenuBtn.setAttribute(
//                 "aria-label",
//                 "Close menu"
//             );

//         } else {

//             mobileMenuBtn.innerHTML =
//                 '<i class="fa-solid fa-bars"></i>';

//             mobileMenuBtn.setAttribute(
//                 "aria-label",
//                 "Open menu"
//             );

//         }

//     });



const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const sidebar =
    document.getElementById("sidebar");


if (mobileMenuBtn && sidebar) {

    // OPEN / CLOSE SIDEBAR
    mobileMenuBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        sidebar.classList.toggle("show");


        if (sidebar.classList.contains("show")) {

            mobileMenuBtn.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';

            mobileMenuBtn.setAttribute(
                "aria-label",
                "Close dashboard menu"
            );

        } else {

            mobileMenuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

            mobileMenuBtn.setAttribute(
                "aria-label",
                "Open dashboard menu"
            );

        }

    });


    // CLOSE WHEN CLICKING OUTSIDE
    document.addEventListener("click", (event) => {

        if (
            sidebar.classList.contains("show") &&
            !sidebar.contains(event.target) &&
            !mobileMenuBtn.contains(event.target)
        ) {

            sidebar.classList.remove("show");


            mobileMenuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

            mobileMenuBtn.setAttribute(
                "aria-label",
                "Open dashboard menu"
            );

        }

    });

}



//     // =========================================
//     // CLICK OUTSIDE SIDEBAR
//     // =========================================

//     document.addEventListener("click", (event) => {

//         const clickedInsideSidebar =
//             sidebar.contains(event.target);

//         const clickedMenuButton =
//             mobileMenuBtn.contains(event.target);


//         if (
//             sidebar.classList.contains("show") &&
//             !clickedInsideSidebar &&
//             !clickedMenuButton
//         ) {

//             sidebar.classList.remove("show");


//             // Reset hamburger icon

//             mobileMenuBtn.innerHTML =
//                 '<i class="fa-solid fa-bars"></i>';

//             mobileMenuBtn.setAttribute(
//                 "aria-label",
//                 "Open menu"
//             );

//         }

//     });

// }




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