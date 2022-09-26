/**
 * Gère l'affichage et les interactions de la page panier
 **/

import { getCart, removeProductFromCart, saveCart } from "./cartManager.js";
import { getProductById, postOrder } from "./api.js";
import { totalQuantityCalculation, totalPriceCalculation, createOrderBody } from "./orderManager.js";
import { firstNameIsValid, lastNameIsValid, addressIsValid, cityIsValid, emailIsValid } from "./formManager.js";


/**
 * Fonction qui charge les articles ajoutés au panier précédemment sur la page panier
 * @param {[objects]} cartList 
 */
async function loadCart(cartList) {

  for (let i = 0; i < cartList.length; i++) {
    //Récupération des caractéristiques du produit dans le panier
    const productId = cartList[i].id;
    const productNumber = cartList[i].quantity;
    const productColor = cartList[i].color;

    //Récupération des autres caractéristiques du produit depuis l'API
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

    //Ajout du bouton de suppression et de son texte
    let productDelete = document.createElement("p");
    productDelete.classList.add("deleteItem");
    productDelete.textContent = "Supprimer";
    productDeleteContainer.appendChild(productDelete);
  }
  await deleteButtonEventListener();
  await changeQuantity();
  totalQuantityCalculation();
  totalPriceCalculation();
}


//Ajout des event listener

/**
 * Fonction qui ajoute au texte supprimer l'eventListener qui entraîne la suppression du produit lors du clic
 * Relance le chargement des articles restants dans le panier après la suppression
 */
async function deleteButtonEventListener() {
  const deleteButtons = document.querySelectorAll(".cart__item__content__settings__delete .deleteItem");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", async function () {

      //Récupération des id et couleur sur la balise article parente du bouton supprimer
      const productId = deleteButtons[i].parentNode.parentNode.parentNode.parentNode.dataset.id;
      const productColor = deleteButtons[i].parentNode.parentNode.parentNode.parentNode.dataset.color;

      removeProductFromCart(productId, productColor);

      cartList = getCart();
      await loadCart(cartList);
      alert("Votre article a bien été supprimé");
    });
  }
}

/**
 * Fonction qui permet de modifier la quantité de produit sur l'input document.querySelectorAll('.itemQuantity')
 * Entraîne la suppression du produit si la quantité passe à 0
 * Relance le chargement de des articles après suppression
 * Relance le calcul et l'affichage de la quantité totale et du prix total après modification
 */
async function changeQuantity() {
  const quantityInputs = document.querySelectorAll('.itemQuantity');

  for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener('change', async function () {

      //Récupération des id ,couleur sur la balise article parente de l'input
      const productId = quantityInputs[i].closest("article").dataset.id;
      const productColor = quantityInputs[i].closest("article").dataset.color;

      //Récupération du produit dont on veut modifier la quantité et sauvegarde du panier
      let cartList = getCart();
      let productFound = cartList.find(product => product.id == productId & product.color == productColor);

      if (quantityInputs[i].value == 0) {
        removeProductFromCart(productId, productColor);

        cartList = getCart();
        await loadCart(cartList);
        alert("Votre article a bien été supprimé");
      } else {
        productFound.quantity = quantityInputs[i].value;
        saveCart(cartList);

        document.querySelector("#totalQuantity").textContent = "";
        document.querySelector("#totalPrice").textContent = "";
        totalQuantityCalculation();
        totalPriceCalculation();
      }
    });
  }
}


//Ajout des eventsListener pour le formulaire
//Vérification du prénom avec l'event change au niveau de son input
document.querySelector("#firstName").addEventListener("change", function () {
  document.querySelector("#firstNameErrorMsg").innerHTML = "";
  firstNameIsValid()
});
//Vérification du nom avec l'event change au niveau de son input
document.querySelector("#lastName").addEventListener("change", function () {
  document.querySelector("#lastNameErrorMsg").innerHTML = "";
  lastNameIsValid()
});
//Vérification de l'adresse avec l'event change au niveau de son input
document.querySelector("#address").addEventListener("change", function () {
  document.querySelector("#addressErrorMsg").innerHTML = "";
  addressIsValid()
});
//Vérification de la ville avec l'event change au niveau de son input
document.querySelector("#city").addEventListener("change", function () {
  document.querySelector("#cityErrorMsg").innerHTML = "";
  cityIsValid()
});
//Vérification du mail avec l'event change au niveau de son input
document.querySelector("#email").addEventListener("change", function () {
  document.querySelector("#emailErrorMsg").innerHTML = "";
  emailIsValid()
});

//Event du bouton commander au clic qui effectue de nouveau les vérifications précédentes et exécute la validation et l'envoi de la commande si tout est validé avec l'ouverture de la page confirmation à la fin
document.querySelector("#order").addEventListener("click", async function (event) {
  event.preventDefault();
  let firstNameTest = firstNameIsValid();
  let lastNameTest = lastNameIsValid();
  let addressTest = addressIsValid();
  let cityTest = cityIsValid();
  let emailTest = emailIsValid();
  let cartList = getCart();
  if (cartList.length == 0) {
    alert("Votre panier est vide")
    return 0;
  } if ((firstNameTest == false) || (lastNameTest == false) || (emailTest == false) || (cityTest == false) || (addressTest == false)) {
    alert("Votre commande n'a pas pu être validée, veuillez vérifier que votre formulaire de contact est correctement rempli")
    return 0;
  } if ((firstNameTest == true) && (lastNameTest == true) && (emailTest == true) && (cityTest == true) && (addressTest == true) && (cartList.length > 0)) {
    const orderJson = createOrderBody();
    const id = await postOrder(orderJson);
    //Ouverture de la page confirmation avec l'order id
    window.open("./confirmation.html?orderId=" + id, "_self");
    //Effaçage du panier
    localStorage.clear();
  }
});


//Lancement de la page
let cartList = getCart();
if (cartList.length == 0) {
  alert("Votre panier est vide");
} else {
  await loadCart(cartList);
}