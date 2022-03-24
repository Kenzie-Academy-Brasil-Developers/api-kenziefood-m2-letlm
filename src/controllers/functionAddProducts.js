import { KenzieFood } from "../requests/requests.js";
import { Local } from "../localstorage/localstorage.js";
import { Vitrine } from "../models/template.js";

class CartProducts{

    static async addProducts(event){
        const btnCart = event.target;
        const products = await KenzieFood.getPublic();
 
        if(btnCart.tagName === "BUTTON"){
            const filterProducts = products.filter((product) => {
                return btnCart.id == product.id;
            })

            Local.cart.push(filterProducts[0]);
            localStorage.setItem('products', JSON.stringify(Local.cart));
        }

        this.listProductsInCart();
    }
    
    static cart = document.getElementById("emptyCar");
    
    static async listProductsInCart(){
        this.cart.innerHTML = ""
        

        const productsLocal = JSON.parse(localStorage.getItem('products')) || Local.cart;

        productsLocal.forEach((products) => {
            const productsCart = Vitrine.createVitrine(products)

            this.cart.appendChild(productsCart)
        })
    }

}


export {CartProducts}