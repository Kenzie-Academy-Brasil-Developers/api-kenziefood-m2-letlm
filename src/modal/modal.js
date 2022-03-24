import {RequestAdmin} from "../requests/requestsAdmin.js"

class ModalProduct {
    static divAddModal = document.querySelector(".modalAdd")


    static newProduct() {
        const getButton = document.querySelector(".addProductCard")
        getButton.addEventListener("click", this.openModal.bind(this))
    }


    // static deleteProduct() {
    //     const getButtonDelete = document.querySelector(".deleteProduct")
    //     getButtonDelete.addEventListener("click", this.openModalDelete.bind(this))
    // }

    static divAddModal = document.querySelector(".modalAdd")


    static openModal() {

        this.divAddModal.innerHTML = ""
        const div = document.createElement("div")
        const divBox = document.createElement("div")
        const divEdit = document.createElement("div")
        const spanStatus = document.createElement("span")
        const buttonExit = document.createElement("button")
        const divModal = document.createElement("div")
        const form = document.createElement("form")
        const labelOne = document.createElement("label")
        const inputName = document.createElement("input")
        const labelTwo = document.createElement("label")
        const inputDescription = document.createElement("input")
        const labelThree = document.createElement("label")

        const divCategory = document.createElement("div")
        divCategory.classList.add("category")
        const radioBread = document.createElement("input")
        radioBread.type = "radio"
        radioBread.name = "categoria"
        radioBread.value = "Panificadora"
        radioBread.id = "bread"
        radioBread.setAttribute("value", "Panificadora")
        const labelBread = document.createElement("label")
        labelBread.classList.add("legend")
        labelBread.innerText = "Panificadora"
        labelBread.setAttribute("for", "bread")
        const radioFruits = document.createElement("input")
        radioFruits.type = "radio"
        radioFruits.name = "categoria"
        radioFruits.setAttribute("value", "Frutas")
        radioFruits.id = "fruits"
        const labelFruits = document.createElement("label")
        labelFruits.classList.add("legend")
        labelFruits.innerText = "Frutas"
        labelFruits.setAttribute("for", "fruits")
        const radioDrinks = document.createElement("input")
        radioDrinks.type = "radio"
        radioDrinks.name = "categoria"
        radioDrinks.setAttribute("value", "Bebidas")
        radioDrinks.id = "drinks"
        const labelDrinks = document.createElement("label")
        labelDrinks.classList.add("legend")
        labelDrinks.innerText = "Bebidas"
        labelDrinks.setAttribute("for", "drinks")
        const labelFour = document.createElement("label")
        const inputPrice = document.createElement("input")
        const labelFive = document.createElement("label")
        const inputImage = document.createElement("input")
        const btnRegister = document.createElement("button")

        div.id = "modalEdit"
        div.classList.add("showModalEdit")
        divBox.classList.add("boxModalEdit")
        divEdit.classList.add("edit")
        spanStatus.classList.add("statusSpan")
        buttonExit.classList.add("btnExit")
        divModal.classList.add("modalForm")
        form.classList.add("newProduct")
        form.action = "#"
        spanStatus.innerText = "Cadastro de produto"
        buttonExit.innerText = "X"
        labelOne.innerText = "Nome do Produto"
        labelOne.classList.add("titleProduct")
        inputName.placeholder = "Digitar o nome"
        inputName.type = "text"
        inputName.name = "nome"
        labelTwo.innerText = "Descrição"
        labelTwo.classList.add("subtitleProduct")
        inputDescription.placeholder = "Digitar a descrição"
        inputDescription.type = "text"
        inputDescription.name = "descricao"
        labelThree.innerText = "Categorias"
        labelThree.classList.add("categoryLegend")
        labelFour.innerText = "Valor do Produto"
        labelFour.classList.add("titlePrice")
        inputPrice.placeholder = "Digitar o valor aqui"
        inputPrice.type = "text"
        inputPrice.name = "preco"
        labelFive.innerText = "Link da imagem"
        labelFive.classList.add("imageLink")
        inputImage.placeholder = "Inserir o link"
        inputImage.type = "url"
        inputImage.name = "imagem"
        btnRegister.classList.add("btnRegister")
        btnRegister.innerText = "Cadastrar Produto"
        divCategory.appendChild(radioBread)
        divCategory.appendChild(labelBread)
        divCategory.appendChild(radioFruits)
        divCategory.appendChild(labelFruits)
        divCategory.appendChild(radioDrinks)
        divCategory.appendChild(labelDrinks)
        form.appendChild(labelOne)
        form.appendChild(inputName)
        form.appendChild(labelTwo)
        form.appendChild(inputDescription)
        form.appendChild(labelThree)
        form.appendChild(divCategory)
        form.appendChild(labelFour)
        form.appendChild(inputPrice)
        form.appendChild(labelFive)
        form.appendChild(inputImage)
        form.appendChild(btnRegister)
        divModal.appendChild(form)
        divEdit.appendChild(spanStatus)
        divEdit.appendChild(buttonExit)
        divBox.appendChild(divEdit)
        divBox.appendChild(divModal)
        div.appendChild(divBox)
        this.divAddModal.appendChild(div)

        buttonExit.addEventListener("click", () => {
            div.classList.add("desaparecer")
        })

        btnRegister.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {}

            for (let i = 0; i < form.length; i++) {

                const {
                    name,
                    value,
                    type,
                    checked
                } = form[i]

                if (name && type !== "radio") {
                    data[name] = value
                } else if (checked) {
                    data["categoria"] = value
                }

                form[i].value = ""
            }

            RequestAdmin.createdProduct(data)

                .then(data => {

                    if (data.error === `${data.error}` || data.msg === `${data.msg}`) {
                        alert("Erro ao cadastrar o produto, tente novamente!")
                        div.classList.add("desaparecer")
                    } else {
                        div.classList.add("desaparecer")
                    }
                })
        })
    }

    static async openModalEdit(productId) {

        const products = await RequestAdmin.getMyProducts()
        console.log(products)
        const productsSearch = products.find((element) => {
            return element.id === productId
        })

        const {nome, preco, categoria, descricao, id, imagem} = productsSearch

        ModalProduct.divAddModal.innerHTML = ""

        const div = document.createElement("div")
        const divBox = document.createElement("div")
        const divEdit = document.createElement("div")
        const spanStatus = document.createElement("span")
        const buttonExit = document.createElement("button")
        const divModal = document.createElement("div")
        const form = document.createElement("form")
        const labelOne = document.createElement("label")
        const inputName = document.createElement("input")
        const labelTwo = document.createElement("label")
        const inputDescription = document.createElement("input")
        const labelThree = document.createElement("label")
        const divCategory = document.createElement("div")
        divCategory.classList.add("category")
        const radioBread = document.createElement("input")
        radioBread.type = "radio"
        radioBread.name = "categoria"
        radioBread.id = "bread"
        const labelBread = document.createElement("label")
        labelBread.classList.add("legend")
        labelBread.innerText = "Panificadora"
        labelBread.setAttribute("for", "bread")
        const radioFruits = document.createElement("input")
        radioFruits.type = "radio"
        radioFruits.name = "categoria"
        radioFruits.id = "fruits"
        const labelFruits = document.createElement("label")
        labelFruits.classList.add("legend")
        labelFruits.innerText = "Frutas"
        labelFruits.setAttribute("for", "fruits")
        const radioDrinks = document.createElement("input")
        radioDrinks.type = "radio"
        radioDrinks.name = "categoria"
        radioDrinks.id = "drinks"
        const labelDrinks = document.createElement("label")
        labelDrinks.classList.add("legend")
        labelDrinks.innerText = "Bebidas"
        labelDrinks.setAttribute("for", "drinks")
        const labelFour = document.createElement("label")
        const inputPrice = document.createElement("input")
        const labelFive = document.createElement("label")
        const inputImage = document.createElement("input")
        const divBtns = document.createElement("div")
        const btnRegister = document.createElement("button")
        const btnLeave = document.createElement("button")

        
        if(categoria === "Panificadora"){
            radioBread.checked = true
        } else if (categoria === "Bebidas"){
            radioDrinks.checked = true
        } else if (categoria === "Frutas"){
            radioFruits.checked = true
        }
            div.id = "modalEdit"
            div.classList.add("showModalEdit")
            divBox.classList.add("boxModalEdit")
            divEdit.classList.add("edit")
            spanStatus.classList.add("statusSpan")
            buttonExit.classList.add("btnExit")
            divModal.classList.add("modalForm")
            divBtns.classList.add("divFinally")
            form.classList.add("newProduct")
            form.action = "#"
            spanStatus.innerText = "Edição de produto"
            buttonExit.innerText = "X"
            labelOne.innerText = "Nome do Produto"
            labelOne.classList.add("titleProduct")
            inputName.value = `${nome}`
            inputName.type = "text"
            inputName.name = "nome"
            labelTwo.innerText = "Descrição"
            labelTwo.classList.add("subtitleProduct")
            inputDescription.value = `${descricao}`
            inputDescription.type = "text"
            inputDescription.name = "descricao"
            labelThree.innerText = "Categorias"
            labelThree.classList.add("categoryLegend")
            labelFour.innerText = "Valor do Produto"
            labelFour.classList.add("titlePrice")
            inputPrice.placeholder = ""
            inputPrice.type = "text"
            inputPrice.name = "preco"
            labelFive.innerText = "Link da imagem"
            labelFive.classList.add("imageLink")
            inputImage.placeholder = ""
            inputImage.type = "url"
            inputImage.name = "imagem"
            btnLeave.classList.add("btnLeave")
            btnLeave.innerText = "Excluir"
            btnRegister.classList.add("btnSave")
            btnRegister.innerText = "Salvar alterações"
    

        divCategory.appendChild(radioBread)
        divCategory.appendChild(labelBread)
        divCategory.appendChild(radioFruits)
        divCategory.appendChild(labelFruits)
        divCategory.appendChild(radioDrinks)
        divCategory.appendChild(labelDrinks)

        divBtns.appendChild(btnLeave)
        divBtns.appendChild(btnRegister)

        form.appendChild(labelOne)
        form.appendChild(inputName)
        form.appendChild(labelTwo)
        form.appendChild(inputDescription)
        form.appendChild(labelThree)
        form.appendChild(divCategory)
        form.appendChild(labelFour)
        form.appendChild(inputPrice)
        form.appendChild(labelFive)
        form.appendChild(inputImage)
        form.appendChild(divBtns)
        divModal.appendChild(form)
        divEdit.appendChild(spanStatus)
        divEdit.appendChild(buttonExit)
        divBox.appendChild(divEdit)
        divBox.appendChild(divModal)
        div.appendChild(divBox)
        ModalProduct.divAddModal.appendChild(div)

        buttonExit.addEventListener("click", () => {
            div.classList.add("desaparecer")
        })



        // btnLeave.addEventListener("click", () => {
        //     EXCLUIR O CADASTRO
        // })

        // btnRegister.addEventListener("click", () => {
        //     SALVAR A ALTERAÇÃO
        // })
    }

    static openModalDelete() {
        this.divAddModal.innerHTML = ""

        const div = document.createElement("div")
        const divBox = document.createElement("div")
        const divDelete = document.createElement("div")
        const spanStatus = document.createElement("span")
        const buttonExit = document.createElement("button")
        const divStatus = document.createElement("div")
        const spanMessage = document.createElement("span")
        const divBtns = document.createElement("div")
        const btnYes = document.createElement("button")
        const btnNo = document.createElement("button")


        div.id = "modalDelete"
        div.classList.add("showModalDelete")
        divBox.classList.add("boxModalDelete")
        divDelete.classList.add("delete")
        spanStatus.classList.add("statusSpan")
        spanStatus.innerText = "Exclusão de Produto"
        buttonExit.classList.add("btnExit")
        buttonExit.innerText = "X"
        divStatus.classList.add("statusOver")
        spanMessage.classList.add("messageStatus")
        spanMessage.innerText = "Tem certeza que deseja excluir este produto?"
        divBtns.classList.add("divButtons")
        btnYes.classList.add("yes")
        btnYes.innerText = "Sim"
        btnNo.classList.add("no")
        btnNo.innerText = "Não"


        divDelete.appendChild(spanStatus)
        divDelete.appendChild(buttonExit)

        divStatus.appendChild(spanMessage)
        divBtns.appendChild(btnYes)
        divBtns.appendChild(btnNo)

        divBox.appendChild(divDelete)
        divBox.appendChild(divStatus)
        divBox.appendChild(divBtns)

        div.appendChild(divBox)

        this.divAddModal.appendChild(div)

        buttonExit.addEventListener("click", () => {
            div.classList.add("desaparecer")
        })

        // btnYes.addEventListener("click", () => {
        //     VAI APAGAR O PRODUTO
        // })

        btnNo.addEventListener("click", () => {
            div.classList.add("desaparecer")
        })
    }
}

export {
    ModalProduct
}