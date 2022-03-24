import { Vitrine } from "./src/models/templateAdmin.js";

Vitrine.productsInAdminPage()

const logout = document.querySelector(".iconAdmin")
logout.addEventListener("click", ()=> {
    window.location.href = "/index.html"
    localStorage.clear()
})