//**Gère l'affichage et les interactions de la page d'accueil**//

// Récupération des produits depuis l'API HTTP
const reponse = await fetch("http://localhost:3000/api/products/");
const products = await reponse.json();

//Fonction qui charge les cartes produits complètes sur la page d'accueil
function loadProducts(products){
    
    for (let i = 0; i < products.length; i++) {

        const productsContainer = document.querySelector("#items");

        //Création du container de la carte produit
        const productElement = document.createElement("a");
        productElement.href ="./product.html?id="+products[i]._id;
        //Attachement au DOM
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

        //Ajout de la description raccourcie
        const productDescription = document.createElement("p");
        productDescription.textContent = products[i].description;
        productArticle.appendChild(productDescription);
    }    
}


//Affichage des produits
loadProducts(products);