/**
 * Gère l'affichage et les interactions de la page d'accueil
 **/

import { getProducts } from "./api.js";


/**
 * Fonction qui génère les cartes produits sur l'index
 * Crée le container de la carte produit
 * Ajoute chacun des éléments de la carte en les créant puis en les attachant au DOM 
 * @param {[Objects]} liste de produits avec toutes leurs caractéristiques 
 */
function loadProducts(products) {
    for (let i = 0; i < products.length; i++) {
        const productsContainer = document.querySelector("#items");

        //Création du container de la carte produit
        const productElement = document.createElement("a");
        productElement.href = "./product.html?id=" + products[i]._id;
        productsContainer.appendChild(productElement);

        //Ajout de la div article qui contiendra les caractéristiques du produit
        const productArticle = document.createElement("article");
        productElement.appendChild(productArticle);

        //Ajout de l'image
        const productImage = document.createElement("img");
        productImage.src = products[i].imageUrl;
        productImage.alt = products[i].altTxt;
        productArticle.appendChild(productImage);

        //Ajout du nom du produit
        const productName = document.createElement("h3");
        productName.textContent = products[i].name;
        productArticle.appendChild(productName);

        //Ajout de la description
        const productDescription = document.createElement("p");
        productDescription.textContent = products[i].description;
        productArticle.appendChild(productDescription);
    }
}


//Récupération et affichage des produits
const url = "http://localhost:3000/api/products/";
let products = await getProducts(url);

loadProducts(products);