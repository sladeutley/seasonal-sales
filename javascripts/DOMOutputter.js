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