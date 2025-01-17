class LocalStorageUtils {
    constructor(){
        this.keyName = 'products'
    }

    getProducts(){
        const productsLocalStorage = localStorage.getItem(this.keyName)
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage)
        }
        return [];
    }

    putProducts(id) {
        let products = this.getProducts()
        const index = products.indexOf(id)
        let pushProduct = false

        if (index === -1){
            products.push(id)
            pushProduct = true
        } else {
            products.splice(index, 1)
        }
        
        localStorage.setItem(this.keyName, JSON.stringify(products))

        return { pushProduct, products }
    }
}

const localStorageUtils = new LocalStorageUtils()



