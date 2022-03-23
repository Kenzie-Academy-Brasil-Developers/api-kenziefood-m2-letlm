import {CartProducts} from "./src/controllers/functionAddProducts.js"

const sectionProducts = document.getElementById("mainProducts")
const cart = document.getElementById("cart")

sectionProducts.addEventListener("click", CartProducts.addProducts.bind(CartProducts))

// const produtosDoLocalStorage = JSON.parse(localStorage.getItem('products'))

// produtosDoLocalStorage.forEach((products) => {
//     console.log(products[0])
// })