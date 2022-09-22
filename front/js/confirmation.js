/**
 * Gère l'affichage et les interactions de la page confirmation en fonction de l'id de commande
 **/


//Récupération de l'URL de la page
let str = window.location.href;

//Recherche de l' id de commande par rapport à l'url de la page
let url = new URL(str);
let search_params = new URLSearchParams(url.search);
if (search_params.has("orderId")) {
    let orderId = search_params.get("orderId");
    document.querySelector("#orderId").textContent = orderId;
}