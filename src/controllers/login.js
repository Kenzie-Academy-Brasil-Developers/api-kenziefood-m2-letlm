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
                    return alert("preencha o bglho")
                }
                newLogin[name] = value
            }
            forms[i].value = ""
        }
        KenzieFood.login(newLogin)

            .then(data => {
    
                if (data.error === "password invalid") {
                    alert("Senha invalida")
                } else if (data.error === `Email: ${newLogin.email} does not exists`) {
                    alert("Email invalido")
                } else {
                    window.location.href = "/src/pages/adminHomePage.html"
                }
            })
    }

}

Login.start()
export { Login }