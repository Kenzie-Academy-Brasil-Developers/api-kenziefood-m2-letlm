import { KenzieFood } from "../requests/requests.js";

class Vitrine {

    static main = document.getElementById('mainProducts')
    
    static async productList(){

        this.main.innerText = ""
        const products = await KenzieFood.getPublic()
        
        products.forEach((product) => {
            const templateProducts = this.createVitrine(product)
            this.main.appendChild(templateProducts)
        })
    }

    static createVitrine({ categoria, descricao, imagem, nome, preco, id }){

        const div = document.createElement("div")
        const img = document.createElement("img");
        const cat = document.createElement("button");
        const name = document.createElement("h2");
        const description = document.createElement("p");
        const price = document.createElement("p");
        const button = document.createElement("button")
        const section = document.createElement("section")


        div.id = id;
        img.src = `${imagem}`;
        cat.innerText = `${categoria}`;
        cat.classList.add("categoria");
        cat.setAttribute('id', 'section')
        name.innerText = nome;
        description.innerText = `${descricao}`;
        price.classList.add("price");
        price.innerText = `R$ ${preco.toFixed(2)}`;
        button.innerText = "🛒";
        button.id = id;
        button.classList.add("add");

        div.appendChild(img);
        div.appendChild(cat);
        div.appendChild(name);
        div.appendChild(description);
        section.appendChild(price);
        section.appendChild(button)
        div.appendChild(section)
        
        return div
        };

        

    }



Vitrine.productList()

export {Vitrine}

