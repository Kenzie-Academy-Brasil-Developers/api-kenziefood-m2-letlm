import {CartProducts} from "./src/controllers/functionAddProducts.js"

const sectionProducts = document.getElementById("mainProducts")

CartProducts.listProductsInCart()
sectionProducts.addEventListener("click", CartProducts.addProducts.bind(CartProducts))

// const produtosDoLocalStorage = JSON.parse(localStorage.getItem('products'))

// produtosDoLocalStorage.forEach((products) => {
//     console.log(products[0])
// })