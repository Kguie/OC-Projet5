/**
 * Gestion des fonctions utilitaires

/**
 * Fonction qui crée les options pour chaque sélecteur en fonction des couleurs disponibles dans l'objet de chaque produit
 * Crée la balise option
 * Leur attribue une valeur et un texte
 * Attache au DOM
 * @param {string} colors,couleurs disponibles pour chacun des produit 
 * @param {string}location,élément select parent dans le DOM où doit être attaché la ou les options de couleur
 */
export function colorSelector(colors, location) {
    for (let i = 0; i < colors.length; i++) {
        const colorOption = document.createElement("option");

        colorOption.setAttribute("value", colors[i]);
        colorOption.textContent = colors[i];

        location.appendChild(colorOption);
    }
}

/**
 * Fonction qui vérifie la validité de l'objet  au format JSON
 * @param {JSON} 
 * @return {boolean} 
 */
export function isValidJSON(txt) {
    try {
        JSON.parse(txt);
        return true;
    } catch (err) {
        alert("Nous n'avons pas à récupérer votre panier,veuillez réessayer plus tard ou contacter le service client");
        return false;
    }
}