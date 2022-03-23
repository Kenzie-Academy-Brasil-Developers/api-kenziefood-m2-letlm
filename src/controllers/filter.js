import {objproducts} from "./../requests/requests.js"
import {Vitrine} from "./../models/template.js"

const buttonCategorias = document.querySelectorAll("#buttonCategoria");
const inputPesquisa = document.querySelector("input");



class Filter {

    static ValidationCategories(button) {
        switch (button.target.className) {

            case "all":
                return Vitrine.vitrineProdutos(objproducts);
                break;

            case "bakery":
                const ListaPanificadora = objproducts.filter(element => {
                    return element.categoria === "Panificadora";
                });
                return Vitrine.vitrineProdutos(ListaPanificadora);
                break;

            case "fruits":
                const ListaFrutas = objproducts.filter(element => {
                    return element.categoria === "Frutas";
                });
                return Vitrine.vitrineProdutos(ListaFrutas);
                break;

            case "drinks":
                const ListaBebidas = objproducts.filter(element => {
                    return element.categoria === "Bebidas";
                });

                return Vitrine.vitrineProdutos(ListaBebidas);
                break;

        }
    }
    static FilterCategorias() {

        buttonCategorias.forEach((element) => {

            element.addEventListener("click", Filter.ValidationCategories)
            
        });

    }

    static FilterInput() {

        inputPesquisa.addEventListener("keyup", () => {

            const valueInput = document.querySelector("input").value
            const ProductsSearch = objproducts.filter(element => {

                return element.nome.toLowerCase().includes(valueInput.toLowerCase());

            });


            return Vitrine.vitrineProdutos(ProductsSearch);
        });
    };
};

Filter.ValidationCategories()
export {Filter}