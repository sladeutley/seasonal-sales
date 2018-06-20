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