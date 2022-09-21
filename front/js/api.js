/**
 * Gestion des produits en objet
 **/


/**
 * Fonction qui récupère tous les canapés disponibles sur l'API
 * @param {url} url de l'API 
 * @return { [objects]|error } produits avec toutes leurs caractéristiques
 */
export async function getProducts(url) {
    //Gestion d'erreur d'exécution au niveau de l'API
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
 * @param {string} id du produit 
 * @return { object|error } produit avec toutes ses caractéristiques
 */
export async function getProductById(id) {

    //Gestion d'erreur d'exécution au niveau de l'API 
    try {
        let response = await fetch("http://localhost:3000/api/products/" + id);
        let product = await response.json();
        return product;
    } catch (err) {
        alert("Nous n'avons pas réussi à trouver le produit sélectionné,veuillez réessayer plus tard ou contacter le service client");
        return [];
    }
};
