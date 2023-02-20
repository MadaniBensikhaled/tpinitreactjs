/**
* Bensikhaled Madani
* Version 1.0
*/

import React, { Component } from 'react'

import TableauListeDePersonnes from './tableauListeDePersonnes'

export default class Contenu extends Component {

    render() {
        return (
            <div className="Digi-main">
                <h3>Contenu de l’application ReactJs</h3>
                <hr/>
                <TableauListeDePersonnes/>
            </div>
        )
    }

}