/**
 * Gestion du panier, enregistrement d'un article dans le panier, retrait d'un article et récupération du contenu du panier
 **/


/**
 * Fonction qui l'ajout au panier d'un produit en fonction de ses paramères puis son enregistrement dans le local storage
 * @param {string} id du produit
 * @param {number} quantité choisie du produit 
 * @param {string} couleur choisie du produit
 * @return { object} Ajout du produit avec les paramètres ou modification de la quantité de ce produit si il est déjà présent dans la cartList(le meme id et la meme couleur)
 */
export function addProductToCart(productId,productNumber,productColor){
    let cartList = getCart();
    
    //Vérification que le produit ajouté n'est pas déjà dans la liste
    let productFound = cartList.find(product => product.id == productId && product.color == productColor);
    //Si le produit ayant le même id et la meme couleur est présent on ajoute la quantité souhaité
    if(!!productFound){
       productFound.quantity = parseInt(productFound.quantity) + parseInt(productNumber);
        saveCart(cartList);
    }else{ 
        cartList.push({id: productId, quantity: productNumber, color: productColor});
        saveCart(cartList);
    }
}

/**
 * Fonction qui retire un produit du panier en utilisant son id et sa couleur
 * @param {string} id du produit
 * @param {string} couleur choisie du produit
 * @return { object} Effacement du produit du panier puis sauvegarde du changement dans le local storage,ensuite rechargement de la section qui affiche les produits pour afficher le changement
 */
export function removeProductFromCart(productId,productColor){
    let cartList = getCart();
    cartList = cartList.filter(product => !(product.id == productId && product.color == productColor));
    saveCart(cartList);
    document.querySelector("#cart__items").innerHTML = "";
}

/**
 * Fonction qui récupère la cartList à partir du local storage et si elle est n'est pas encore présente,crée une cartList vide 
 * @return { [objects]} cartList
 */
export function getCart(){
    let cartList = localStorage.getItem("cartList");
    if(!cartList){        
        return [];
    }else{
        isValidJSON(cartList);
        return JSON.parse(cartList);
    }
}

/**
 * Fonction qui sauvegarde la cartList de produits choisis dans le local storage
 * @param {[objects]} produits avec leur quantité,leur nombre et leur couleur
 */
export function saveCart(cartList){
    localStorage.setItem("cartList",JSON.stringify(cartList));
}

//Gestion d'erreur d'exécution au niveau du JSON
function isValidJSON(txt){
    try {
      JSON.parse(txt);
      return true;
    } catch(err) {
        alert("Nous n'avons pas à récupérer votre panier,veuillez réessayer plus tard ou contacter le service client");
      return false;
    }
  }


