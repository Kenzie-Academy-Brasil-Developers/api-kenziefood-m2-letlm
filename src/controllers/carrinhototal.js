import { Local } from "../localstorage/localstorage.js"

const quantityCar = document.querySelector("#quantity");

const uptadeQuantity = () =>{
    quantityCar.innerText = Local.cart.length;
}

export {uptadeQuantity}