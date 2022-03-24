class Local{
    static tokenUser = {
        "token": {}
    }

    static cart = JSON.parse(localStorage.getItem('products')) || []

}

export {Local}