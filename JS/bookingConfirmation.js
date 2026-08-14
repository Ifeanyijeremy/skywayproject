const downloadTicket =
    document.getElementById("downloadTicket");


downloadTicket.addEventListener("click", (event) => {

    event.preventDefault();

    const originalText =
        downloadTicket.innerHTML;


    downloadTicket.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Preparing E-Ticket...
    `;

    downloadTicket.style.pointerEvents = "none";


    setTimeout(() => {

        downloadTicket.innerHTML = `
            <i class="fa-solid fa-check"></i>
            E-Ticket Ready
        `;

        downloadTicket.style.pointerEvents = "auto";


        setTimeout(() => {

            downloadTicket.innerHTML =
                originalText;

        }, 2000);

    }, 1200);

});

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const closeMenuBtn =
    document.getElementById("closeMenuBtn");

const mobileSidebar =
    document.getElementById("mobileSidebar");

const menuOverlay =
    document.getElementById("menuOverlay");


function openMobileMenu() {

    mobileSidebar.classList.add("show");
    menuOverlay.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeMobileMenu() {

    mobileSidebar.classList.remove("show");
    menuOverlay.classList.remove("show");

    document.body.style.overflow = "";
}


mobileMenuBtn.addEventListener(
    "click",
    openMobileMenu
);


closeMenuBtn.addEventListener(
    "click",
    closeMobileMenu
);


menuOverlay.addEventListener(
    "click",
    closeMobileMenu
);