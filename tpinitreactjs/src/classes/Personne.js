/**
* Bensikhaled Madani
* Version 1.0
*/

//Classe "Personne"
class Personne {
    Id = 0;
    Nom = "";
    Prenom = "";
    Adresse = "";
    CodePostal = "";
    Age = 18;
}

//Classe "Personne" exportable par défaut
export default Personne

//Liste exportable de trois personnes par un flux JSON
export let listeDePersonnes = [
    {
        Id: 1,
        Nom: "Lessard",
        Prenom: "Faustin",
        Adresse: "Rue Hubert de Lisle",
        CodePostal: "56100",
        Age: 58,
    },
    {
        Id: 2,
        Nom: "Turcotte",
        Prenom: "Cécile",
        Adresse: "Rue de l'Epeule",
        CodePostal: "97440",
        Age: 44,
    },
    {
        Id: 3,
        Nom: "Perreault",
        Prenom: "Gauthier",
        Adresse: "Rue Michel Ange",
        CodePostal: "94270",
        Age: 72,
    }
];

