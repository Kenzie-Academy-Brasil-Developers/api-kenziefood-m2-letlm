import { KenzieFood } from "../requests/requests.js"
import { Local } from "../localstorage/localstorage.js"

class CartProducts{

    static async addProducts(event){
        const btnCart = event.target;
        const products = await KenzieFood.getPublic();

        if(btnCart.tagName === "BUTTON"){
            const filterProducts = products.filter((product) => {
                return btnCart.id == product.id
            })

            Local.cart.push(filterProducts) 
            localStorage.setItem('products', JSON.stringify(Local.cart))
        }
    }

}



export {CartProducts}