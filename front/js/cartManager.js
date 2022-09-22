/**
 * Gestion du panier, enregistrement d'un article dans le panier, retrait d'un article et récupération du contenu du panier
 **/

import { isValidJSON } from "./utils.js";

/**
 * Fonction qui permet l'ajout au panier d'un produit et son enregistrement dans le local storage
 * Il y aura juste une modification de la quantité de ce produit si il est déjà présent dans la cartList(le meme id et la meme couleur)
 * @param {string} id du produit
 * @param {number} quantité choisie du produit 
 * @param {string} couleur choisie du produit
 */
export function addProductToCart(productId, productNumber, productColor) {
    let cartList = getCart();

    //Vérification que le produit ajouté n'est pas déjà dans la liste
    let productFound = cartList.find(product => product.id == productId && product.color == productColor);
    //Si le produit ayant le même id et la meme couleur est présent on ajoute la quantité souhaité 
    if (!!productFound) {
        productFound.quantity = parseInt(productFound.quantity) + parseInt(productNumber);
        saveCart(cartList);
    } else {
        cartList.push({ id: productId, quantity: productNumber, color: productColor });
        saveCart(cartList);
    }
}

/**
 * Fonction qui efface un produit du panier ,puis sauvegarde le changement dans le local storage,ensuite rechargement de la section qui affiche les produits afin d'afficher le changement
 * @param {string} id du produit
 * @param {string} couleur choisie du produit
 */
export function removeProductFromCart(productId, productColor) {
    let cartList = getCart();
    cartList = cartList.filter(product => !(product.id == productId && product.color == productColor));
    saveCart(cartList);
    document.querySelector("#cart__items").innerHTML = "";
}

/**
 * Fonction qui récupère la liste du panier à partir du local storage ,et si elle n'est pas encore présente,crée une cartList vide 
 * @return { [objects]} cartList en JS
 */
export function getCart() {
    let cartList = localStorage.getItem("cartList");
    if (!cartList) {
        return [];
    } else {
        isValidJSON(cartList);
        return JSON.parse(cartList);
    }
}

/**
 * Fonction qui sauvegarde la liste de produits choisis dans le local storage
 * @param {[objects]} produits avec leur quantité,leur nombre et leur couleur
 */
export function saveCart(cartList) {
    localStorage.setItem("cartList", JSON.stringify(cartList));
}