/**
* Bensikhaled Madani
* Version 1.0
*/

import './css/App.css';
import AfficheNomPrenom from './components/afficheNomPrenom.jsx';
import AfficheDateHeure from './components/afficheDateHeure.jsx';
import Contenu from './components/contenu.jsx';

import React, { Fragment } from 'react'

import TableauListeDePersonnes, { Ajouter, Modifier} from './components/tableauListeDePersonnes';

import { BrowserRouter as Router, Route, Link, Routes, useParams, useNavigate, useLocation } from "react-router-dom";

/*
function App() {
  return (
    <div className="App">
      <main>
        <AfficheNomPrenom />
        <Contenu />
        <AfficheDateHeure />
      </main>
      
    </div>
  );
}
*/

function App() {
  return (
    <Router>

      <AfficheNomPrenom />

      <main className='Digi-main'>
        <Routes>
          <Route path="/" exact element={<TableauListeDePersonnes />} ></Route>
          <Route path="/ajouter/:id" exact element={<Ajouter />} ></Route>
          <Route path="/modifier/:id" exact element={<Modifier />} ></Route>
        </Routes>
      </main>



      <br />
      <AfficheDateHeure />

    </Router>
  )
}

export default App;
