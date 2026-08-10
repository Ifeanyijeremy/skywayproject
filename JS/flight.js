
// Flight Search Results JavaScript

const flights = [
    {
        id: 1,
        airline: "Air France",
        logo: "AF",
        cabin: "Economy",
        departureTime: "10:05",
        departureCode: "LOS",
        arrivalTime: "15:00",
        arrivalCode: "CDG",
        duration: "6h 40m",
        stop: "Nonstop",
        baggage: "2 x 23kg Included",
        price: 450,
        features: ["Refundable", "WiFi", "Meals", "USB"]
    },

    {
        id: 2,
        airline: "Emirates",
        logo: "EK",
        cabin: "Business",
        departureTime: "08:30",
        departureCode: "LOS",
        arrivalTime: "17:15",
        arrivalCode: "DXB",
        duration: "8h 45m",
        stop: "1 Stop",
        baggage: "2 x 30kg Included",
        price: 620,
        features: ["Refundable", "WiFi", "Meals", "Lounge"]
    },

    {
        id: 3,
        airline: "Qatar Airways",
        logo: "QR",
        cabin: "Economy",
        departureTime: "09:15",
        departureCode: "ABV",
        arrivalTime: "18:05",
        arrivalCode: "DOH",
        duration: "7h 50m",
        stop: "Nonstop",
        baggage: "2 x 23kg Included",
        price: 540,
        features: ["WiFi", "Meals", "USB"]
    },

    {
        id: 4,
    airline: "British Airways",
    logo: "BA",
    cabin: "Economy",
    departureTime: "11:20",
    departureCode: "LOS",
    arrivalTime: "20:10",
    arrivalCode: "LHR",
    duration: "7h 50m",
    stop: "Nonstop",
    baggage: "2 x 23kg Included",
    price: 580,
    features: ["WiFi", "Meals", "Refundable"]
}


];

const flightResults = document.getElementById("flightResults");
const airlineFilters = document.querySelectorAll(".airline-filter");
const stopFilters = document.querySelectorAll(".stop-filter");
const priceMin = document.getElementById("priceMin");

const priceMax = document.getElementById("priceMax");

const minPriceDisplay =
    document.getElementById("minPriceDisplay");

const maxPriceDisplay =
    document.getElementById("maxPriceDisplay");

const sortButtons = document.querySelectorAll(".sort-btn");


let filteredFlights = [...flights];

airlineFilters.forEach(filter => {

    filter.addEventListener("change", filterFlights);

});

stopFilters.forEach(filter => {

    filter.addEventListener("change", filterFlights);

});

priceMin.addEventListener("input", filterFlights);

priceMax.addEventListener("input", filterFlights);

sortButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active from all buttons
        sortButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        button.classList.add("active");

        // Get sorting type
        const sortType = button.dataset.sort;

        sortFlights(sortType);

    });

});



function createFlightCard(flight) {

    return `
    
    <article class="flight-card">

        <div class="airline">

            <div class="airline-logo">
                ${flight.logo}
            </div>

            <div class="airline-info">

                <h4>${flight.airline}</h4>

                <span class="cabin">${flight.cabin}</span>

            </div>

        </div>

        <div class="flight-info">

            <div class="departure">

                <h3>${flight.departureTime}</h3>

                <span>${flight.departureCode}</span>

            </div>

            <div class="route">

                <span class="duration">${flight.duration}</span>

                <div class="route-line">

                    <span class="circle"></span>

                    <span class="line"></span>

                    <span class="circle"></span>

                </div>

                <small>${flight.stop}</small>

            </div>

            <div class="arrival">

                <h3>${flight.arrivalTime}</h3>

                <span>${flight.arrivalCode}</span>

            </div>

        </div>

        <div class="baggage">

            ${flight.baggage}

        </div>

        <div class="price">

            <h2>$${flight.price}</h2>

            <small>per traveler</small>

            <button class="book-btn">

                Book Now

            </button>

        </div>

    </article>

    `;
}


