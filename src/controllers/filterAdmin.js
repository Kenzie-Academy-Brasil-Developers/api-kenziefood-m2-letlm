import {Vitrine} from "../models/templateAdmin.js"
import { RequestAdmin } from "../requests/requestsAdmin.js"

const buttonAll     = document.querySelector(".all")
const buttonBakery  = document.querySelector(".bread")
const buttonFruits  = document.querySelector(".fruits")
const buttonDrinks  = document.querySelector(".wine")
const inputPesquisa = document.querySelector("input");


class Filter {

    static ul = document.querySelector(".productsAdd")
    static async listCategories(p){
        this.ul.innerHTML = ""

        p.forEach((products) => {
            const productsVitrine = Vitrine.createVitrineAdmin(products)

            Filter.ul.appendChild(productsVitrine)
        })
    }

    static FilterInput() {

        inputPesquisa.addEventListener("keyup", async () => {

            const myProducts = await RequestAdmin.getMyProducts()
            
            const valueInput = document.querySelector("input").value
            const ProductsSearch = myProducts.filter((product) => {
                
                return product.nome.toLowerCase().includes(valueInput.toLowerCase()) || product.categoria.toLowerCase().includes(valueInput.toLocaleLowerCase());

            });

            if(ProductsSearch != 0){
                return this.listCategories(ProductsSearch);
            }
        });
    };

    static async validationAll() {
        const myProducts = await RequestAdmin.getMyProducts()
        const allProducts = myProducts.filter((product) => {
            return product
        });

        return Filter.listCategories(allProducts);
    }

    static async validationBakery() {
        const myProducts = await RequestAdmin.getMyProducts()

        const bakeryProducts = myProducts.filter((product) => {
            return product.categoria === "Panificadora"
        });

        return Filter.listCategories(bakeryProducts);
    }

    static async validationFruits() {
        const myProducts = await RequestAdmin.getMyProducts()

        const fruitsProducts = myProducts.filter((product) => {
            return product.categoria === "Frutas"
        });

        return Filter.listCategories(fruitsProducts);
    }

    static async validationDrinks() {
        const myProducts = await RequestAdmin.getMyProducts()

        const drinksProducts = myProducts.filter((product) => {
            return product.categoria === "Bebidas"
        });

        return Filter.listCategories(drinksProducts);
    }
};


buttonAll.addEventListener("click", Filter.validationAll)
buttonBakery.addEventListener("click", Filter.validationBakery)
buttonFruits.addEventListener("click", Filter.validationFruits)
buttonDrinks.addEventListener("click", Filter.validationDrinks)


Filter.FilterInput()
export {Filter}