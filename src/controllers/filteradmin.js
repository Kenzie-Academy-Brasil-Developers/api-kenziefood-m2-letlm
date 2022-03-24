import {productobj, RequestAdmin} from "./../requests/requestsAdmin.js"
import { Vitrine } from "../models/templateAdmin.js"


const buttonAll     = document.querySelector(".all")
const buttonBakery  = document.querySelector(".bread")
const buttonFruits  = document.querySelector(".fruits")
const buttonDrinks  = document.querySelector(".wine")
const inputPesquisa = document.querySelector("input");


class Filter {

    static async listCategories(p){
        Vitrine.main.innerHTML = ""
        p.forEach((products) => {
            const productsVitrine = Vitrine.createVitrine(products)

            Vitrine.main.appendChild(productsVitrine)
        })
    }


    static FilterInput() {

        inputPesquisa.addEventListener("keyup", () => {
            
            const valueInput = document.querySelector("input").value
            const ProductsSearch = productobj.filter((product) => {
                
                return product.nome.toLowerCase().includes(valueInput.toLowerCase()) || product.categoria.toLowerCase().includes(valueInput.toLocaleLowerCase());

            });

            if(ProductsSearch != 0){
                return this.listCategories(ProductsSearch);
            }
        });
    };

    static validationAll() {
        const allProducts = productobj.filter((product) => {
            return product
        });

        return Filter.listCategories(allProducts);
    }

    static validationBakery() {
        const products = await RequestAdmin.getMyProducts()
        const bakeryProducts = products.filter((product) => {
            return product.categoria === "Panificadora"
        });

        return Filter.listCategories(bakeryProducts);
    }

    static validationFruits() {
        const fruitsProducts = productobj.filter((product) => {
            return product.categoria === "Frutas"
        });

        return Filter.listCategories(fruitsProducts);
    }

    static validationDrinks() {
        const drinksProducts = productobj.filter((product) => {
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


