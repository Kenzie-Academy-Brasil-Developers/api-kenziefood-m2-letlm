import { ColocaNomeCriadoAqui } from "../requests/requests.js"

class AddProduct {
    static btnForm = document.querySelector('.formProducts')

    static start() {
        this.btnForm.addEventListener("click", this.acessProducts.bind(this))
    }

    static acessProducts(event) {
        event.preventDefault()
        const forms = document.querySelector("form")
        const newProduct = {}

        for (let i = 0; i < forms.length; i++) {
            const { name, value } = forms[i]
            if (name) {
                if (value === "") {
                    return alert("Preencha os dados corretamente.")
                }
                newProduct[name] = value
            }
            forms[i].value = ""
        }
        // ColocaNomeCriadoAqui.login(newProduct)
        //     .then(data => {
        //         if (data.status === "Error") {
        //             alert("erro") // trocar por modal
        //         } else {
        //             alert("tudo ok") // trocar por modal
        //         }
        //     })
    }

}

AddProduct.start()
export { AddProduct }