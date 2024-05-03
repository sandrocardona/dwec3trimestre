//SIGUIENTE PASO
/* 
  Arreglar las coordenadas
    - solo poder pulsar en una ficha
    - Cuando ya existan coordenadas, no poder hacer click en fichas del otro color
  arreglar movimientoArriba y movimientoAbajo
*/


import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Botonera(props) {
  let tableroBase = props.tablero.slice()
  let tableroAux = [];
  for (let fila = 0; fila < tableroBase.length; fila++) {
    let tableroAuxCol = [];
    for (let columna = 0; columna < tableroBase[fila].length; columna++) {
      let indiceAux = fila + columna + 2;
      let clave = [[fila], [columna]];

      if (props.tablero[fila][columna] == 1)
        tableroAuxCol.push(<Button className='btnDama' onClick={() => props.handleClick(clave)} key={clave} color="primary">1</Button>)
      else if (props.tablero[fila][columna] == 2)
        tableroAuxCol.push(<Button className='btnDama' onClick={() => props.handleClick(clave)} key={clave} color="danger">2</Button>)
      else
        tableroAuxCol.push(<Button className='btnDama btnGris' onClick={() => props.movimiento(clave)} key={clave} color="secondary">0</Button>)
    }

    tableroAuxCol.push(<br key={"br" + fila}></br>)
    tableroAux.push(tableroAuxCol)
  }


  return tableroAux;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Damas",
      tablero: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      jugador: "azul",
      fichaSeleccionada: false,
      coordenada: []
    }
  }

  //Ficha Roja
  moverArriba() {

    let fichaSeleccionadaAux = this.state.fichaSeleccionada;
    fichaSeleccionadaAux = true;

    console.log("ficha seleccionada: " + fichaSeleccionadaAux)

    this.setState({
      fichaSeleccionada: fichaSeleccionadaAux,
    });
  }

  //Ficha azul
  moverAbajo() {

    let fichaSeleccionadaAux = this.state.fichaSeleccionada;
    fichaSeleccionadaAux = true;

    console.log("ficha seleccionada: " + fichaSeleccionadaAux)

    this.setState({
      fichaSeleccionada: fichaSeleccionadaAux,
    });
  }

  movimiento(e) {
    let fichaSeleccionadaAux = false;
    let turno = this.state.jugador;
    let tableroAux = this.state.tablero;
    let indiceAux = e[0] + e[1] + 2;
    let fichaMovida = this.state.coordenada;

    if (this.state.fichaSeleccionada) {
      console.log("Destino : " + e)
      console.log(tableroAux)
      //Movimiento de ficha azul
      if (turno == "azul") {
        if(e[0] % 2 !== 0 && e[1] % 2 !== 0){
          tableroAux[e[0]][e[1]] = 1;
          tableroAux[fichaMovida.fila][fichaMovida.columna] = 0;
          turno = "rojo";
        }
        else if(e[0] % 2 === 0 && e[1] % 2 === 0){
          tableroAux[e[0]][e[1]] = 1;
          tableroAux[fichaMovida.fila][fichaMovida.columna] = 0;
          turno = "rojo";
        }
      }
      //Movimiento de ficha roja
      else if (turno == "rojo") {
        if(e[0] % 2 !== 0 && e[1] % 2 !== 0){
          tableroAux[e[0]][e[1]] = 2;
          tableroAux[fichaMovida.fila][fichaMovida.columna] = 0;
          turno = "azul";
        }
        else if(e[0] % 2 === 0 && e[1] % 2 === 0){
          tableroAux[e[0]][e[1]] = 2;
          tableroAux[fichaMovida.fila][fichaMovida.columna] = 0;
          turno = "azul";
        }
      }
    }

    this.setState({
      fichaSeleccionada: fichaSeleccionadaAux,
      jugador: turno,
      tablero: tableroAux
    })
  }

  cancelarMovimiento() {
    let fichaSeleccionadaAux = false;
    let coordenadaAux = [];
    console.log("cancelar")
    this.setState({
      fichaSeleccionada: fichaSeleccionadaAux,
      coordenada: coordenadaAux
    })
  }

  click(e) {
    let copiaTablero = this.state.tablero.slice();
    let coordenadaAux = {fila: e[0], columna: e[1]};
    console.log("clickado: " + e  + " - " + typeof(e))
    /*     console.log(this.state.tablero) */

    /*       copiaTablero[e[0]][e[1]]=0 */
    if (this.state.jugador == "azul" && copiaTablero[e[0]][e[1]] == 1) {
      this.moverAbajo();
    } else if (this.state.jugador == "rojo" && copiaTablero[e[0]][e[1]] == 2) {
      this.moverArriba();
    }

    this.setState({
      tablero: copiaTablero,
      coordenada: coordenadaAux
    })
  }

  componentWillMount() {
    //realiza copia del tablero
    let plantilla = this.state.tablero.slice();

    for (let i = 0; i < plantilla.length; i++) {
      for (let j = 0; j < plantilla[i].length; j++) {
        let indiceAux = i + j + 2;
        if (i < 3 || i > 5) {
          if (indiceAux % 2 === 0)
            if (i < 3)
              plantilla[i][j] = 1;
            else
              plantilla[i][j] = 2;
          else
            plantilla[i][j] = 0;
        } else {
          plantilla[i][j] = 0;
        }
      }
    }
  }

  reiniciar() {
    let plantilla = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    let turnoAux = "azul";

    for (let i = 0; i < plantilla.length; i++) {
      for (let j = 0; j < plantilla[i].length; j++) {
        let indiceAux = i + j + 2;
        if (i < 3 || i > 5) {
          if (indiceAux % 2 === 0)
            if (i < 3)
              plantilla[i][j] = 1;
            else
              plantilla[i][j] = 2;
          else
            plantilla[i][j] = 0;
        } else {
          plantilla[i][j] = 0;
        }
      }
    }

    this.setState({
      tablero: plantilla,
      jugador: turnoAux
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>{this.state.titulo}</h1>
        <div className="tablero">
          <Botonera handleClick={(key) => this.click(key)} movimiento={(e) => this.movimiento(e)} tablero={this.state.tablero} />
          <div id='divTurno'><h3>{"Turno de " + this.state.jugador}</h3></div>
          <div className='divButton'>
            <Button onClick={() => this.cancelarMovimiento()}>CANCELAR</Button>
            <Button onClick={() => this.reiniciar()}>REINICIAR</Button>
          </div>
          <div id='txtFichaSeleccionada'><p>{this.state.fichaSeleccionada ? "ficha seleccionada" : "Ficha no seleccionada"}</p></div>
        </div>
      </div>
    );
  }
}

export default App;
