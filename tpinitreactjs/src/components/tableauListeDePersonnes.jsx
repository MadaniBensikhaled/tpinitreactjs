/**
* Bensikhaled Madani
* Version 1.0
*/

import React, { Component } from 'react'

import Personne, { listeDePersonnes } from '../classes/Personne.js';

import AjoutPersonne from './ajoutPersonne.jsx';

import ModificationPersonne from './modificationPersonne.jsx';

export default class TableauListeDePersonnes extends Component {

    constructor() {
        super()
        this.listeDePersonnes = [...listeDePersonnes]
        this.state = { listeDePersonnes: this.listeDePersonnes }
    }

    afficheListePersonnes = () => this.state.listeDePersonnes.map(
        (personne, index) =>
            <>
                <tr key={personne.Id}>
                    <td>{personne.Id}</td>
                    <td>{personne.Nom}</td>
                    <td>{personne.Prenom}</td>
                    <td>{personne.Adresse}</td>
                    <td>{personne.CodePostal}</td>
                    <td>{personne.Age}</td>
                    <td id={index} style={{ visibility: "collapse" }}><ModificationPersonne personne_modif={personne} modification={this.modificationPersonne} index={index} masquerModificationPersonne={this.masquerModificationPersonne} /></td>
                    <td><button onClick={() => this.ajouterModificationPersonne(index)} className="Digi-button">Modifier la personne</button></td>
                    <td><button onClick={() => this.suppressionPersonne(index)} className="Digi-button">Supprimer la personne</button></td>
                </tr>
                <br />
            </>
    )

    ajoutPersonne = (personne) => {
        let listeE = [...this.state.listeDePersonnes];

        let exist = false;

        for (let i = 0; i < listeE.length; i++) {
            if (listeE[i].Id === personne.Id) {
                exist = true;
            }
        }

        if (exist === true) {
            alert("Id déjà utilisé !");
        }
        else {
            listeE.push(personne);
            this.setState({ listeDePersonnes: [...listeE] });
        }
    }

    modificationPersonne = (personneModifiee) => {
        let listeaModifiee = [...this.state.listeDePersonnes];

        for (let i = 0; i < listeaModifiee.length; i++) {
            if (listeaModifiee[i] === personneModifiee) {
                listeaModifiee[i] = personneModifiee;
            }
        }

        this.setState({ listeDePersonnes: [...listeaModifiee] });
    }

    ajouterModificationPersonne = (index) => {
        document.getElementById(index).style.visibility = "visible";
    }

    masquerModificationPersonne = (index) => {
        document.getElementById(index).style.visibility = "collapse";
    }

    suppressionPersonne = (index) => {
        //this.listeDePersonnes.splice(index, index);
        //this.setState({ listeDePersonnes: this.listeDePersonnes });

        const test = [...this.state.listeDePersonnes];

        test.splice(index, 1);

        this.setState({ listeDePersonnes: [...test] });

        //for (let i = 0; i < this.listeDePersonnes.length; i++) {
        //    if (this.listeDePersonnes[i] !== personne) {
        //        test.push(this.listeDePersonnes[i]);
        //    }
        //}


        //this.setState({ listeDePersonnes: test });
        //console.log(this.state.listeDePersonnes);
    }

    render() {
        return (
            <div>
                <hr />
                <div>
                    <AjoutPersonne ajout={this.ajoutPersonne} /> <br />
                </div>
                <hr />
                <h2>Liste des personnes :</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tableau des personnes</th>
                        </tr>
                        <tr>
                            <th>Id</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Adresse</th>
                            <th>Code Postal</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.afficheListePersonnes()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}