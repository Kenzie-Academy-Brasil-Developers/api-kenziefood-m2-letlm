import { KenzieFood } from "../requests/requests.js"

class Login {
    static btnForm = document.querySelector('button')

    static start() {
        this.btnForm.addEventListener("click", this.acessLogin.bind(this))
    }

    static acessLogin(event) {
        event.preventDefault()
        const forms = document.querySelector("form")
        const newLogin = {}

        for (let i = 0; i < forms.length; i++) {
            const { name, value } = forms[i]
            if (name) {
                if (value === "") {
                    return alert("Preencha os dados corretamente.")
                }
                newLogin[name] = value
            }
            forms[i].value = ""
        }
        KenzieFood.login(newLogin)
            .then(data => {
                if (data.status === "Error") {
                    alert("erro") // trocar por modal
                } else {
                    alert("tudo ok") // trocar por modal
                }
            })
    }

}

Login.start()
export { Login }