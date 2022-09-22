/**
 * Gestion des appels API
 **/


/**
 * Fonction qui récupère tous les canapés disponibles sur l'API
 * Gère les erreurs d'exécution au niveau de l'API
 * @param {url} url de l'API 
 * @return { [objects]|error } produits avec toutes leurs caractéristiques
 */
export async function getProducts(url) {
    try {
        let response = await fetch(url);
        let products = await response.json();
        return products;
    } catch (err) {
        alert("Nous n'avons pas réussi à récupérer les produits disponibles,veuillez réessayer plus tard ou contacter le service client");
        return [];
    }
}


/**
 * Fonction qui récupère toutes les caractéristiques du produit sur l'API dont on rentre l'id
 * Gère les erreurs d'exécution au niveau de l'API
 * @param {url} url de l'API 
 * @param {string} id du produit 
 * @return { object|error } produit avec toutes ses caractéristiques
 */
export async function getProductById(id) {
    try {
        let response = await fetch("http://localhost:3000/api/products/" + id);
        let product = await response.json();
        return product;
    } catch (err) {
        alert("Nous n'avons pas réussi à trouver le produit sélectionné,veuillez réessayer plus tard ou contacter le service client");
        return [];
    }
};


/**
 * Fonction qui envoie la commande dans l'API et récupère le numéro de commande 
 * @param {JSON} orderBody au format JSON composé des id des produits souhaités et du formulaire contact
 * @return { string|error } récupère le numéro de commande dans la réponse de l'API
 */
export async function postOrder(orderBody) {
    const fetchSettings = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        "body": orderBody
    }
    const response = await fetch("http://localhost:3000/api/products/order", fetchSettings);
    if (!response.ok) {
        alert("Votre commande n'a pas pu être transmise,veuillez réessayer plus tard ou contacter le service client")
        return;
    }
    const result = await response.json();
    const id = result.orderId;
    return id;
}