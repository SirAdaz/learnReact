// Libraries
import './App.css';
import React, { Component } from 'react';

// Components
import Eleve from '../Eleves/Eleve';

class App extends Component {
  state = {
    eleves: [
      {
        nom: "Eva Dupont",
        moyenne: 15,
        citation: "Allez toujours plus loin !"
      },
      {
        nom: "Elon Musk",
        moyenne: 20,
        citation: "Je suis le meilleur !"
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Bienvenue dans la classe Terre</h1>
        <Eleve 
          nom={this.state.eleves[0].nom}
          moyenne={this.state.eleves[0].moyenne}
          citation={this.state.eleves[0].citation}>
        </Eleve>
        <Eleve 
          nom={this.state.eleves[1].nom}
          moyenne={this.state.eleves[1].moyenne}
          citation={this.state.eleves[1].citation}>
        </Eleve>
      </div>
    );
  }
}

export default App;
