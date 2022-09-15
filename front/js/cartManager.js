// **Gestion du panier, enregistrement d'un article dans le panier, retrait d'un article et récupération du contenu du panier**//


//Fonction ajoute un produit au panier
export function addProductToCart(productId,productNumber,productColor){
    let cartList = getCart();
    
    //Vérification que le produit ajouté n'est pas déjà dans la liste
    let productFound = cartList.find(product => product.id == productId & product.color == productColor);
    //Si le produit ayant le même id et la meme couleur est présent on ajoute la quantité souhaité
    if( productFound != null){
       productFound.quantity = parseInt(productFound.quantity) + parseInt(productNumber);
        saveCart(cartList);
    //Sinon on ajoute le produit    
    }else{ 
        cartList.push({id: productId, quantity: productNumber, color: productColor});
        saveCart(cartList);
    }
}

//fonction retirer un produit du panier
export function removeProductFromCart(productId,productColor){
    let cartList = getCart();
    cartList = cartList.filter(product => !(product.id == productId & product.color == productColor));
    saveCart(cartList);
      // Effacement de l'écran et regénération de la page avec les articles restant dans le panier
	document.querySelector("#cart__items").innerHTML = "";
}

//fonction obtenir la liste du panier
export function getCart(){
    let cartList = localStorage.getItem("cartList");
    if(cartList == null){
        return [];
    }else{
        return JSON.parse(cartList);
    }
}

//Fonction sauvegarder les changements dans le panier
export function saveCart(cartList){
    localStorage.setItem("cartList",JSON.stringify(cartList));
}



