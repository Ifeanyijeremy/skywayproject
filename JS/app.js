
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.querySelector(".faq-question").addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

                faq.querySelector("i").className = "fa-solid fa-plus";

            }

        });

        item.classList.toggle("active");

        const icon = item.querySelector("i");

        icon.className = item.classList.contains("active")
            ? "fa-solid fa-xmark"
            : "fa-solid fa-plus";

    });

});

/* =========================================
   SMOOTH SCROLL REVEAL ANIMATIONS
========================================= */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-card, .scroll-image"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});