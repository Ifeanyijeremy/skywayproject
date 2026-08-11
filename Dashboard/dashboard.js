/* =========================================
   MOBILE SIDEBAR
========================================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const sidebar = document.getElementById("sidebar");

if (mobileMenuBtn && sidebar) {

    mobileMenuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("show");

    });

}

const storedUser = localStorage.getItem("skywayUser");

if (storedUser) {

    const user = JSON.parse(storedUser);

    // =========================================
    // GET USER'S FULL NAME
    // =========================================

    const fullName = user.fullName || "Traveler";

    // Get first name for greeting
    const firstName = fullName.split(" ")[0];


    // =========================================
    // GREETING
    // =========================================

    const userFirstName =
        document.getElementById("userFirstName");

    if (userFirstName) {
        userFirstName.textContent = firstName;
    }


    // =========================================
    // PROFILE NAME
    // =========================================

    const dashboardUserName =
        document.getElementById("dashboardUserName");

    if (dashboardUserName) {
        dashboardUserName.textContent = fullName;
    }

}