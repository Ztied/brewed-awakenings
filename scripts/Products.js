import { getProducts,} from "./database.js"

const products = getProducts()

document.addEventListener (
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if(itemClicked.dataset.type === "product") {
            
            const productPrice = parseFloat(itemClicked.dataset.price)

            let product = ""

            for(const price of products) {
                
                const roundedPrice = parseFloat(price.price.toFixed(3))
                
                if(parseFloat(productPrice.toFixed(3)) === roundedPrice ) {
                    product = price.price
                }
            }  
            
            window.alert(`${itemClicked.dataset.name} cost $${product}`)
        }
    }
)
export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-name="${product.name}" data-type="product" data-price="${product.price}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

