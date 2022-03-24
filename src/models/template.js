import { Local } from "../localstorage/localstorage.js";
import { KenzieFood } from "../requests/requests.js";

class Vitrine {

    static main = document.getElementById('mainProducts')
    
    static async productList(){
        const products = await KenzieFood.getPublic()

        this.main.innerText = ""
        
        products.forEach((product) => {
            const templateProducts = this.createVitrine(product)
            this.main.appendChild(templateProducts)
        })
    }

    static createVitrine({ categoria, descricao, imagem, nome, preco, id }){
        
        const div = document.createElement("div");
        const img = document.createElement("img"); 
        const cat = document.createElement("button");
        const name = document.createElement("h2");
        const description = document.createElement("p");
        const price = document.createElement("p");
        const button = document.createElement("button");
        const section = document.createElement("section")
        const buttonRemove = document.createElement("button")
        
        buttonRemove.addEventListener('click', () => {
            
            const productsLocal = JSON.parse(localStorage.getItem('products'))   

            Local.cart.splice(
            Local.cart.findIndex((p) => p.id === id),
                1
            );
            
            // REMOVER PRODUTOS DO LOCAL STORAGE.

            const ulCart = document.getElementById('emptyCar');
            ulCart.removeChild(div);
        })


        div.id = id;
        div.classList.add("teste")
        description.classList.add('disk')
        img.src = `${imagem}`;
        cat.innerText = `${categoria}`;
        cat.classList.add("categoria");
        cat.setAttribute('id', 'section')
        name.innerText = nome;
        description.innerText = `${descricao}`;
        price.classList.add("price");
        price.innerText = `R$ ${preco.toFixed(2)}`;
        button.id = id;
        button.classList.add("add");
        buttonRemove.innerText = "🗑️";
        buttonRemove.id = id;
        buttonRemove.classList.add("remove");
        button.classList.add("add");

        div.appendChild(img);
        div.appendChild(cat)
        div.appendChild(name);
        div.appendChild(description);
        section.appendChild(price);
        section.appendChild(button)
        div.appendChild(section)
        section.appendChild(buttonRemove)
        
        return div
        };

        
    }



Vitrine.productList()

export {Vitrine}

