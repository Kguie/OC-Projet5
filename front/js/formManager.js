/**
 * Gestion de tout ce qui concerne le formulaire de commande sur la page panier
 **/


/**
 * Fonction qui valide le prénom
 * @param { String } prénom récupéré dans l'input
 * @return { boolean }+ message d'erreur en fonction de l'erreur
 */
 export function firstNameIsValid() {
   
     //Mise en place de la regex qui authorise  juqu'à 30 caractères:les lettres avec et sans accent ainsi que certains caractères spéciaux et l'espace
    const nameRegex = /^[a-zéèçàù\-,'\s]{1,30}$/gi;

    //Récupération du contenu de l'input
    const firstName = document.querySelector("#firstName").value
    
    //Test du prénom
    const nameTest = nameRegex.test(firstName);
    
    //Ajout de regex pour détecter les erreurs possibles
    const emptyInput = /^[\s]+$/gi;
    const sizeLine = /^[a-zéèçàù\-,'\s]{31,}$/gi;
    const unauthorized = /[^a-zéèçàù'-\s]/gi;
    
    //Traitement du résultat
    if (nameTest == true){
        return 1;
    //Test des causes d'erreurs pour afficher le bon message    
    }else {
        const emptyInputTest = emptyInput.test(firstName);
        const sizeLineTest = sizeLine.test(firstName);
        const unauthorizedTest = unauthorized.test(firstName);

        if (emptyInputTest == true){
            document.querySelector("#firstNameErrorMsg").textContent = "Vous n'avez pas rentré de prénom";
            return 0;        
        }if(sizeLineTest == true){
            document.querySelector("#firstNameErrorMsg").textContent = "Veuillez entrer au maximum 30 caractères s.v.p.";
            return 0;
        }if(unauthorizedTest == true){
            document.querySelector("#firstNameErrorMsg").textContent = "Seules les lettres sont autorisées ainsi que les caractères spéciaux suivants :  é è ç à ù - , '" ;
            return 0;
        }
    }        
}


/**
 * Fonction qui valide le nom
 * @param { String } nom récupéré dans l'input
 * @return { boolean }+ message d'erreur en fonction de l'erreur
 */
export function lastNameIsValid() {
   
    //Mise en place de la regex qui authorise  juqu'à 30 caractères:les lettres avec et sans accent ainsi que certains caractères spéciaux et l'espace
    const nameRegex = /^[a-zéèçàù\-,'\s]{1,30}$/gi;
    //Récupération du contenu de l'input 
    const lastName = document.querySelector("#lastName").value
    
    //Test du nom
    const nameTest = nameRegex.test(lastName);
    
    //Ajout de regex pour détecter les erreurs possibles
    const emptyInput = /^[\s]+$/gi;
    const sizeLine = /^[a-zéèçàù\-,'\s]{31,}$/gi;
    const unauthorized = /[^a-zéèçàù'-\s]/gi;
    
    //Traitement du résultat
    if (nameTest == true){
        return 1;
    //Test des causes d'erreurs pour afficher le bon message    
    }else{
        const emptyInputTest = emptyInput.test(lastName);
        const sizeLineTest = sizeLine.test(lastName);
        const unauthorizedTest = unauthorized.test(lastName);
        //Ajout des conditions d'erreur avec envoie de message
        if (emptyInputTest == true){
            document.querySelector("#lastNameErrorMsg").textContent = "Vous n'avez pas rentré de nom";
            return 0;        
        }if(sizeLineTest == true){
            document.querySelector("#lastNameErrorMsg").textContent = "Veuillez entrer au maximum 30 caractères s.v.p.";
            return 0;
        }if(unauthorizedTest == true){
            document.querySelector("#lastNameErrorMsg").textContent = "Seules les lettres sont autorisées ainsi que les caractères spéciaux suivants :  é è ç à ù - , '" ;
            return 0;
        }
    }        
}


/**
 * Fonction qui valide l'adresse rentrer par le client selon la regex mise en place
 * @param { String }adresse récupéré dans son input
 * @return { boolean }
 * @return { String }message("selon l'erreur détectée")
 */
export function adressIsValid() {
    //Mise en place de la regex qui authorise  juqu'à 80 caractères:les lettres avec et sans accent,les chiffres ,ainsi que certains caractères spéciaux et l'espace 
    const adressRegex = /^[a-z0-9éèçàù\-,'\s]{1,80}$/gi;

    //Ajout de regex pour détecter les erreurs possibles
    const emptyInput = /^[\s]+$/gi;
    const sizeLine = /^[a-z0-9éèçàù\-,'\s]{81,}$/gi;
    const unauthorized = /[^a-z0-9éèçàù,'\-\s]/gi;
    
    //Récupération du contenu de l'input
    const adress = document.querySelector("#address").value;

    //Test de l'adresse
    const adressTest = adressRegex.test(adress);

    //Traitement du résultat
    if (adressTest == true){
        return 1;
    }else{
        const emptyInputTest = emptyInput.test(adress);
        const sizeLineTest = sizeLine.test(adress);
        const unauthorizedTest = unauthorized.test(adress);

        if (emptyInputTest == true){
            document.querySelector("#addressErrorMsg").textContent = "Vous n'avez pas rentré d'adresse";
            return 0;        
        }if(sizeLineTest == true){
            document.querySelector("#addressErrorMsg").textContent = "Veuillez entrer au maximum 80 caractères s.v.p.";
            return 0;
        }if(unauthorizedTest == true){
            document.querySelector("#addressErrorMsg").textContent = "Seuls les lettres et les chiffres sont autorisées ainsi que les caractères spéciaux suivant:  é è ç à ù - , '" ;
            return 0;
        }
    }
}


/**
 * Fonction qui valide la ville
 * @param { String } ville récupéré dans l'input
 * @return { boolean }+ message d'erreur en fonction de l'erreur
 */
 export function cityIsValid() {
   
    //Mise en place de la regex qui authorise  juqu'à 30 caractères:les lettres avec et sans accent ainsi que certains caractères spéciaux et l'espace
    const cityRegex = /^[a-zéèçàù\-,'\s]{1,30}$/gi;

    //Récupération du contenu de l'input
    const city = document.querySelector("#city").value
    
    //Test du prénom
    const cityTest = cityRegex.test(city);
    
    //Ajout de regex pour détecter les erreurs possibles
    const emptyInput = /^[\s]+$/gi;
    const sizeLine = /^[a-zéèçàù\-,'\s]{31,}$/gi;
    const unauthorized = /[^a-zéèçàù'-\s]/gi;
    
    //Traitement du résultat
    if (cityTest == true){
        return 1;
    //Test des causes d'erreurs pour afficher le bon message    
    }else {
        const emptyInputTest = emptyInput.test(city);
        const sizeLineTest = sizeLine.test(city);
        const unauthorizedTest = unauthorized.test(city);

        if (emptyInputTest == true){
            document.querySelector("#cityErrorMsg").textContent = "Vous n'avez pas rentré de ville";
            return 0;        
        }if(sizeLineTest == true){
            document.querySelector("#cityErrorMsg").textContent = "Veuillez entrer au maximum 30 caractères s.v.p.";
            return 0;
        }if(unauthorizedTest == true){
            document.querySelector("#cityErrorMsg").textContent = "Seules les lettres sont autorisées ainsi que les caractères spéciaux suivant:  é è ç à ù - , '" ;
            return 0;
        }
    }        
}


/**
 * Fonction qui valide le mail
 * @param { String } mail récupéré dans l'input
 * @return { boolean }+ message d'erreur en fonction de l'erreur
 */
 export function emailIsValid() {
   
    //Mise en place de la regex qui authorise  juqu'à 3 noms( un au minimun est requis) séparés par un seul "-" "'" ou un espace avec l'obligation de commencer par des lettres et limité à 15 lettres par nom
    const mailRegex = /^[a-z0-9\.!#$%&'*+=?^_`~-]{1,20}@[a-z0-9-!#$%&'*+=?^_`~-]{1,20}\.[a-z0-9]{1,20}$/gi;

    //Récupération du contenu de l'input
    const email = document.querySelector("#email").value
    
    //Test du prénom
    const emailTest = mailRegex.test(email);
    
    //Ajout de regex pour détecter les erreurs possibles    
    const emptyInput = /^[\s]+$/gi;
    //Détection du nombre de caractères dans chacune des partie du mail
    const firstPartSizeLine =  /^[a-z0-9\.!#$%&'*+=?^_`~-]{21,}@[a-z0-9-!#$%&'*+=?^_`~-]{1,20}\.[a-z0-9]{1,20}$/gi;
    const secondPartSizeLine =  /^[a-z0-9\.!#$%&'*+=?^_`~-]{1,20}@[a-z0-9-!#$%&'*+=?^_`~-]{21,}\.[a-z0-9]{1,20}$/gi;
    const thirdPartSizeLine =  /^[a-z0-9\.!#$%&'*+=?^_`~-]{1,20}@[a-z0-9-!#$%&'*+=?^_`~-]{1,20}\.[a-z0-9]{21,}$/gi;
    //Intection de l'utilisation d'espace vide
    const whiteSpace = /[\s]/gi;
    const unauthorized = /[^a-z0-9\.!#$%&'*+=?^_`~-]/gi;
    
    //Traitement du résultat
    if (emailTest == true){
        return 1;
    //Test des causes d'erreurs pour afficher le bon message    
    }else {
        const emptyInputTest = emptyInput.test(email);
        const firstPartSizeLineTest = firstPartSizeLine.test(email);
        const secondPartSizeLineTest = secondPartSizeLine.test(email);
        const thirdPartSizeLineTest = thirdPartSizeLine.test(email);
        const unauthorizedTest = unauthorized.test(email);
        const whiteSpaceTest = whiteSpace.test(email);

        if (emptyInputTest == true){
            document.querySelector("#emailErrorMsg").textContent = "Vous n'avez pas entré d'email";
            return 0;        
        }if(whiteSpaceTest == true){
            document.querySelector("#emailErrorMsg").textContent = "Veuillez ne pas laisser d'espace vide";
            return 0;
        }if((firstPartSizeLineTest == true) || (secondPartSizeLineTest == true) || (thirdPartSizeLineTest == true)){
            document.querySelector("#emailErrorMsg").textContent = "Veuillez entrer au maximum 20 caractères s.v.p. par partie de l'adresse mail ";
            return 0;
        }if(unauthorizedTest == true){
            document.querySelector("#emailErrorMsg").textContent = "Les lettres et chiffres sont autorisées ainsi que les caractères spéciaux suivant:  ! # $ % & ' * + = ? ^ _ ` ~ - @ . " ;
            return 0;
        }else{
            document.querySelector("#emailErrorMsg").textContent = "Veuillez vérifier que votre adresse mail est au bon format adresse@mail.com avec une longueur maximale de 20 caractères par partie" ;
            return 0;
        }
    }        
}