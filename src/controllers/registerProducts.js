import { RequestAdmin } from "../requests/requestsAdmin.js";
import {Vitrine} from "../models/templateAdmin.js"

class FormCreated {
    static createdProduct = document.querySelector("showModalEdit")
    
    static editProduct = document.querySelector(".editProduct")
    static create = document.querySelector(".addProductCard")
    static select = document.querySelector(".showModalEdit")

    static start(){
        if("click")

        FormCreated.create.addEventListener("click", () => {
            FormCreated.select.classList.add("aparecer")
            FormCreated.createdProduct.addEventListener("submit", this.postProduct.bind(this))
            console.log(FormCreated.createdProduct)
            FormCreated.editProduct.addEventListener("submit", this.postProduct.bind(this))
            Vitrine.productsAdmin().catch(console.error)
        })
    }

    static postProduct(event){
        event.preventDefault()
        const inputs = document.querySelector("form")
        console.log(inputs)
        const newProduct = {}

        for(let i = 0; i < inputs.length; i++) {
            if(inputs[i].name){
                const name = inputs[i].name
                const value = inputs[i].value

                newProduct[name] = value
            }
            inputs[i].value = ""
        }
        if(newProduct.id !== undefined && newProduct.id !== ""){
            RequestAdmin.editProducts(newProduct.id, newProduct.content)
                .then(async() => {
                    await Vitrine.productList()
                })
        }else{
            RequestAdmin.createdProduct(newProduct)
                .then(async() => {
                    await Vitrine.productList()
                })
        }
        document.querySelector('modalFormEditar').classList.remove("aparecer")
    }

}
FormCreated.start()
FormCreated.postProduct()

export {FormCreated}