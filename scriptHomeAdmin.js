import { VitrineAdminPage } from "./src/models/templateAdminHome.js";
import {addProductsAdmin} from "./src/controllers/addAdminPage.js"

VitrineAdminPage.productsAdminHomePage()


const sectionProducts = document.getElementById("mainProducts")

addProductsAdmin.listProductsInCart()
sectionProducts.addEventListener("click", addProductsAdmin.addProducts.bind(addProductsAdmin))
