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