import { uptadeTotal }    from "../controllers/carrinhoprice.js";
import { uptadeQuantity } from "../controllers/carrinhototal.js";
import { Local }          from "../localstorage/localstorage.js";
import { KenzieFood }     from "../requests/requests.js";


class Vitrine {

    static main = document.getElementById('mainProducts');
    
    static async productList(){
        const products = await KenzieFood.getPublic();
        this.main.innerText = ""
        
        products.forEach((product) => {
            const templateProducts = this.createVitrine(product);
            this.main.appendChild(templateProducts);
        })
    }

    static createVitrine({categoria, descricao, imagem, nome, preco, id}){
        
        const div           = document.createElement("div");
        const img           = document.createElement("img"); 
        const name          = document.createElement("h2");
        const description   = document.createElement("p");
        const price         = document.createElement("p");
        const cat           = document.createElement("button");
        const button        = document.createElement("button");
        const section       = document.createElement("section")
        const buttonRemove  = document.createElement("button");
        
        buttonRemove.addEventListener('click', () => {  

            Local.cart.splice(
            Local.cart.findIndex((p) => p.id === id),
                1
            );
            
            localStorage.setItem('products', JSON.stringify(Local.cart));

            uptadeTotal();
            uptadeQuantity();    
            const ulCart = document.getElementById('emptyCar');
            ulCart.removeChild(div);
        })


        cat.setAttribute('id', 'section')
        cat.classList.add("categoria");
        div.classList.add("teste");
        price.classList.add("price");
        button.classList.add("add");
        button.classList.add("add");
        description.classList.add('disk');
        buttonRemove.classList.add("remove");

        div.id                  = id;
        img.src                 = `${imagem}`;
        name.innerText          = nome;
        description.innerText   = `${descricao}`;
        cat.innerText           = `${categoria}`;
        price.innerText         = `R$ ${preco.toFixed(2)}`;
        button.id               = id;
        buttonRemove.innerText  = "🗑️";
        buttonRemove.id         = id;

        div.appendChild(buttonRemove);
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(description);
        div.appendChild(cat);
        section.appendChild(price);
        section.appendChild(button)
        div.appendChild(section);
        
        return div;
        };

}


Vitrine.productList();

export {Vitrine}

