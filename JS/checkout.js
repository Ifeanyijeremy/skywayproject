// ================================
// PAYMENT METHOD SELECTION
// ================================

const paymentOptions =
    document.querySelectorAll(".payment-option");

const cardPaymentForm =
    document.querySelector(".card-payment-form");


paymentOptions.forEach(option => {

    option.addEventListener("click", () => {

        // Remove active state
        paymentOptions.forEach(item => {
            item.classList.remove("active");
        });


        // Add active state
        option.classList.add("active");


        const paymentMethod =
            option.dataset.payment;


        // Only show card fields for card payment
        if (paymentMethod === "card") {

            cardPaymentForm.style.display = "flex";

        } else {

            cardPaymentForm.style.display = "none";

        }

    });

});



// ================================
// PAY NOW BUTTON
// ================================

// const payButton =
//     document.getElementById("payButton");


// payButton.addEventListener("click", () => {

//     const activePayment =
//         document.querySelector(
//             ".payment-option.active"
//         );


//     if (!activePayment) {

//         alert("Please select a payment method.");

//         return;

//     }


//     payButton.textContent = "Processing...";

//     payButton.disabled = true;


//     setTimeout(() => {

//         payButton.textContent = "Pay Now";

//         payButton.disabled = false;

//         alert(
//             "Payment process started successfully."
//         );

//     }, 1200);

// });


const payButton = 
    document.getElementById("payButton");


payButton.addEventListener("click", () => {

    const activePayment = 
        document.querySelector(
            ".payment-option.active"
        );


    if (!activePayment) {

        alert("Please select a payment method.");

        return;

    }


    payButton.textContent = "Processing...";
    payButton.disabled = true;


    setTimeout(() => {

        payButton.textContent = "Pay Now";
        payButton.disabled = false;

        alert(
            "Payment process started successfully."
        );

        // Redirect after alert is closed
        // window.location.href = "flightdetails.html";
        window.location.href = "bookingConfirmation.html";

    }, 1200);

});
