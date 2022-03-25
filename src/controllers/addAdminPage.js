import { RequestAdmin } from "../requests/requestsAdmin.js";
import { Local } from "../localstorage/localstorage.js";
import { Vitrine } from "../models/template.js";
import {uptadeQuantity} from "./carrinhototal.js"
import {uptadeTotal} from "./carrinhoprice.js"


class addProductsAdmin{

    static async addProducts(event){
        const btnCart = event.target;
        const products = await RequestAdmin.getMyProducts();
 
        if(btnCart.tagName === "BUTTON"){
            const filterProducts = products.filter((product) => {
                return btnCart.id == product.id;
            })

            Local.cart.push(filterProducts[0]);
            localStorage.setItem('adminProducts', JSON.stringify(Local.cart));
        }

        this.listProductsInCart();
    }
    
    static cart = document.getElementById("emptyCar");
    
    static async listProductsInCart(){
        this.cart.innerHTML = ""
        
        Local.cart.forEach((products) => {
            const productsCart = Vitrine.createVitrine(products);
            
           
            uptadeTotal();
            uptadeQuantity();
            this.cart.appendChild(productsCart);
        })
        
    }

}


export {addProductsAdmin}