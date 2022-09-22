/**
 * Gère l'affichage et les interactions de la page produit
 **/

import { getProductById } from "./api.js";
import { colorSelector } from "./utils.js";
import { addProductToCart } from "./cartManager.js";

/**
 * Fonction qui charge toutes les caractéristiques du produit dans la page du dit produit
 * Crée le container de la carte produit
 * Ajoute chacun des éléments de la carte en les créant puis en les attachant au DOM 
 * @param {string} id du produit avec toutes ses caractéristiques 
 */
async function loadDetailedProduct(productId) {
    const product = await getProductById(productId);

    //Balise title qui contiendra le produit
    document.querySelector("title").textContent = product.name;

    //Ajout de l'image
    const productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.alt = product.altTxt;
    document.querySelector(".item__img").appendChild(productImage);

    //Ajout des caractéristiques du produit
    document.querySelector("#title").textContent = product.name;
    document.querySelector("#price").textContent = product.price;
    document.querySelector("#description").textContent = product.description;

    //Ajout de sélecteurs pour les couleurs grâce à la fonction
    let colors = product.colors;
    let location = document.querySelector("#colors");
    colorSelector(colors, location);
}


//Affichage de la page en fonction du produit
//Récupération de l'URL de la page
let str = window.location.href;

//Recherche de l' id produit par rapport à l'url de la page
let url = new URL(str);
let search_params = new URLSearchParams(url.search);
if (search_params.has("id")) {
    let productId = search_params.get("id");
    await loadDetailedProduct(productId);
    //Ajout de l'eventListener sur le bouton "ajouter au panier" pour pouvoir ajouter un article au panier si les conditions sont remplies  
    document.querySelector("#addToCart").addEventListener("click", function () {
        //Récupération de la quantité et de la couleur
        const productNumber = document.querySelector("#quantity").value;
        const productColor = document.querySelector("#colors").value;

        //Conditions pour que l'ajout d'un article soit validé ou refusé
        if (productNumber == 0 || productNumber > 100) {
            alert("Veuillez choisir un nombre d'article compris entre 1 et 100");
            return 0;

        } else if (productColor == "") {
            alert("Veuillez choisir une couleur");
            return 0;
        } else {
            addProductToCart(productId, productNumber, productColor)
            alert("Votre ajout a bien été pris en compte");
            return 1;
        }
    });
} else {
    alert("Nous n'avons pas réussi à trouver le produit sélectionné,veuillez réessayer plus tard ou contacter le service client");
}