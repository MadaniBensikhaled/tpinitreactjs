/**
* Bensikhaled Madani
* Version 1.0
*/

import React, { Component } from 'react'

import Personne, { listeDePersonnes } from '../classes/Personne.js';

export default class TableauListeDePersonnes extends Component {

    constructor() {
        super()
        this.listeDePersonnes = [...listeDePersonnes]
        this.state = { listeDePersonnes: this.listeDePersonnes }
    }

    afficheListePersonnes = () => this.state.listeDePersonnes.map(
        (personne, index) =>
            <tr key={personne.Id}>
                <td>{personne.Id}</td>
                <td>{personne.Nom}</td>
                <td>{personne.Prenom}</td>
                <td>{personne.Adresse}</td>
                <td>{personne.CodePostal}</td>
                <td>{personne.Age}</td>
            </tr>
    )

    render() {
        return (
            <div>
                <hr />
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