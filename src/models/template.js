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

    static createVitrine({categoria, descricao, imagem, nome, preco, id}){
        
        const div = document.createElement("div");
        const img = document.createElement("img"); 
        const name = document.createElement("h2");
        const description = document.createElement("p");
        const price = document.createElement("p");
        const cat = document.createElement("button");
        const button = document.createElement("button");
        const section = document.createElement("section")
        const buttonRemove = document.createElement("button")
        
        buttonRemove.addEventListener('click', () => {  

            Local.cart.splice(
            Local.cart.findIndex((p) => p.id === id),
                1
            );
            
            localStorage.setItem('products', JSON.stringify(Local.cart));

            const ulCart = document.getElementById('emptyCar');
            ulCart.removeChild(div);
        })


        div.id = id;
        div.classList.add("teste")
        description.classList.add('disk')
        img.src = `${imagem}`;
        name.innerText = nome;
        description.innerText = `${descricao}`;
        cat.setAttribute('id', 'section')
        cat.innerText = `${categoria}`;
        cat.classList.add("categoria");
        price.classList.add("price");
        price.innerText = `R$ ${preco}`;
        button.id = id;
        button.classList.add("add");
        buttonRemove.innerText = "🗑️";
        buttonRemove.id = id;
        buttonRemove.classList.add("remove");
        button.classList.add("add");

        div.appendChild(buttonRemove)
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(description);
        div.appendChild(cat)
        section.appendChild(price);
        section.appendChild(button)
        div.appendChild(section)
        
        return div
        };

        
    }


Vitrine.productList()

export {Vitrine}

