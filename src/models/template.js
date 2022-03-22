import { KenzieFood } from "../requests/requests.js";



class Vitrine {


    static main = document.getElementById('mainProducts')

    static async listaProdutos(){
        this.main.innerText = ""
        const products = await KenzieFood.getPublic()
        console.log(products)
            for(let i = 0; i < products.length; i++){
                console.log(products[i])
                const templateProducts = this.createVitrine(products[i])
                this.main.appendChild(templateProducts[i])
            }

           
            
        
        

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

        img.src = `${imagem}`;
        cat.innerText = `${categoria}`;
        cat.classList.add("categoria");
        cat.setAttribute('id', 'section')
        name.innerText = nome;
        description.innerText = `${descricao}`;
        price.innerText = `R$ ${preco}`;
        price.classList.add("price");
        price.innerText = `R$ ${preco}`;
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
        this.main.appendChild(div)
            
        };

    }


Vitrine.listaProdutos()

