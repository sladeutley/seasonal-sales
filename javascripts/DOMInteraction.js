'use strict';

let selector = document
.getElementById("seasonSelector");

selector.addEventListener("change", applyDiscount);

function applyDiscount() {
    console.log(event.target);
}

// WHAT WE NEED FOR FUNCTION
// data we need
// seasonal discount
// prices
// which products will update prices

// what to do
    // change prices where needed