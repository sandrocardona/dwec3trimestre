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
      respuestas: [],
      completado: false,
    }

    this.puntuacion = this.puntuacion.bind(this);
    this.clickar = this.clickar.bind(this);
  }

  reiniciar(){
    let completadoAux = false;
    let respuestasAux = [];
    let puntuacionAux = 0;
    this.setState({completado: completadoAux, respuestas: respuestasAux, puntuacion: puntuacionAux})
  }

  puntuacion(puntos, index){
    // Variables
    let respuestasAux = this.state.respuestas;
    let total = this.state.puntuacion;

    // Incluir respuesta
    if(!respuestasAux.includes(index)){
      respuestasAux.push(index);
      total+=puntos;
    }

    console.log("Puntuacion total: " + total)
    console.log("respuestas: " + respuestasAux)

    if(this.state.respuestas.length > 6)
      this.setState({puntuacion: total, respuestas: respuestasAux, completado: true})
    else
      this.setState({puntuacion: total, respuestas: respuestasAux})
  }

  clickar(puntos, index){
    console.log("Puntos " + puntos);
    this.puntuacion(puntos, index);
    console.log(index);
  }

  render() {
    return this.state.completado ? (
      <div className='App'>
        <p>respuesta</p>
        <Button onClick={() => this.reiniciar()} className='btnReiniciar'>Reiniciar</Button>
      </div>
    ) : (
      <div className="App">
        <h1 id="titulo">{this.state.titulo}</h1>
        <Questionario clickar={this.clickar}/>
      </div>
    )
  }
}

export default App;
