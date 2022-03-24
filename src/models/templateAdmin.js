import { ModalProduct } from "../modal/modal.js";
import { RequestAdmin } from "../requests/requestsAdmin.js";

class Vitrine {

    static ul = document.getElementById('mainProducts');
    
    static async productsAdminHomePage(){

        const products = await RequestAdmin.getMyProducts();
        
        products.forEach((product) => {
            const templateProducts = this.createVitrineAdmin(product);
            this.ul.appendChild(templateProducts);
        })
    }

    static ulAdminPage = document.querySelector(".productsAdd");

    static async productsInAdminPage(){
        const products = await RequestAdmin.getMyProducts();
        
        this.ulAdminPage.innerHTML = ""
        products.forEach((product) => {
            const templateProducts = this.createVitrineAdmin(product);
            this.ulAdminPage.appendChild(templateProducts);
        })

    }

    static createVitrineAdmin({ categoria, descricao, imagem, nome, id, preco}){
        
        const li                = document.createElement("li");
        const div               = document.createElement("div");
        const img               = document.createElement("img");
        const span              = document.createElement("span");
        const divTwo            = document.createElement("div");
        const spanCats          = document.createElement("span");
        const divThree          = document.createElement("div");
        const spanDesc          = document.createElement("span");
        const button            = document.createElement("button");
        const imgButton         = document.createElement("img");
        const buttonDelete      = document.createElement("button");
        const imgButtonDelete   = document.createElement("img");

        li.classList.add("teste");
        div.classList.add("products");
        img.classList.add("imgProduct");
        span.classList.add("nameProduct");
        divTwo.classList.add("category");
        button.classList.add("editProduct");
        spanCats.classList.add("category");
        divThree.classList.add("descriptionAndAction");
        spanDesc.classList.add("descriptionProduct");
        buttonDelete.classList.add("deleteProduct");

        li.id               = `${id}`;
        img.src             = `${imagem}`;
        spanCats.innerText  = `${categoria}`;
        span.innerText      = `${nome}`;
        spanDesc.innerText  = `${descricao}`;
        imgButton.src       = "/public/images/iconEdit.png";
        imgButtonDelete.src = "/public/images/iconDelete.png";

        
        button.addEventListener("click", () => {
            ModalProduct.openModalEdit(id);
        })
        
        buttonDelete.addEventListener("click", () => {
            ModalProduct.openModalDelete(id);
        })
        
        button.appendChild(imgButton);
        buttonDelete.appendChild(imgButtonDelete);
        divTwo.appendChild(spanCats);
        divThree.appendChild(spanDesc);
        divThree.appendChild(button);
        divThree.appendChild(buttonDelete);
        div.appendChild(img);
        div.appendChild(span);
        div.appendChild(divTwo);
        div.appendChild(divThree);

        li.appendChild(div);

        return li;
        }
}

    
export {Vitrine}
