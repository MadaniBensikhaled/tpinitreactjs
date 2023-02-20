/**
* Bensikhaled Madani
* Version 1.0
*/

import React from 'react'

export default function afficheDateHeure() {

    const date = new Date();
    let current_date = date.toLocaleDateString();
    let heure = date.toLocaleTimeString();

    return (
        <div className="Digi-footer">
            <h2>Date : {current_date} - Heure : {heure}</h2>
        </div>
    )
}