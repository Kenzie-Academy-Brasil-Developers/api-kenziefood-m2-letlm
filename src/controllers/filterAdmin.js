import {objproducts} from "../requests/requests.js"
import {Vitrine} from "../models/template.js"

const buttonAll     = document.querySelector(".all")
const buttonBakery  = document.querySelector(".bakery")
const buttonFruits  = document.querySelector(".fruits")
const buttonDrinks  = document.querySelector(".drinks")
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
            const ProductsSearch = objproducts.filter((product) => {
                
                return product.nome.toLowerCase().includes(valueInput.toLowerCase()) || product.categoria.toLowerCase().includes(valueInput.toLocaleLowerCase());

            });

            if(ProductsSearch != 0){
                return this.listCategories(ProductsSearch);
            }
        });
    };

    static validationAll() {
        const allProducts = objproducts.filter((product) => {
            return product
        });

        return Filter.listCategories(allProducts);
    }

    static validationBakery() {
        const bakeryProducts = objproducts.filter((product) => {
            return product.categoria === "Panificadora"
        });

        return Filter.listCategories(bakeryProducts);
    }

    static validationFruits() {
        const fruitsProducts = objproducts.filter((product) => {
            return product.categoria === "Frutas"
        });

        return Filter.listCategories(fruitsProducts);
    }

    static validationDrinks() {
        const drinksProducts = objproducts.filter((product) => {
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