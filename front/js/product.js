//**Gère l'affichage et les interactions de la page produit**//

import { getProductById, colorSelector } from "./productManager.js";
import{ addProductToCart} from "./cartManager.js";

//Fonction qui charge toutes les caractéristiques du produit dans la page du dit produit
async function loadDetailedProduct(productId){
    const product = await getProductById(productId);

    //Balise title
    document.querySelector("title").textContent = product.name;

    //Ajout de l'image
    const productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.alt = product.altTxt;
    document.querySelector(".item__img").appendChild(productImage);

    //Ajout du nom du produit
    document.querySelector("#title").textContent = product.name;

    //Ajout du prix du produit
    document.querySelector("#price").textContent = product.price;

    //Ajout de la description du produit
    document.querySelector("#description").textContent = product.description;

    //Ajout de sélecteurs pour les couleurs
    let colors = product.colors;
    colorSelector(colors);
} 

//Affichage de la page en fonction du produit//

//Récupération de l'URL de la page
let str = window.location.href;

//Recherche de l' id produit par rapport à l'url
let url = new URL(str);
let search_params = new URLSearchParams(url.search); 
if(search_params.has("id")) {
    let productId = search_params.get("id");
    
    loadDetailedProduct(productId);
    
      
    
    //Ajout de l'eventListener sur le bouton "ajouter au panier"
    
    document.querySelector("#addToCart").addEventListener("click", function(){
        //Récupération de la quantité et de la couleur
        const productNumber = document.querySelector("#quantity").value;
        const productColor = document.querySelector("#colors").value;
        
        //Conditions pour que l'ajout d'un article soit validé
        if(productNumber == 0){
            alert("Veuillez choisir un nombre d'article");
        
        }else if (productColor == ""){
            alert("Veuillez choisir une couleur");
        }else{
            addProductToCart(productId,productNumber,productColor)
            alert("Votre ajout a bien été pris en compte");
        }
    });
}