function renderFlights(data) {

    flightResults.innerHTML = "";

    data.forEach((flight) => {

        flightResults.innerHTML += createFlightCard(flight);

    });

}
// renderFlights();

// Filter flights by airline


function filterFlights() {

    let filtered = [...flights];

    // Airline filter

    const selectedAirlines = [];

    airlineFilters.forEach(filter => {

        if(filter.checked){

            selectedAirlines.push(filter.value);

        }

    });

    if(selectedAirlines.length > 0){

        filtered = filtered.filter(flight =>

            selectedAirlines.includes(flight.airline)

        );

    }

    // Stops filter
    // (We'll add this next)

        const selectedStops = [];

    stopFilters.forEach(filter => {

        if (filter.checked) {

            selectedStops.push(filter.value);

        }

    });

    if (selectedStops.length > 0) {

        filtered = filtered.filter(flight => {

            return selectedStops.includes(flight.stop);

        });

    }

  // ======================================
// PRICE FILTER
// ======================================

const minimumPrice = Number(priceMin.value);

const maximumPrice = Number(priceMax.value);

if (minimumPrice > maximumPrice) {

    return;

}

minPriceDisplay.textContent =
    `$${minimumPrice}`;

maxPriceDisplay.textContent =
    `$${maximumPrice}`;


filtered = filtered.filter(flight => {

    return flight.price >= minimumPrice &&
           flight.price <= maximumPrice;

});
    renderFlights(filtered);

}

function durationToMinutes(duration) {

    const hours =
        parseInt(duration.match(/\d+h/)?.[0]) || 0;

    const minutes =
        parseInt(duration.match(/\d+m/)?.[0]) || 0;

    return (hours * 60) + minutes;

}

function sortFlights(sortType) {

    let sorted = [...filteredFlights];

    if (sortType === "price") {

        sorted.sort((a, b) => {

            return a.price - b.price;

        });

    }

    if (sortType === "departure") {

        sorted.sort((a, b) => {

            return a.departureTime.localeCompare(
                b.departureTime
            );

        });

    }

   if (sortType === "duration") {

    sorted.sort((a, b) => {

        return durationToMinutes(a.duration)
             - durationToMinutes(b.duration);

    });

}

    renderFlights(sorted);

}

renderFlights(filteredFlights);


// function filterFlights() {

//     const selectedAirlines = [];

//     airlineFilters.forEach(filter => {

//         if (filter.checked) {

//             selectedAirlines.push(filter.value);

//         }

//     });

//     if (selectedAirlines.length === 0) {

//         filteredFlights = [...flights];

//     } else {

//         filteredFlights = flights.filter(flight => {

//             return selectedAirlines.includes(flight.airline);

//         });

//     }

//     renderFlights(filteredFlights);

// }


// stopFilters.forEach(filter => {

//     filter.addEventListener("change", filterFlightsByStop);

// });
























// function filterFlightsByStop() {

//     const selectedStops = [];
//     console.log(selectedStops);
//     stopFilters.forEach(filter => {

//         if (filter.checked) {

//             selectedStops.push(filter.value);

//         }

//     });

//     if (selectedStops.length === 0) {

//         filteredFlights = [...flights];

//     } else {

//         filteredFlights = flights.filter(flight => {

//             return selectedStops.includes(flight.stop);

//         });

//     }

//     renderFlights(filteredFlights);

// }


// stopFilters.forEach(filter => {

//     filter.addEventListener("change", filterFlightsByStop);

// });

// function filterFlightsByStop() {

//     const selectedStops = [];
//     console.log(selectedStops);
//     stopFilters.forEach(filter => {

//         if (filter.checked) {

//             selectedStops.push(filter.value);

//         }

//     });

//     if (selectedStops.length === 0) {

//         filteredFlights = [...flights];

//     } else {

//         filteredFlights = flights.filter(flight => {

//             return selectedStops.includes(flight.stop);

//         });

//     }

//     renderFlights(filteredFlights);

// }

