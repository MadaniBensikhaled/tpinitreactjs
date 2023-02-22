/**
* Bensikhaled Madani
* Version 1.0
*/

import React, { useState, useEffect, useRef } from 'react'

import Personne, { listeDePersonnes } from '../classes/Personne.js';

export default function TableauListeDePersonnes() {

    const [listePersonnes, setListePersonnes] = useState([...listeDePersonnes]);

    const [personne, setPersonne] = useState(null)

    const [bAjoutPersonne, setBAjoutPersonne] = useState(false)
    const [bModifPersonne, setBModifPersonne] = useState(false)

    const ajoutPersonne = (p) => {
        setListePersonnes([...listePersonnes, p])
        setBAjoutPersonne(false)
    };

    const suppressionPersonne = (e) => {
        if (!e.target.id) return;
        setListePersonnes(listePersonnes.filter(p => p.id.toString() !== e.target.id.toString()))
    }
    const changePersonne = (e) => {
        if (!e.target.id) return;
        setPersonne(listePersonnes[e.target.id]);
        setBModifPersonne(true)
        setBAjoutPersonne(false)
    }

    const modificationPersonne = (p) => {
        const index = listePersonnes.findIndex(pe => pe.id === p.id)
        listePersonnes[index] = p
        setListePersonnes([...listePersonnes])
    };

    return (
        <div>
            <h2>Ajouter une personne</h2>
            <button onClick={(e) => { setBAjoutPersonne(!bAjoutPersonne); setBModifPersonne(false) }} className="Digi-button">Ajouter une personne</button>
            {bAjoutPersonne &&
                <CompAjoutPersonne action={ajoutPersonne} id={listePersonnes.length} />
            }
            <br/><br/>
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
                    {listePersonnes.map((p, index) =>
                        <tr key={index}>
                            <td>{p.id}</td>
                            <td>{p.nom}</td>
                            <td>{p.prenom}</td>
                            <td>{p.adresse}</td>
                            <td>{p.codePostal}</td>
                            <td>{p.age}</td>
                            <td><button id={p.id} onClick={suppressionPersonne} className="Digi-button">Supprimer la personne</button></td>
                            <td><button id={index} onClick={changePersonne} className="Digi-button">Modifier la personne</button></td>
                        </tr>)}
                </tbody>
            </table>
            <br/><br/>
            {bModifPersonne &&
                <CompModificationPersonne action={modificationPersonne} data={personne} />
            }
            <br/>
        </div>
    )
}



function CompAjoutPersonne({ action, id }) {
    const [personne, setPersonne] = useState(new Personne())
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [adresse, setAdresse] = useState('')
    const [codePostal, setCodePostal] = useState('')
    const [age, setAge] = useState('')
    const idPersonn = ++id;

    const valid = () => {
        personne.id = idPersonn;
        personne.nom = nom;
        personne.prenom = prenom;
        personne.adresse = adresse;
        personne.codePostal = codePostal;
        personne.age = age;
        setPersonne(personne)
        action(personne)
    }

    return (
        <div>
            <h3>(Nouvel ID égale à {idPersonn})</h3>
            <form noValidate onSubmit={(e) => e.preventDefault(false)}>
                <label>Nom :
                    <input type='text'
                        value={nom} size='30'
                        onChange={(e) => { setNom(e.target.value) }} /></label><br />
                <label>Prénom :
                    <input type='text'
                        value={prenom} size='30'
                        onChange={(e) => { setPrenom(e.target.value) }} /></label><br />
                <label>Adresse :
                    <input type='text'
                        value={adresse} size='30'
                        onChange={(e) => { setAdresse(e.target.value) }} /></label><br />
                <label>Code Postal :
                    <input type='text'
                        value={codePostal} size='30'
                        onChange={(e) => { setCodePostal(e.target.value) }} /></label><br />
                <label>Âge :
                    <input type='text'
                        value={age} size='30'
                        onChange={(e) => { setAge(e.target.value) }} /></label><br />
                <button onClick={valid} className="Digi-button">Ajout</button>
            </form>

        </div>
    );
}


function CompModificationPersonne({ data, action }) {
    const [personne, setPersonne] = useState({ ...data })

    const anciennePersonne = useRef("");

    useEffect(() => setPersonne({ ...data }), [data])

    useEffect(() => {
        anciennePersonne.current = {...data};
      }, [data]);

    const valid = () => {
        action(personne)
    }

    return (
        <div>
            <h2>Modifier une personne</h2>
            <h3>Modification de la personne nommée {personne.nom}</h3>
            <form noValidate onSubmit={(e) => e.preventDefault(false)}>
                <label>Nom :
                    <input type='text'
                        value={personne.nom} size='30'
                        onChange={(e) => { personne.nom = e.target.value; setPersonne({ ...personne }) }} /></label><br />
                <label>Prénom :
                    <input type='text'
                        value={personne.prenom} size='30'
                        onChange={(e) => { personne.prenom = e.target.value; setPersonne({ ...personne }) }} /></label><br />
                <label>Adresse :
                    <input type='text'
                        value={personne.adresse} size='30'
                        onChange={(e) => { personne.adresse = e.target.value; setPersonne({ ...personne }) }} /></label><br />
                <label>Code Postal :
                    <input type='text'
                        value={personne.codePostal} size='30'
                        onChange={(e) => { personne.codePostal = e.target.value; setPersonne({ ...personne }) }} /></label><br />
                <label>Âge :
                    <input type='text'
                        value={personne.age} size='30'
                        onChange={(e) => { personne.age = e.target.value; setPersonne({ ...personne }) }} /></label><br />
                <button onClick={valid} className="Digi-button">Valider</button>
            </form>
            <h3>Ancienne valeurs pour la personne :</h3>
            <p>Prenom : {anciennePersonne.current.prenom}</p>
            <p>Nom : {anciennePersonne.current.nom}</p>
            <p>Adresse : {anciennePersonne.current.adresse}</p>
            <p>Code Postal : {anciennePersonne.current.codePostal}</p>
            <p>Âge : {anciennePersonne.current.age}</p>

        </div>
    );
}