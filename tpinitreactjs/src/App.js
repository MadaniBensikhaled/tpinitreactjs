/**
* Bensikhaled Madani
* Version 1.0
*/

import './css/App.css';
import AfficheNomPrenom from './components/afficheNomPrenom.jsx';
import AfficheDateHeure from './components/afficheDateHeure.jsx';
import Contenu from './components/contenu.jsx';

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

export default App;
