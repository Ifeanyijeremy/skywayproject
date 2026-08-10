
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