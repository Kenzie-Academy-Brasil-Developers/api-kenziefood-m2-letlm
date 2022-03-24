class ModalProduct{

    static newProduct(){
        const getButton = document.querySelector(".addProductCard")
       
        getButton.addEventListener("click", this.openModal.bind(this))
    
    }

    static openModal(){
        const body = document.querySelector("body")

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
        const btnBread = document.createElement("button")
        const btnFruits = document.createElement("button")
        const btnDrinks = document.createElement("button")
        const labelFour = document.createElement("label")
        const inputPrice = document.createElement("input")
        const labelFive= document.createElement("label")
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
        labelOne.innerText = "Nome do Produto"
        inputName.placeholder = "Digitar o nome"
        inputName.type = "text"
        inputName.name = "nome"
        labelTwo.innerText = "Descrição"
        inputDescription.placeholder = "Digitar a descrição"
        inputDescription.type = "text"
        inputDescription.name = "descricao"
        labelThree.innerText = "categorias"
        divCategory.classList.add("btnsCategory")
        btnBread.classList.add("btnBread")
        btnFruits.classList.add("btnFruits")
        btnDrinks.classList.add("btnDrinks")
        labelFour.innerText = "Valor do Produto"
        inputPrice.placeholder = "Digitar o valor aqui"
        inputPrice.type = "text"
        inputPrice.name = "preco"
        labelFive.innerText = "Link da imagem"
        inputImage.placeholder = "Inserir o link"
        inputImage.type = "url"
        inputImage.name = "imagem"
        btnRegister.classList.add("btnRegister")

        divCategory.appendChild(btnBread)
        divCategory.appendChild(btnFruits)
        divCategory.appendChild(btnDrinks)

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
        body.appendChild(div)
        
        buttonExit.addEventListener("click", () => {
            div.classList.add("desaparecer")
        })
    }
}

export {ModalProduct}