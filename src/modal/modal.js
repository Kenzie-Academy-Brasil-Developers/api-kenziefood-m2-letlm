import { Vitrine } from "../models/templateAdmin.js";
import {RequestAdmin} from "../requests/requestsAdmin.js";

class ModalProduct {
    static divAddModal = document.querySelector(".modalAdd");

    static newProduct() {
        const getButton = document.querySelector(".addProductCard");
        getButton.addEventListener("click", this.openModal.bind(this));
    }


    // static deleteProduct() {
    //     const getButtonDelete = 
    //     getButtonDelete.addEventListener("click", this.openModalDelete.bind(this))
    // }

    static divAddModal = document.querySelector(".modalAdd");


    static openModal() {

        this.divAddModal.innerHTML = ""
        const div               = document.createElement("div");
        const divBox            = document.createElement("div");
        const divEdit           = document.createElement("div");
        const spanStatus        = document.createElement("span");
        const buttonExit        = document.createElement("button");
        const divModal          = document.createElement("div");
        const form              = document.createElement("form");
        const labelOne          = document.createElement("label");
        const inputName         = document.createElement("input");
        const labelTwo          = document.createElement("label");
        const inputDescription  = document.createElement("input");
        const labelThree        = document.createElement("label");
        const labelBread        = document.createElement("label");
        const divCategory       = document.createElement("div");
        const radioBread        = document.createElement("input");
        const radioFruits       = document.createElement("input");
        const labelFruits       = document.createElement("label");
        const radioDrinks       = document.createElement("input");
        const labelDrinks       = document.createElement("label");
        const labelFour         = document.createElement("label");
        const inputPrice        = document.createElement("input");
        const labelFive         = document.createElement("label");
        const inputImage        = document.createElement("input");
        const btnRegister       = document.createElement("button");


        divCategory.classList.add("category");
        labelFruits.classList.add("legend");
        labelDrinks.classList.add("legend");
        btnRegister.classList.add("btnRegister");
        labelBread.classList.add("legend");
        spanStatus.classList.add("statusSpan");
        buttonExit.classList.add("btnExit");
        labelThree.classList.add("categoryLegend");
        labelFour.classList.add("titlePrice");
        labelFive.classList.add("imageLink");
        labelOne.classList.add("titleProduct");
        labelTwo.classList.add("subtitleProduct");
        divModal.classList.add("modalForm");
        divEdit.classList.add("edit");
        divBox.classList.add("boxModalEdit");
        form.classList.add("newProduct");
        div.classList.add("showModalEdit");

        radioBread.setAttribute("value", "Panificadora");
        labelBread.setAttribute("for", "bread");
        radioFruits.setAttribute("value", "Frutas");
        labelFruits.setAttribute("for", "fruits");
        radioDrinks.setAttribute("value", "Bebidas");
        labelDrinks.setAttribute("for", "drinks");

        radioBread.type         = "radio";
        radioBread.name         = "categoria";
        radioBread.value        = "Panificadora";
        radioBread.id           = "bread";
        labelBread.innerText    = "Panificadora";
        radioFruits.type        = "radio";
        radioFruits.name        = "categoria";
        radioFruits.id          = "fruits";
        labelFruits.innerText   = "Frutas";
        radioDrinks.type        = "radio";
        radioDrinks.name        = "categoria";
        radioDrinks.id          = "drinks";
        labelDrinks.innerText   = "Bebidas";
        div.id                  = "modalEdit";
        
        form.action             = "#";
        spanStatus.innerText    = "Cadastro de produto";
        buttonExit.innerText    = "X";
        labelOne.innerText      = "Nome do Produto";
        inputName.placeholder   = "Digitar o nome";
        inputName.type          = "text";
        inputName.name          = "nome";
        labelTwo.innerText      = "Descrição";


        inputDescription.placeholder    = "Digitar a descrição";
        inputDescription.type           = "text";
        inputDescription.name           = "descricao";
        labelThree.innerText            = "Categorias";
        labelFour.innerText             = "Valor do Produto";
        inputPrice.placeholder          = "Digitar o valor aqui";
        inputPrice.type                 = "text";
        inputPrice.name                 = "preco";
        labelFive.innerText             = "Link da imagem";

        inputImage.placeholder          = "Inserir o link";
        inputImage.type                 = "url";
        inputImage.name                 = "imagem";
        btnRegister.innerText           = "Cadastrar Produto";

        divCategory.appendChild(radioBread);
        divCategory.appendChild(labelBread);
        divCategory.appendChild(radioFruits);
        divCategory.appendChild(labelFruits);
        divCategory.appendChild(radioDrinks);
        divCategory.appendChild(labelDrinks);

        form.appendChild(labelOne);
        form.appendChild(inputName);
        form.appendChild(labelTwo);
        form.appendChild(inputDescription);
        form.appendChild(labelThree);
        form.appendChild(divCategory);
        form.appendChild(labelFour);
        form.appendChild(inputPrice);
        form.appendChild(labelFive);
        form.appendChild(inputImage);
        form.appendChild(btnRegister);

        divModal.appendChild(form);
        divEdit.appendChild(spanStatus);
        divEdit.appendChild(buttonExit);
        divBox.appendChild(divEdit);
        divBox.appendChild(divModal);
        div.appendChild(divBox);

        this.divAddModal.appendChild(div);

        buttonExit.addEventListener("click", () => {
            div.classList.add("desaparecer");
        })

        btnRegister.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("teste")

            const data = {}

            for (let i = 0; i < form.length; i++) {

                const {name, value, type, checked} = form[i]

                if (name && type !== "radio") {
                    data[name] = value
                } else if (checked) {
                    data["categoria"] = value
                }

                form[i].value = ""
            }

            RequestAdmin.createdProduct(data)
                
            .then(async data => {
                
                if (data.error === `${data.error}` || data.msg === `${data.msg}`) {
                    this.modalErrorProduct()
                    div.classList.add("desaparecer");
                } else {
                    div.classList.add("desaparecer");
                    this.modalProductOk()
                    await Vitrine.productsInAdminPage();
                }
            })
        })
    }
    

    static modalErrorProduct(){
        const modalError = document.querySelector(".errorRegister")
        modalError.classList.add("showProductError")
        modalError.addEventListener("click", (event) => {
            if(event.target.tagName === "BUTTON"){
                modalError.classList.remove("showProductError")
            }
        })
    }

    static modalProductOk(){
        const modalOk = document.querySelector(".okRegister")
        modalOk.classList.add("showProductOk")
        modalOk.addEventListener("click", (event) => {
            if(event.target.tagName === "BUTTON"){
                modalOk.classList.remove("showProductOk")
            }
        })
    }

    static async openModalEdit(productId) {

        const products = await RequestAdmin.getMyProducts();
        const productsSearch = products.find((element) => {
            return element.id === productId;
        })

        const {nome, preco, categoria, descricao, id, imagem} = productsSearch

        ModalProduct.divAddModal.innerHTML = ""

        const div               = document.createElement("div");
        const divBox            = document.createElement("div");
        const divEdit           = document.createElement("div");
        const spanStatus        = document.createElement("span");
        const buttonExit        = document.createElement("button");
        const divModal          = document.createElement("div");
        const form              = document.createElement("form");
        const labelOne          = document.createElement("label");
        const inputName         = document.createElement("input");
        const labelTwo          = document.createElement("label");
        const inputDescription  = document.createElement("input")
        const labelThree        = document.createElement("label");
        const divCategory       = document.createElement("div");
        
        divCategory.classList.add("category");

        const radioBread        = document.createElement("input")
        radioBread.type         = "radio";
        radioBread.name         = "categoria";
        radioBread.id           = "bread";
        radioBread.value        = "Panificadora";

        const labelBread        = document.createElement("label");
        labelBread.innerText    = "Panificadora";
        labelBread.classList.add("legend");
        labelBread.setAttribute("for", "bread");

        const radioFruits       = document.createElement("input");
        radioFruits.type        = "radio";
        radioFruits.name        = "categoria";
        radioFruits.id          = "fruits";
        radioFruits.value       = "Frutas";

        const labelFruits       = document.createElement("label");
        labelFruits.classList.add("legend");
        labelFruits.innerText   = "Frutas";
        labelFruits.setAttribute("for", "fruits");

        const radioDrinks       = document.createElement("input");
        radioDrinks.type        = "radio";
        radioDrinks.name        = "categoria";
        radioDrinks.id          = "drinks";
        radioDrinks.value       = "Bebidas";

        const labelDrinks       = document.createElement("label");
        labelDrinks.innerText   = "Bebidas";
        labelDrinks.classList.add("legend");
        labelDrinks.setAttribute("for", "drinks");


        const labelFour         = document.createElement("label");
        const inputPrice        = document.createElement("input");
        const labelFive         = document.createElement("label");
        const inputImage        = document.createElement("input");
        const divBtns           = document.createElement("div");
        const btnRegister       = document.createElement("button");
        const btnLeave          = document.createElement("button");

        
        if(categoria === "Panificadora"){
            radioBread.checked = true
        } else if (categoria === "Bebidas"){
            radioDrinks.checked = true
        } else if (categoria === "Frutas"){
            radioFruits.checked = true
        }
        div.classList.add("showModalEdit");
        divBox.classList.add("boxModalEdit");
        divEdit.classList.add("edit");
        spanStatus.classList.add("statusSpan");
        buttonExit.classList.add("btnExit");
        divModal.classList.add("modalForm");
        divBtns.classList.add("divFinally");
        labelOne.classList.add("titleProduct");
        labelTwo.classList.add("subtitleProduct");
        labelThree.classList.add("categoryLegend");
        labelFour.classList.add("titlePrice");
        labelFive.classList.add("imageLink");
        btnLeave.classList.add("btnLeave");
        btnRegister.classList.add("btnSave");
        form.classList.add("newProduct");

            div.id                  = "modalEdit";
            form.action             = "#";
            spanStatus.innerText    = "Edição de produto";
            buttonExit.innerText    = "X";
            labelOne.innerText      = "Nome do Produto";
            inputName.value         = `${nome}`;
            inputName.type          = "text";
            inputName.name          = "nome";
            labelTwo.innerText      = "Descrição";
            inputDescription.value  = `${descricao}`;
            inputDescription.type   = "text";
            inputDescription.name   = "descricao";
            labelThree.innerText    = "Categorias";
            labelFour.innerText     = "Valor do Produto";
            inputPrice.value        = `${preco}`;
            inputPrice.type         = "text";
            inputPrice.name         = "preco";
            labelFive.innerText     = "Link da imagem";
            inputImage.value        = `${imagem}`;
            inputImage.type         = "url";
            inputImage.name         = "imagem";
            btnLeave.innerText      = "Cancelar";
            btnRegister.innerText   = "Salvar alterações";
    

        divCategory.appendChild(radioBread);
        divCategory.appendChild(labelBread);
        divCategory.appendChild(radioFruits);
        divCategory.appendChild(labelFruits);
        divCategory.appendChild(radioDrinks);
        divCategory.appendChild(labelDrinks);

        divBtns.appendChild(btnLeave);
        divBtns.appendChild(btnRegister);
        form.appendChild(labelOne);
        form.appendChild(inputName);
        form.appendChild(labelTwo);
        form.appendChild(inputDescription);
        form.appendChild(labelThree);
        form.appendChild(divCategory);
        form.appendChild(labelFour);
        form.appendChild(inputPrice);
        form.appendChild(labelFive);
        form.appendChild(inputImage);
        form.appendChild(divBtns);
        divModal.appendChild(form);
        divEdit.appendChild(spanStatus);
        divEdit.appendChild(buttonExit);
        divBox.appendChild(divEdit);
        divBox.appendChild(divModal);
        div.appendChild(divBox);

        ModalProduct.divAddModal.appendChild(div);

        buttonExit.addEventListener("click", () => {
            div.classList.add("desaparecer");
        })
        
        btnRegister.addEventListener("click", async (event) => {
            event.preventDefault();

            const data = {}

            for (let i = 0; i < form.length; i++) {

                const {name, value, type, checked} = form[i]

                if (name && type !== "radio") {
                    data[name] = value
                } else if (checked) {
                    console.log(form[i])
                    console.log(value)
                    data["categoria"] = value
                }

                form[i].value = ""
            }

            await RequestAdmin.editProducts(productId, data);
            div.classList.add("desaparecer");
            await Vitrine.productsInAdminPage();

        //    .then(data => {
        //         div.classList.add("desaparecer")
               
        // })
        })

        btnLeave.addEventListener("click", () => {
            div.classList.add("desaparecer");
        })

        // btnRegister.addEventListener("click", () => {
        //     SALVAR A ALTERAÇÃO
        // })
    }

    static async openModalDelete(productId) {
        this.divAddModal.innerHTML = ""  
        
        const div           = document.createElement("div");
        const divBox        = document.createElement("div");
        const divDelete     = document.createElement("div");
        const spanStatus    = document.createElement("span");
        const buttonExit    = document.createElement("button");
        const divStatus     = document.createElement("div");
        const spanMessage   = document.createElement("span");
        const divBtns       = document.createElement("div");
        const btnYes        = document.createElement("button");
        const btnNo         = document.createElement("button");
        
        spanMessage.classList.add("messageStatus");
        spanStatus.classList.add("statusSpan");
        buttonExit.classList.add("btnExit");
        divStatus.classList.add("statusOver");
        divDelete.classList.add("delete");
        divBtns.classList.add("divButtons");
        divBox.classList.add("boxModalDelete");
        btnYes.classList.add("yes");
        btnNo.classList.add("no");
        div.classList.add("showModalDelete");

        div.id                  = "modalDelete";
        btnNo.innerText         = "Não";
        btnYes.innerText        = "Sim";
        spanMessage.innerText   = "Tem certeza que deseja excluir este produto?";
        buttonExit.innerText    = "X";
        spanStatus.innerText    = "Exclusão de Produto";
        
        
        divDelete.appendChild(spanStatus);
        divDelete.appendChild(buttonExit);
        
        divStatus.appendChild(spanMessage);
        divBtns.appendChild(btnYes);
        divBtns.appendChild(btnNo);
        
        divBox.appendChild(divDelete);
        divBox.appendChild(divStatus);
        divBox.appendChild(divBtns);
        
        div.appendChild(divBox);
        
        this.divAddModal.appendChild(div);
        
        buttonExit.addEventListener("click", () => {
            div.classList.add("desaparecer");
        })

        btnYes.addEventListener("click", async () => {
            await RequestAdmin.deleteProducts(productId);
            div.classList.add("desaparecer");
            await Vitrine.productsInAdminPage();
            }
            
        )

        btnNo.addEventListener("click", () => {
            div.classList.add("desaparecer");
        })
    }

    static logout(){
        const logOff = document.querySelector(".adminProfile")
        logOff.addEventListener("click", () => {
            this.modalLogout.bind(this)})
    }

    static modalLogout(){
        const modals = document.querySelector(".logoutAdmin")
        modals.classList.add("showLogout")
        modals.addEventListener("click", (event) => {
            if(event.target.tagName === "BUTTON"){
                modals.classList.remove("showLogout")
            }
        })
    }
}

export {ModalProduct}