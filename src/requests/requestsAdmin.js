import { Local } from "../localstorage/localstorage.js"

class RequestAdmin {

    static API_URL = "https://kenzie-food-api.herokuapp.com/";
    static localStorage = JSON.parse(localStorage.getItem('token'));

    static async createdProduct(data) {
        const token = this.localStorage.token;
        
        const response = await fetch(`${this.API_URL}my/products`, {
            "method": "POST",
            "headers": {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        })
        const responseData = await response.json(data);

        return responseData;
    }

    
    static async getMyProducts() {

       
        const token = this.localStorage.token;

        const response = await fetch(`${this.API_URL}my/products`, {
            "method": "GET",
            "headers": {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json();
        return data;
    }

    static async editProducts(id, newContent) {

        const token = this.localStorage.token;

        const response = await fetch(`${this.API_URL}my/products/${id}`, {
            "method": "PATCH",
            "headers": {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(newContent)
        })
        const data = await response.json();
        return data;
    }

    static async deleteProducts(id) {

        const token = this.localStorage.token;

        await fetch(`${this.API_URL}my/products/${id}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Bearer ${token}`
            }
        })
    }
}

export { RequestAdmin }