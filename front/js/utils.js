/**
 * Fonction qui crée les options pour chaque sélecteur de couleurs disponibles en fonction des couleurs disponibles dans l'object de chaque produit
 * @param {string} colors,couleurs disponibles pour chacun des produit 
 * @param {string}location,élément select parent dans le DOM où doit être attaché la ou les options de couleur
 */
export function colorSelector(colors, location) {
    for (let i = 0; i < colors.length; i++) {

        //Création de la balise option
        const colorOption = document.createElement("option");

        //Attribution des valeurs et du texte
        colorOption.setAttribute("value", colors[i]);
        colorOption.textContent = colors[i];

        //Attachement au DOM
        location.appendChild(colorOption);
    }
}