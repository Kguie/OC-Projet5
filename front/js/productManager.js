// **Gestion des produits en objet**//

//Fonction chargeant les caractéristiques du produit depuis l'API en renseignant son id
export async function getProductById(id){
    
    // Récupération des produits depuis l'API HTTP
    const reponse = await fetch("http://localhost:3000/api/products/" + id);
    const product = await reponse.json();
    return product;
};

//Fonction qui crée les options pour chaque couleur disponible
export function colorSelector(colors){    
    for(let i=0; i<colors.length; i++){
        
        //Création de la balise option
        const colorOption = document.createElement("option");

        //Attribution des valeurs et du texte
        colorOption.setAttribute("value", colors[i]);
        colorOption.textContent = colors[i];

        //Attachement au DOM
        document.querySelector("#colors").appendChild(colorOption);
    }    
}

