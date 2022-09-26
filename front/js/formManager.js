/**
 * Gestion de la validation du formulaire de commande sur la page panier
 **/

/**
 * Fonction qui vérifie le prénom présent dans l'input "document.querySelector("#firstName")" avec des regex et indique en cas d'erreur,quelle erreur est commise
 *@return { boolean|(boolean&string) } retourne aussi un message d'erreur qui varie en fonction de l'erreur présente
 */
export function firstNameIsValid() {
    //Mise en place de la regex qui autorise  jusqu'à 30 caractères:les lettres avec et sans accent ainsi que certains caractères spéciaux et l'espace
    const nameRegex = /^[a-zéèçàù\-,'\s]{1,30}$/gi;

    const firstName = document.querySelector("#firstName").value

    //Ajout de regex pour détecter les erreurs possibles
    const emptyInput = /^[\s]+$/g;
    const sizeLine = /^[a-zéèçàù\-,'\s]{31,}$/gi;
    const unauthorized = /[^a-zéèçàù'-\s]/gi;

    //Test
    const nameTest = nameRegex.test(firstName);
    const emptyInputTest = emptyInput.test(firstName);
    const sizeLineTest = sizeLine.test(firstName);
    const unauthorizedTest = unauthorized.test(firstName);

    //Traitement du résultat   
    if ((emptyInputTest == true) | (!firstName)) {
        document.querySelector("#firstNameErrorMsg").innerHTML = "Vous n'avez pas rentré de prénom";
        return 0;
    } if (sizeLineTest == true) {
        document.querySelector("#firstNameErrorMsg").innerHTML = "Veuillez entrer au maximum 30 caractères s.v.p.";
        return 0;
    } if (unauthorizedTest == true) {
        document.querySelector("#firstNameErrorMsg").innerHTML = "Seules les lettres sont autorisées ainsi que les caractères spéciaux suivants :<br>é è ç à ù - , '";
        return 0;
    }
    if (nameTest == true) {
        return 1;
    } else {
        document.querySelector("#firstNameErrorMsg").innerHTML = "Veuillez vérifier que le prénom rentré respecte les caractéristiques suivantes :<br>Composée de 1 à 30 caractères<br>Seules les lettres sont autorisées ainsi que les caractères spéciaux suivants :  é è ç à ù - , '";
        return 0;
    }
}

/**
 * Fonction qui vérifie le nom présent dans l'input "document.querySelector("#lastName")" avec des regex et indique en cas d'erreur,quelle erreur est commise
 * @return { boolean|(boolean&string) } retourne aussi un message d'erreur qui varie en fonction de l'erreur présente
 */
export function lastNameIsValid() {
    //Mise en place de la regex qui autorise jusqu'à 30 caractères:les lettres avec et sans accent ainsi que certains caractères spéciaux et l'espace
    const nameRegex = /^[a-zéèçàù\-,'\s]{1,30}$/gi;

    const lastName = document.querySelector("#lastName").value

    //Ajout de regex pour détecter les erreurs possibles
    const emptyInput = /^[\s]+$/gi;
    const sizeLine = /^[a-zéèçàù\-,'\s]{31,}$/gi;
    const unauthorized = /[^a-zéèçàù'-\s]/gi;

    //Test
    const nameTest = nameRegex.test(lastName);
    const emptyInputTest = emptyInput.test(lastName);
    const sizeLineTest = sizeLine.test(lastName);
    const unauthorizedTest = unauthorized.test(lastName);

    //Traitement du résultat
    if ((emptyInputTest == true) | (!lastName)) {
        document.querySelector("#lastNameErrorMsg").innerHTML = "Vous n'avez pas rentré de nom";
        return 0;
    } if (sizeLineTest == true) {
        document.querySelector("#lastNameErrorMsg").innerHTML = "Veuillez entrer au maximum 30 caractères s.v.p.";
        return 0;
    } if (unauthorizedTest == true) {
        document.querySelector("#lastNameErrorMsg").innerHTML = "Seules les lettres sont autorisées ainsi que les caractères spéciaux suivants :<br> é è ç à ù - , '";
        return 0;
    }
    if (nameTest == true) {
        return 1;
    } else {
        document.querySelector("#lastNameErrorMsg").innerHTML = "Veuillez vérifier que le nom rentré respecte les caractéristiques suivantes :<br>Composée de 1 à 30 caractères<br>Seules les lettres sont autorisées ainsi que les caractères spéciaux suivants :  é è ç à ù - , '";
        return 0;
    }
}


/**
 * Fonction qui vérifie le nom présent dans l'input "document.querySelector("#address")" avec des regex et indique en cas d'erreur,quelle erreur est commise
 * @return { boolean|(boolean&string) } retourne aussi un message d'erreur qui varie en fonction de l'erreur présente
 */
export function addressIsValid() {
    //Mise en place de la regex qui autorise jusqu'à 80 caractères:les lettres avec et sans accent,les chiffres ,ainsi que certains caractères spéciaux et l'espace 
    const addressRegex = /^[a-z0-9éèçàù\-,'\s]{1,80}$/gi;

    //Ajout de regex pour détecter les erreurs possibles
    const emptyInput = /^[\s]+$/gi;
    const sizeLine = /^[a-z0-9éèçàù\-,'\s]{81,}$/gi;
    const unauthorized = /[^a-z0-9éèçàù,'\-\s]/gi;

    const address = document.querySelector("#address").value;
    //Test de l'adresse
    const addressTest = addressRegex.test(address);
    const emptyInputTest = emptyInput.test(address);
    const sizeLineTest = sizeLine.test(address);
    const unauthorizedTest = unauthorized.test(address);

    //Traitement du résultat
    if ((emptyInputTest == true) | (!address)) {
        document.querySelector("#addressErrorMsg").innerHTML = "Vous n'avez pas rentré d'adresse";
        return 0;
    } if (sizeLineTest == true) {
        document.querySelector("#addressErrorMsg").innerHTML = "Veuillez entrer au maximum 80 caractères s.v.p.";
        return 0;
    } if (unauthorizedTest == true) {
        document.querySelector("#addressErrorMsg").innerHTML = "Seuls les lettres et les chiffres sont autorisées ainsi que les caractères spéciaux suivants:<br> é è ç à ù - , '";
        return 0;
    }
    if (addressTest == true) {
        return 1;
    } else {
        document.querySelector("#addressErrorMsg").innerHTML = "Veuillez vérifier que l'adresse rentrée respecte les caractéristiques suivantes :<br>Composée de 1 à 80 caractères<br>Seules les lettres sont autorisées ainsi que les caractères spéciaux suivants :  é è ç à ù - , '";
        return 0;
    }
}


/**
 * Fonction qui vérifie le nom présent dans l'input "document.querySelector("#city")" avec des regex et indique en cas d'erreur,quelle erreur est commise
 * @return { boolean|(boolean&string) } retourne aussi un message d'erreur qui varie en fonction de l'erreur présente
 */
export function cityIsValid() {
    //Mise en place de la regex qui autorise jusqu'à 30 caractères:les lettres avec et sans accent ainsi que certains caractères spéciaux et l'espace
    const cityRegex = /^[a-zéèçàù\-,'\s]{1,30}$/gi;

    const city = document.querySelector("#city").value

    //Ajout de regex pour détecter les erreurs possibles
    const emptyInput = /^[\s]+$/gi;
    const sizeLine = /^[a-zéèçàù\-,'\s]{31,}$/gi;
    const unauthorized = /[^a-zéèçàù'-\s]/gi;

    //Test
    const cityTest = cityRegex.test(city);
    const emptyInputTest = emptyInput.test(city);
    const sizeLineTest = sizeLine.test(city);
    const unauthorizedTest = unauthorized.test(city);

    //Traitement du résultat
    if ((emptyInputTest == true) | (!city)) {
        document.querySelector("#cityErrorMsg").innerHTML = "Vous n'avez pas rentré de ville";
        return 0;
    } if (sizeLineTest == true) {
        document.querySelector("#cityErrorMsg").innerHTML = "Veuillez entrer au maximum 30 caractères s.v.p.";
        return 0;
    } if (unauthorizedTest == true) {
        document.querySelector("#cityErrorMsg").innerHTML = "Seules les lettres sont autorisées ainsi que les caractères spéciaux suivants:<br> é è ç à ù - , '";
        return 0;
    }
    if (cityTest == true) {
        return 1;
    } else {
        document.querySelector("#cityNameErrorMsg").innerHTML = "Veuillez vérifier que la ville rentrée respecte les caractéristiques suivantes :<br>Composée de 1 à 30 caractères<br>Seules les lettres sont autorisées ainsi que les caractères spéciaux suivants :  é è ç à ù - , '";
        return 0;
    }
}


/**
 * Fonction qui vérifie le nom présent dans l'input "document.querySelector("#email")" avec des regex et indique en cas d'erreur,quelle erreur est commise
 * @return { boolean|(boolean&string) } retourne aussi un message d'erreur qui varie en fonction de l'erreur présente
 */
export function emailIsValid() {
    //Mise en place de la regex qui autorise 20 caractères par partie du mail ,sans espace et limité à certains caractères
    const mailRegex = /^[a-z0-9!#$%&'*+=?^_`~\.-]{1,20}@[a-z0-9-!#$%&'*+=?^_`~-]{1,20}\.[a-z0-9]{1,20}$/gi;

    //Ajout de regex pour détecter les erreurs possibles    
    const emptyInput = /^[\s]+$/g;
    //Détection du nombre de caractères dans chacune des partie du mail
    const PartSizeLine = /^([a-z0-9\.!#$%&'*+=?^_`~-]{21,}@[a-z0-9-!#$%&'*+=?^_`~-]{1,20}\.[a-z0-9]{1,20}$)|^[a-z0-9\.!#$%&'*+=?^_`~-]{1,20}@[a-z0-9-!#$%&'*+=?^_`~-]{21,}\.[a-z0-9]{1,20}$|^[a-z0-9\.!#$%&'*+=?^_`~-]{1,20}@[a-z0-9-!#$%&'*+=?^_`~-]{1,20}\.[a-z0-9]{21,}$/gi;
    const whiteSpace = /[\s]/g;
    const unauthorized = /[^a-z0-9\.!#$%&'*+=?^_`~\-@]/gi;
    const oneTimeAuthorized = /(@(.*@)+)/g;
    const email = document.querySelector("#email").value
    const periodLimited = /^[a-z0-9!#$%&'*+=?^_`~\.-]{1,20}@.+\..+(\..+)+/g;
    //Test
    const emailTest = mailRegex.test(email);
    const emptyInputTest = emptyInput.test(email);
    const PartSizeLineTest = PartSizeLine.test(email);
    const unauthorizedTest = unauthorized.test(email);
    const oneTimeAuthorizedTest = oneTimeAuthorized.test(email);
    const whiteSpaceTest = whiteSpace.test(email);

    //Traitement du résultat
    if ((emptyInputTest == true) | (!email)) {
        document.querySelector("#emailErrorMsg").innerHTML = "Vous n'avez pas entré d'email";
        return 0;
    } if (whiteSpaceTest == true) {
        document.querySelector("#emailErrorMsg").innerHTML = "Veuillez ne pas laisser d'espace vide";
        return 0;
    } if (PartSizeLineTest == true) {
        document.querySelector("#emailErrorMsg").innerHTML = "Veuillez entrer au maximum 20 caractères s.v.p. par partie de l'adresse mail ";
        return 0;
    } if (unauthorizedTest == true) {
        document.querySelector("#emailErrorMsg").innerHTML = "Les lettres et chiffres sont autorisées ainsi que les caractères spéciaux suivants:<br> ! # $ % & ' * + = ? ^ _ ` ~ - @ .";
        return 0;
    } if (oneTimeAuthorizedTest == true) {
        document.querySelector("#emailErrorMsg").innerHTML = "Le caractères '@' ne peut être utilisé qu'une seule fois";
        return 0;
    } if (emailTest == true) {
        return 1;
    } else {
        document.querySelector("#emailErrorMsg").innerHTML = "Veuillez vérifier que votre adresse mail est valide et au bon format adresse@mail.com<br>Un seul  .  autorisé dans la partie du mail après le  @  ";
        return 0;
    }
}