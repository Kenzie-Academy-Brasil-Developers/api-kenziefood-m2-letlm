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
                    return this.modalDataError()
                }
                newLogin[name] = value
            }
            forms[i].value = ""
        }
        KenzieFood.login(newLogin)

            .then(data => {
    
                if (data.error === "password invalid") {
                    this.modalUserPass()
                } else if (data.error === `Email: ${newLogin.email} does not exists`) {
                    this.modalUserEmail()
                } else {
                    window.location.href = "/src/pages/adminHomePage.html"
                }
            })
    }

    static modalDataError(){
        const modal = document.querySelector(".modalErrorData")
        modal.classList.add("showData")
        modal.addEventListener("click", (event) => {
            if(event.target.tagName === "BUTTON"){
                modal.classList.remove("showData")
            }
        })
    }

    static modalUserEmail(){
        const modalIncorret = document.querySelector(".modalEmail")
        modalIncorret.classList.add("showEmail")
        modalIncorret.addEventListener("click", (event) => {
            if(event.target.tagName === "BUTTON"){
                modalIncorret.classList.remove("showEmail")
            }
        })
    }

    static modalUserPass(){
        const modalPass = document.querySelector(".modalPassword")
        modalPass.classList.add("showPass")
        modalPass.addEventListener("click", (event) => {
            if(event.target.tagName === "BUTTON"){
                modalPass.classList.remove("showPass")
            }
        })
    }

}

Login.start()
export { Login }