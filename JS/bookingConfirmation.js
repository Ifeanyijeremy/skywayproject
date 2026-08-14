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