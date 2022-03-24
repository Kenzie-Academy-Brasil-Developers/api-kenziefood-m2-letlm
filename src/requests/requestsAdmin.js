import { Local } from "../localstorage/localstorage.js"

class RequestAdmin {

    static API_URL = "https://kenzie-food-api.herokuapp.com/"

    static async createdProduct(data) {
        const {token} = Local.tokenUser
        const response = await fetch(`${this.API_URL}my/products`, {
            "method": "POST",
            "headers": {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            "body": JSON.stringify()
        })
        const responseData = await response.json(data)

        return responseData
    }

    static async getMyProducts() {
        const {token} = Local.tokenUser
        const response = await fetch(`${this.API_URL}my/products`, {
            "method": "GET",
            "headers": {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    }

    static async editProducts(id, newContent) {
        const {token} = Local.tokenUser
        const response = await fetch(`${this.API_URL}my/products/:${id}`, {
            "method": "PATH",
            "headers": {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({ newContent })
        })
        const data = await response.json()
        return data
    }

    static async deleteProducts(id) {
        const {token} = Local.tokenUser
        await fetch(`${this.API_URL}my/products/:${id}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Bearer ${token}`
            }
        })
    }
}

export { RequestAdmin }