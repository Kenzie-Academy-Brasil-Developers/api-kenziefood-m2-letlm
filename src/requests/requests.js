  import {Local} from "../localstorage/localstorage.js"
  
  class KenzieFood {

    static urlApi = "https://kenzie-food-api.herokuapp.com/"

    
    static async register(user) {
        const response = await fetch(`${this.urlApi}auth/register`, { 
            "method": "POST", 
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(user)
    })
        const data = await response.json()

        return data
    }


    static async login(user) {
        const response = await fetch(`${this.urlApi}auth/login`, { 
            "method": "POST", 
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(user)
        })

        const data = await response.json()
        
        Local.tokenUser.token = data
        localStorage.setItem('token', JSON.stringify(Local.tokenUser))

        return data
    }


    static async getPublic() {
        const response = await fetch(`${this.urlApi}products`,{
            "method": "GET"
        })
        const data = await response.json()
       // console.log(data)
        return data
        
    }


    static async getPrivate() {
        const localStorage = JSON.parse(localStorage.getItem('token'))
        const token = localStorage.tokenUser.token

        const response = await fetch(`${this.urlApi}my/products`, { headers :{Authorization: `${token}`}} )
        const data = await response.json()
        return data
    }
    
}
  


export{KenzieFood};