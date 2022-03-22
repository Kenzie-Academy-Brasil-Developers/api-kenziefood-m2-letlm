import {KenzieFood} from "../requests/requests.js"

class Register{
    static form = document.querySelector("form")

    static start(){
        this.form.addEventListener("submit", this.acess.bind(this))
    }

    static acess(event) {
        event.preventDefault()

        const inputs = event.target

        const newAcess = {}

        for(let i =0; i < inputs.length; i++){
            if(inputs[i].name) {
                const name     = inputs[i].name
                const value    = inputs[i].name

                newAcess[name] = value
            }
            inputs[i].value = ""
        }
        KenzieFood.register(newAcess)
        .then(data => {
            if(data.status === "error"){
                alert("erro")
            } else{
                alert("tuydo ok")
            }
        })
    }
    
}

export {Register}