import { KenzieFood } from "../requests/requests.js"

class Register {
    static btnForm = document.querySelector('button')

    static start() {
        this.btnForm.addEventListener("click", this.acess.bind(this))
    }

    static acess(event) {
        event.preventDefault()
        const forms = document.querySelector("form")
        const newAcess = {}

        for (let i = 0; i < forms.length; i++) {
            const { name, value } = forms[i]
            if (name) {
                if (value === "") {
                    return alert("Preencha os dados corretamente.")
                }
                newAcess[name] = value
            }
            forms[i].value = ""
        }
        KenzieFood.register(newAcess)
            .then(data => {
                if (data.status === "Error") {
                    alert("erro") // trocar por modal
                } else {
                    alert("tudo ok") // trocar por modal
                }
            })
    }

}

Register.start()
export { Register }