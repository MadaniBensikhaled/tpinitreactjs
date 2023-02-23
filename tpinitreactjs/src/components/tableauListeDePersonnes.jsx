/**
* Bensikhaled Madani
* Version 1.0
*/

import React, { useState, useEffect, useRef } from 'react'

import ServicePersonne from '../services/axiosPersonne';

export default function TableauListeDePersonnes() {

    const [listePersonnes, setListePersonnes] = useState([])
    const service = new ServicePersonne();

    const affiche = () => {
        service.get().then(response => {
            setListePersonnes(response.data)
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        affiche()
    }, [])

    const [personne, setPersonne] = useState(null)

    const [bAjoutPersonne, setBAjoutPersonne] = useState(false)
    const [bModifPersonne, setBModifPersonne] = useState(false)

    const ajoutPersonne = (p) => {
        service.post(p).then(
            (response) =>
                affiche()
        ).catch((err) => console.log(err))
        setBAjoutPersonne(false)
    };

    const suppressionPersonne = (e) => {
        if (!e.target.id) return;
        service.delete(e.target.id).then(
            (response) =>
                affiche()
        ).catch((err) => console.log(err))
    }
    const changePersonne = (e) => {
        if (!e.target.id) return;
        setPersonne(listePersonnes[e.target.id]);
        setBModifPersonne(true)
        setBAjoutPersonne(false)
    }

    const modificationPersonne = (p) => {
        service.put(p.id, p).then(
            (response) =>
                affiche()
        ).catch((err) => console.log(err))
    };

    const triPersonnesAsc = async () => {
        const tri = [...listePersonnes].sort((a, b) => {
            let fa = a.nom.toLowerCase(),
                fb = b.nom.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        setListePersonnes([...tri])
    }

    const triPersonnesDesc = async () => {
        const tri = [...listePersonnes].sort((a, b) => {
            let fa = a.nom.toLowerCase(),
                fb = b.nom.toLowerCase();

            if (fa > fb) {
                return -1;
            }
            if (fa < fb) {
                return 1;
            }
            return 0;
        });
        setListePersonnes([...tri])
    }

    return (
        <div>
            <h2>Ajouter une personne</h2>
            <button onClick={(e) => { setBAjoutPersonne(!bAjoutPersonne); setBModifPersonne(false) }} className="Digi-button">Ajouter une personne</button>
            {bAjoutPersonne &&
                <CompAjoutPersonne action={ajoutPersonne} id={listePersonnes.length} />
            }
            <br /><br />
            <h2>Liste des personnes :</h2>
            <button onClick={triPersonnesAsc} className="Digi-button">Tri par ordre croissant (par nom)</button>
            <button onClick={triPersonnesDesc} className="Digi-button">Tri par ordre décroissant (par nom)</button>
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
            <br /><br />
            {bModifPersonne &&
                <CompModificationPersonne action={modificationPersonne} data={personne} />
            }
            <br />
        </div>
    )
}



function CompAjoutPersonne({ action, id }) {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [adresse, setAdresse] = useState('')
    const [codePostal, setCodePostal] = useState('')
    const [age, setAge] = useState('')
    const idPersonn = ++id;

    const valid = () => {
        let personne = new Object();
        personne.id = idPersonn;
        personne.nom = nom;
        personne.prenom = prenom;
        personne.adresse = adresse;
        personne.codePostal = codePostal;
        personne.age = age;
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

    useEffect(() => {
        setPersonne({ ...data });
        anciennePersonne.current = { ...data };
    }, [data])

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
            <p>Nom : {anciennePersonne.current.nom}</p>
            <p>Prénom : {anciennePersonne.current.prenom}</p>
            <p>Adresse : {anciennePersonne.current.adresse}</p>
            <p>Code Postal : {anciennePersonne.current.codePostal}</p>
            <p>Âge : {anciennePersonne.current.age}</p>

        </div>
    );
}