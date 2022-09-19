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
    } catch (err) {
        alert("Nous n'avons pas réussi à récupérer les produits disponibles,veuillez réessayer plus tard ou contacter le service client");
    }
    let response = await fetch(url);
    let products = await response.json();
    return products;

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
    } catch (err) {
        alert("Nous n'avons pas réussi à trouver le produit sélectionné,veuillez réessayer plus tard ou contacter le service client");
    };

    let response = await fetch("http://localhost:3000/api/products/" + id);
    let product = await response.json();
    return product;
};


/**
 * Fonction qui crée les options pour chaque sélecteur de couleurs disponibles en fonction des couleurs disponibles dans l'object de chaque produit
 * @param {string} colors,couleurs disponibles pour chacun des produit 
 */
export function colorSelector(colors) {
    for (let i = 0; i < colors.length; i++) {

        //Création de la balise option
        const colorOption = document.createElement("option");

        //Attribution des valeurs et du texte
        colorOption.setAttribute("value", colors[i]);
        colorOption.textContent = colors[i];

        //Attachement au DOM
        document.querySelector("#colors").appendChild(colorOption);
    }
}