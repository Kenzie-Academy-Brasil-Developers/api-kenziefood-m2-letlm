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
                    return this.modalErrorNull();
                }
                    newAcess[name] = value
            }
            forms[i].value = ""
        }
        KenzieFood.register(newAcess)
    
        .then(data => {
            if (data.status === "Error") {
                this.modalErrorNull();
            } else if (data === "User Already Exists!"){
                this.modalErrorNull();
            } else {
                window.location.href = "/src/pages/login.html";
            }
        })
    }

    // static modalError(){
    //     const modal = document.querySelector("showModalErrorNull")
    //     modal.classList.add("aparecer")
    //     modal.addEventListener("click", (event) => {
    //         if(event.target.tagName === "BUTTON"){
    //             modal.classList.remove("aparecer")
    //         }
    //     })
    // }

    static modalErrorNull(){
        const modalNull = document.querySelector("#modalError");
        modalNull.classList.add("aparecer");
        modalNull.addEventListener("click", (event) => {
            if(event.target.tagName === "BUTTON"){
                modalNull.classList.remove("aparecer");
            }
        })
    }
    

}

Register.start();

export { Register }