// Libraries
import React,{ Component } from "react";

// Styles
import './Eleve.css';

class Eleve extends Component {
  render() {
    return (
      <div className="eleve">
        <h1>{this.props.nom}</h1>
        <p>Moyenne scolaire : <b>{this.props.moyenne}/20</b></p>
        <p>Age : {Math.floor(Math.random() * 100)}</p>
        <i>citation : {this.props.citation}</i>
      </div>
    );
  }
}

export default Eleve;