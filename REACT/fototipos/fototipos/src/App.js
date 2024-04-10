import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Questionario from './componentes/Questionario';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Fototipos",
      puntuacion: 0,
    }

    this.puntuacion = this.puntuacion.bind(this);
    this.clickar = this.clickar.bind(this);
  }

  puntuacion(puntos){
    let total = this.state.puntuacion + puntos;
    console.log("Puntuacion total: " + total)
    this.setState({puntuacion: total})
  }

  clickar(puntos){
    console.log("Puntos " + puntos);
    this.puntuacion(puntos);
  }

  render() {
    return (
      <div className="App">
        <h1 id="titulo">{this.state.titulo}</h1>
        <Questionario clickar={this.clickar}/>
      </div>
    );
  }
}

export default App;
