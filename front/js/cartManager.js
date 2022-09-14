// **Gestion du panier, enregistrement d'un article dans le panier, retrait d'un article et récupération du contenu du panier**//

export function addProductToCart(productId,productNumber,productColor){
    let productsList = getCart();
    //test -----------//
    if( productsList.some( product => product.id == productId & product.color == productColor)){
        const product = productsList.find(product => product.id == productId & product.color == productColor);
        product.quantity = parseInt(product.quantity) + parseInt(productNumber);
        saveCart(productsList);
    }else{ 
        productsList.push({id: productId, quantity: productNumber, color: productColor});
        saveCart(productsList);
    }
}

function removeProductFromCart(productId){
    let productsList = getCart();
    productsList = productsList.filter(product => product.id != productId);
    saveCart(productsList);
}

function getCart(){
    let productsList = localStorage.getItem("productsList");
    if(productsList == null){
        return [];
    }else{
        return JSON.parse(productsList);
    }
}

function getProductId(){
    return getCart().map(product => product.id);
}

function saveCart(productsList){
    localStorage.setItem("productsList",JSON.stringify(productsList));
}

