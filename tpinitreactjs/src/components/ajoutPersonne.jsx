/**
* Bensikhaled Madani
* Version 1.0
*/

import React, { Component } from 'react'
import Personne from '../classes/Personne';

export default class AjoutPersonne extends Component {

    constructor(props) {
        super(props)
        this.state = { personne: new Personne() }
    }

    submit = (e) => {
        e.preventDefault(false);
        console.log(this.state.personne)
        if (this.props.ajout) {
            this.props.ajout({ ...this.state.personne })
        }

    }

    render() {
        return (
            <div>
                <h2>Ajouter une personne :</h2>
                <form onSubmit={this.submit}>
                    <label for="id">Saisie de l'Id de la personne :</label>
                    <input type="number" required
                        value={this.state.personne.Id}
                        onChange={
                            (e) => {
                                let lpersonne = this.state.personne
                                lpersonne.Id = e.target.value
                                this.setState({ contact: lpersonne })
                            }
                        }
                        id="id"
                        placeholder="Saisie de l'id obligatoire" /><br/>
                    <label for="Nom">Saisie du nom de la personne :</label>
                    <input type="text" required value={this.state.personne.Nom}
                        onChange={
                            (e) => {
                                let lpersonne = this.state.personne
                                lpersonne.Nom = e.target.value
                                this.setState({ contact: lpersonne })
                            }
                        }
                        id="Nom"
                        placeholder="Saisie du nom obligatoire" /><br/>
                    <label for="Prenom">Saisie du prénom de la personne :</label>
                    <input type="text" required value={this.state.personne.Prenom}
                        onChange={
                            (e) => {
                                let lpersonne = this.state.personne
                                lpersonne.Prenom = e.target.value
                                this.setState({ contact: lpersonne })
                            }
                        }
                        id="Prenom"
                        placeholder="Saisie du prénom obligatoire" /><br/>
                    <label for="Adresse">Adresse :</label>
                    <input type="text" required value={this.state.personne.Adresse}
                        onChange={
                            (e) => {
                                let lpersonne = this.state.personne
                                lpersonne.Adresse = e.target.value
                                this.setState({ contact: lpersonne })
                            }
                        }
                        id="Adresse"
                        placeholder="Saisie de l'adresse obligatoire" /><br/>
                    <label for="CodePostal">Code Postal :</label>
                    <input type="text" required value={this.state.personne.CodePostal}
                        onChange={
                            (e) => {
                                let lpersonne = this.state.personne
                                lpersonne.CodePostal = e.target.value
                                this.setState({ contact: lpersonne })
                            }
                        }
                        id="CodePostal"
                        placeholder="Saisie du code postal obligatoire" /><br/>
                    <label for="Age">Age :</label>
                    <input type="text" required value={this.state.personne.Age}
                        onChange={
                            (e) => {
                                let lpersonne = this.state.personne
                                lpersonne.Age = e.target.value
                                this.setState({ contact: lpersonne })
                            }
                        }
                        id="Age"
                        placeholder="Saisie de l'age obligatoire" /><br/>
                    <input type="submit" value="Valider l'ajout" className="Digi-button"/>
                </form>
            </div>
        )
    }
}