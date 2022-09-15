//**Gère l'affichage et les interactions de la page panier**//

import { getCart, removeProductFromCart , saveCart } from "./cartManager.js";
import { getProductById } from "./productManager.js";

//Fonction pour afficher les articles du panier sur la page
async function loadCard(cartList) {
  for (let i = 0; i < cartList.length; i++) {
    //Récupération des caractéristiques du produit dans le panier
    const productId = cartList[i].id;
    const productNumber = cartList[i].quantity;
    const productColor = cartList[i].color;

    //récupération des autres caractéristiques du produit depuis l'API
    const product = await getProductById(productId);

    //Création de la div article qui contiendra la carte du produit avec ajout d'un data id et color
    let productElement = document.createElement("article");
    productElement.classList.add("cart__item");
    productElement.dataset.id = productId;
    productElement.dataset.color = productColor;
    document.querySelector("#cart__items").appendChild(productElement);

    //Ajout de l'image de produit et de son container
    let productImageContainer = document.createElement("div");
    productImageContainer.classList.add("cart__item__img");
    let productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.alt = product.altTxt;
    productElement.appendChild(productImageContainer);
    productImageContainer.appendChild(productImage);

    //Ajout du container pour le corps de la carte produit
    let productContentContainer = document.createElement("div");
    productContentContainer.classList.add("cart__item__content");
    productElement.appendChild(productContentContainer);

    //Ajout du container pour la description du produit
    let productDescriptionContainer = document.createElement("div");
    productDescriptionContainer.classList.add(
      "cart__item__content__description"
    );
    productContentContainer.appendChild(productDescriptionContainer);

    //Ajout du nom de produit
    let productName = document.createElement("h2");
    productName.textContent = product.name;
    productDescriptionContainer.appendChild(productName);

    //Ajout de la couleur du produit
    let color = document.createElement("p");
    color.textContent = productColor;
    productDescriptionContainer.appendChild(color);

    //Ajout du prix du produit
    let ProductPrice = document.createElement("p");
    ProductPrice.textContent = product.price + " €";
    productDescriptionContainer.appendChild(ProductPrice);

    //Ajout du conteneur pour les réglages
    let productSettings = document.createElement("div");
    productSettings.classList.add("cart__item__content__settings");
    productContentContainer.appendChild(productSettings);

    //Ajout du container pour les réglages de quantité
    let productSettingsQuantityContainer = document.createElement("div");
    productSettingsQuantityContainer.classList.add(
      "cart__item__content__settings__quantity"
    );
    productSettings.appendChild(productSettingsQuantityContainer);

    //Ajout de l'input pour régler la quantité et de son text
    let productSettingsQuantityText = document.createElement("p");
    productSettingsQuantityText.textContent = "Qté : ";
    let productSettingsQuantity = document.createElement("input");
    productSettingsQuantity.setAttribute("type", "number");
    productSettingsQuantity.classList.add("itemQuantity");
    productSettingsQuantity.setAttribute("name", "itemQuantity");
    productSettingsQuantity.setAttribute("min", "1");
    productSettingsQuantity.setAttribute("max", "100");
    productSettingsQuantity.setAttribute("value", productNumber);
    productSettingsQuantityContainer.appendChild(productSettingsQuantityText);
    productSettingsQuantityContainer.appendChild(productSettingsQuantity);

    //Ajout du container du bouton de suppression du produit
    let productDeleteContainer = document.createElement("div");
    productDeleteContainer.classList.add(
      "cart__item__content__settings__delete"
    );
    productSettings.appendChild(productDeleteContainer);

    //Ajout du bouton de suppresion et de son texte
    let productDelete = document.createElement("p");
    productDelete.classList.add("deleteItem");
    productDelete.textContent = "Supprimer";
    productDeleteContainer.appendChild(productDelete);
  }
  deleteButtonEventListener();
  changeQuantity();
}


///////////Ajout des eventsListener///////////

//Ajout de l'eventListener pour les boutons supprimer et de la fonction pour supprimer un produit
async function deleteButtonEventListener(){
  const deleteButtons = document.querySelectorAll(".cart__item__content__settings__delete .deleteItem");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click",async function(){
      
      //Récupération des id et couleur sur la balise article parente du boutton supprimer
      const productId = deleteButtons[i].parentNode.parentNode.parentNode.parentNode.dataset.id;
      const productColor = deleteButtons[i].parentNode.parentNode.parentNode.parentNode.dataset.color;
      
      //Suppression du produit avec génération d'une alerte
      removeProductFromCart(productId, productColor);
      alert("Votre article a bien été supprimé") ;
      
      // Effacement de l'écran et regénération de la page avec les articles restant dans le panier
      cartList = getCart();
      await loadCard(cartList);      
    });
  }
}

//Ajout de l'enventListener pour modifier la quantité
function changeQuantity(){
  const quantityInputs = document.querySelectorAll('.itemQuantity');
  for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener('input', function(){
      
      //Récupération des id ,couleur sur la balise article parente de l'input
      const productId = quantityInputs[i].parentNode.parentNode.parentNode.parentNode.dataset.id;
      const productColor = quantityInputs[i].parentNode.parentNode.parentNode.parentNode.dataset.color;
      
      //Récupération du produit dont on veut modifier la quantité et sauvegarde du panier
      const cartList = getCart();
      let productFound = cartList.find(product => product.id == productId & product.color == productColor);
      productFound.quantity = quantityInputs[i].value;
      
      saveCart(cartList);
      alert("Votre changement a bien été pris en compte");
    });
  }
}


////////Lancement de la page
let cartList = getCart();
loadCard(cartList);

