import {db} from "./../controllers/db.js"
const quantityCar = document.querySelector("#quantity")

const uptadeQuantity = () =>{
    quantityCar.innerText = db.length 
}

export {uptadeQuantity}