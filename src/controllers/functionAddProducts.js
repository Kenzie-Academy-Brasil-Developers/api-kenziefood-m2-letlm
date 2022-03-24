import { KenzieFood } from "../requests/requests.js";
import { Local } from "../localstorage/localstorage.js";
import { Vitrine } from "../models/template.js";
import {uptadeQuantity} from "../controllers/carrinhototal.js"
import {uptadeTotal} from "../controllers/carrinhoprice.js"




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
        
        Local.cart.forEach((products) => {
            const productsCart = Vitrine.createVitrine(products)
            
           
            uptadeTotal()
            uptadeQuantity()
            this.cart.appendChild(productsCart)
        })
        
    }



}


export {CartProducts}