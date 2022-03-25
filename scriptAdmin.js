import { Vitrine } from "./src/models/templateAdmin.js";

Vitrine.productsInAdminPage();

const logout = document.querySelector(".iconAdmin");

const adminProfile = document.querySelector(".logoutAdmin")
const btnLogout = document.querySelector(".btnLogout")

logout.addEventListener("click", () => {
    adminProfile.classList.add("showLogout")
})

btnLogout.addEventListener("click", () => {
    window.location.href = "/index.html"
    localStorage.clear()
})

const exitLogin = document.querySelector(".exitLogin")
exitLogin.addEventListener("click", ()=> {
    adminProfile.classList.remove("showLogout")
})