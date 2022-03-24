import { KenzieFood } from "../requests/requests.js"

class Register {
    static btnForm = document.querySelector('button');

    static start() {
        this.btnForm.addEventListener("click", this.acess.bind(this));
    }

    static acess(event) {
        event.preventDefault()
        const forms = document.querySelector("form")
        const newAcess = {}
        
        for (let i = 0; i < forms.length; i++) {
            const { name, value } = forms[i]
            if (name) {
                if (value === "") {
                    return this.modalDataError();
                }
                    newAcess[name] = value
            }
            forms[i].value = ""
        }
        KenzieFood.register(newAcess)
    
        .then(data => {
            if (data.status === "Error") {
                this.modalDataError()
            } else if (data === "User Already Exists!"){
                this.modalUserError()
            } else {
                window.location.href = "/src/pages/login.html";
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


    static modalUserError(){

        const dobleUser = document.querySelector(".modalRegisterDoble");
        dobleUser.classList.add("showDoble");

        dobleUser.addEventListener("click", (event) => {
            if(event.target.tagName === "BUTTON"){
                dobleUser.classList.remove("showDoble")
    })
    }    

}

Register.start();

export { Register }