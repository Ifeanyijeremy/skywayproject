const navMenuBtn = document.querySelector(".menu-btn");
const navBarLinks = document.querySelector(".nav-links");
const navOverlay = document.querySelector(".menu-overlay");
const navItems = document.querySelectorAll(".nav-links a");

navMenuBtn.addEventListener("click", () => {

    navMenuBtn.classList.toggle("active");
    navBarLinks.classList.toggle("active");
    navOverlay.classList.toggle("active");
    document.body.classList.toggle("menu-open");

});

navOverlay.addEventListener("click", closeMenu);

navItems.forEach(link => {

    link.addEventListener("click", closeMenu);

});

function closeMenu(){

    navMenuBtn.classList.remove("active");
    navBarLinks.classList.remove("active");
    navOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");

}

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    header.classList.toggle("scrolled", window.scrollY > 50);

});

