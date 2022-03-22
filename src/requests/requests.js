  class KenzieFood {

    static urlApi = "https://kenzie-food-api.herokuapp.com/"

    static async getPublic() {
        let response = await fetch(`${this.urlApi}product`)
        let data = await response.json()
        return data
    }

    static async getPrivate() {
        let response = await fetch(`${this.urlApi}my/product`, { headers :{Authorization: "randomtoken"}} )
        let data = await response.json()
        return data
    }

}


export{KenzieFood};