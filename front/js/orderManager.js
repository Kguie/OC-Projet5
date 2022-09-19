/**
 * Gestion de tout ce qui concerne le paiement,son calcul ,la finalisation de la commande
 **/


/**
 * Fonction qui calcule la quantité total en utilisant les quantités  présentes sur la page 
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

    //Addition de toutes les valeurs dans la liste avec parseInt pour être sur d'additionner des nombres
    let totalQuantity = quantityList.reduce((previousValue, currentValue) =>
        parseInt(previousValue) + parseInt(currentValue), 0
    );

    //Affichage du résultat dans la balise totalQuantity
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

    //Affichage du résultat dans la balise totalQuantity
    document.querySelector("#totalPrice").textContent = totalPrice;
}

/**
 * Fonction qui envoie l'objet contact et la liste des Id à l'api et ouvre la page confirmation
 * @return { string|error } Lance la page de confirmation en fonction du numéro de commande
 */
export async function orderValidation() {
    //Récupération des des données du formulaire et création de l'objet contact
    const contact = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
    }

    //Récupération des id des produits du panier de l'utilisateur
    let cartProducts = document.querySelectorAll(".cart__item");
    let products = [];
    for (let i = 0; i < cartProducts.length; i++) {
        products.push(cartProducts[i].dataset.id)
    }

    //Gestion d'erreur dans la transmission des données à l'API

    // Envoi à l'API
    let response = await fetch("http://localhost:3000/api/products/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        "body": JSON.stringify({ contact, products })
    });

    //Récupération de la réponse de l'API et de l'orderId
    if (response.status >= 200 && response.status <= 299) {
        const order = await response.json();
        const orderId = order.orderId;
        //Ouverture de la page confirmation
        window.open("./confirmation.html?orderId=" + orderId, "_self")
        localStorage.clear();
    } else {
        alert("Nous n'avons pas réussi à transmettre votre commande,veuillez réessayer plus tard ou contacter le service client");
        return 0;
    }


}






