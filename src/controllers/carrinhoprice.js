import {db} from "./../controllers/db.js"
const totalPrice = document.querySelector("#price")

const uptadeTotal = () =>{
    totalPrice.innerHTML = db.reduce((soma, objeto) =>
        soma + objeto.preco
 , 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })
}

export {uptadeTotal}