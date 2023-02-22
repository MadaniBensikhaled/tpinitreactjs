/**
* Bensikhaled Madani
* Version 1.0
*/

//Classe "Personne"
class Personne {
    id = 0;
    nom = "";
    prenom = "";
    adresse = "";
    codePostal = "";
    age = 18;
}

//Classe "Personne" exportable par défaut
export default Personne

//Liste exportable de trois personnes par un flux JSON
export let listeDePersonnes = [
    {
        id: 1,
        nom: "Lessard",
        prenom: "Faustin",
        adresse: "Rue Hubert de Lisle",
        codePostal: "56100",
        age: 58,
    },
    {
        id: 2,
        nom: "Turcotte",
        prenom: "Cécile",
        adresse: "Rue de l'Epeule",
        codePostal: "97440",
        age: 44,
    },
    {
        id: 3,
        nom: "Perreault",
        prenom: "Gauthier",
        adresse: "Rue Michel Ange",
        codePostal: "94270",
        age: 72,
    }
];

