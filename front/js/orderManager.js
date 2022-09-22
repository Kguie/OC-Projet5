/**
 * Gestion de tout ce qui concerne le paiement , son calcul et la création d'objets pour la commande 
 **/


/**
 * Fonction qui calcule la quantité totale en utilisant les quantités  présentes sur la page 
 * @return { number } quantité totale
 */
export function totalQuantityCalculation() {
    //Récupération des inputs de quantité et création d'une liste pour leurs valeurs
    const quantityInputs = document.querySelectorAll(".itemQuantity")
    let quantityList = [0];

    //Pour chaque input sa valeur est ajouté dans la liste
    for (let i = 0; i < quantityInputs.length; i++) {
        quantityList.push(quantityInputs[i].value);
    }

    //Addition de toutes les valeurs dans la liste avec parseInt 
    let totalQuantity = quantityList.reduce((previousValue, currentValue) =>
        parseInt(previousValue) + parseInt(currentValue), 0
    );

    document.querySelector("#totalQuantity").textContent = totalQuantity;
}


/**
 * Fonction qui calcule le prix total en utilisant les prix et quantités des articles présents sur la page panier
 * @return { number }prix total
 */
export function totalPriceCalculation() {

    //Récupération des inputs de quantité et création d'une liste pour leurs valeurs
    const prices = document.querySelectorAll(".cart__item__content__description :nth-child(3)");
    let subTotalPriceList = [0];


    //Pour chaque balise prix sa valeur est ajouté dans la liste subTotalPrice
    for (let i = 0; i < prices.length; i++) {
        //Récupération de la quantité à partir du prix de l'article concerné
        const quantity = prices[i].parentNode.parentNode.querySelector(".itemQuantity").value

        //Calcul du sous total pour chaque article
        const subTotalPrice = parseInt(quantity) * parseInt(prices[i].textContent);

        //Ajout dans la liste subTotalPriceList
        subTotalPriceList.push(subTotalPrice);
    }

    //Addition des valeurs de la liste
    let totalPrice = subTotalPriceList.reduce((previousValue, currentValue) =>
        previousValue + currentValue, 0
    );

    document.querySelector("#totalPrice").textContent = totalPrice;
}

/**
 * Fonction qui crée l'objet contact contact et la liste d'id en et les passant au format JSON en prévision du post API
 * @return { JSON } constituera le body lors du fetch post
 */
export function createOrderBody() {
    //Récupération des des données du formulaire et création de l'objet contact à l'aide de la fonction trim pour éliminer l'espace antérieure et postérieure
    const contact = {
        firstName: (document.querySelector("#firstName").value).trim(),
        lastName: (document.querySelector("#lastName").value).trim(),
        address: (document.querySelector("#address").value).trim(),
        city: (document.querySelector("#city").value).trim(),
        email: (document.querySelector("#email").value)
    }

    //Récupération des id des produits du panier de l'utilisateur
    let cartProducts = document.querySelectorAll(".cart__item");
    let products = [];
    for (let i = 0; i < cartProducts.length; i++) {
        products.push(cartProducts[i].dataset.id)
    }

    const orderJSON = JSON.stringify({ contact, products });
    return orderJSON;
}