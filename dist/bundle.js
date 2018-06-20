(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
'use strict';

module.exports.displayProducts = (productsArr) => {
    productsArr.forEach( (product) => {
    let card = `<div class="prodCard">
        <h2>${product.name}</h2>
        <h3>${product.category}</h3>
        <p>${product.price}</p>
        <p class="isHidden">${product.discountPrice}</p>
        </div>`;
        let cardWrapper = document.createElement("div");
        cardWrapper.innerHTML = card;
        document.getElementById("products").appendChild(cardWrapper);
    });
};
},{}],3:[function(require,module,exports){
'use strict';
let dom = require("./DOMOutputter");
// take the date from the XHRs and format it so it can go into the DOM

//loop through products and add the category name to each product item

module.exports.formatData = (catArr, prodArr) => {
    let prodsForDom = prodArr.map((prod) => {
        prod.category = null;
        catArr.forEach((category) => {
            if(prod.category_id === category.id) { 
            prod.category = category.name;
            // product.discountPrice = 
            // }
            }
        });
        return prod; 
     });
     dom.displayProducts(prodsForDom); //have to put dom. here bc it says it requires it
};

// module.exports = {formatData}; can be done this way, but to never forget, just add to const formatData like done above. If need to add another method, do:

// module.exports.doStuff = () => {}
},{"./DOMOutputter":2}],4:[function(require,module,exports){
'use strict';
let formatter = require("./formatter");
require("./DOMInteraction");

//categories XHR
let categoryData = null;

const categoryReq = new XMLHttpRequest();

//!!!!FOR THIS EXAMPLE, HAVE TO PASS ONE FIRST, THEN THE NEXXT, BC FORMATTER.JS USES TWO ARGUEMENTS

const parseCatData = () => {
    const catData = JSON.parse(event.target.responseText).categories;
    categoryData = catData;
    prodsReq.send();
};

categoryReq.addEventListener("load", parseCatData);
categoryReq.open("GET", "data/categories.json");
categoryReq.send();
// products XHR
const prodsReq = new XMLHttpRequest();


const parseProdData = () => {
    const prodData = JSON.parse(event.target.responseText).products;
    formatter.formatData(categoryData, prodData);
    // loop through this and add the category name to each item
    // formatData(data);
    console.log("Prods data", prodData);
};

prodsReq.addEventListener("load", parseProdData);
prodsReq.open("GET", "data/products.json");
},{"./DOMInteraction":1,"./formatter":3}]},{},[4]);
