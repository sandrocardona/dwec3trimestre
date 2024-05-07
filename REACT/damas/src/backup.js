/* 
* DAMAS
* Versión Alpha
* Falta implementación de la función que come la ficha
* Falta la implementación de coronación a Reina
* Falta la implementación de los movimientos de la Reina
*
* 07/Mayo/2024
* Sandro Cardona
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

      //key único para cada botón
      let clave = [[fila], [columna]];

      if (props.tablero[fila][columna] == 1)
        tableroAuxCol.push(<Button className='btnDama btnDamaclick' onClick={() => props.handleClick(clave)} key={clave} color="primary" />)
      else if (props.tablero[fila][columna] == 2)
        tableroAuxCol.push(<Button className='btnDama btnDamaclick' onClick={() => props.handleClick(clave)} key={clave} color="danger" />)
      else
        tableroAuxCol.push(<Button className='btnDama btnGris' onClick={() => props.movimiento(clave)} key={clave} color="secondary" />)
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

  //Activar movimiento
  ActivarMovimiento() {
    let fichaSeleccionadaAux = this.state.fichaSeleccionada;
    fichaSeleccionadaAux = true;

    this.setState({
      fichaSeleccionada: fichaSeleccionadaAux,
    });
  }

  //Ficha Roja
  moverArriba() {
  }

  //Ficha azul
  moverAbajo() {
  }

  movimiento(e) {
    let fichaSeleccionadaAux = false;
    let turno = this.state.jugador;
    let tableroAux = this.state.tablero;
    let coordenadaAux = [];
    let fichaMovida = this.state.coordenada;

    if (this.state.fichaSeleccionada) {
      console.log("Destino e[0] : " + e[0]);
      console.log("FIcha movida fila: " + fichaMovida.fila)
      /*       console.log(tableroAux) */

      //Movimiento de ficha azul
      if (turno == "azul") {
        if (
          (parseInt(e[0]) - 1) == (fichaMovida.fila) && (parseInt(e[1]) + 1) == fichaMovida.columna ||
          (parseInt(e[0]) - 1) == fichaMovida.fila && (parseInt(e[1]) - 1) == fichaMovida.columna
        ) {
          //casillas impares
          if (e[0] % 2 !== 0 && e[1] % 2 !== 0) {
            tableroAux[e[0]][e[1]] = 1;
            tableroAux[fichaMovida.fila][fichaMovida.columna] = 0;
            turno = "rojo";
          }
          //Casillas pares
          else if (e[0] % 2 === 0 && e[1] % 2 === 0) {
            tableroAux[e[0]][e[1]] = 1;
            tableroAux[fichaMovida.fila][fichaMovida.columna] = 0;
            turno = "rojo";
          }
        } else {
          this.cancelarMovimiento();
        }
      }
      //Movimiento de ficha roja
      else if (turno == "rojo") {
        if (
          (parseInt(e[0]) + 1) == (fichaMovida.fila) && (parseInt(e[1]) - 1) == fichaMovida.columna ||
          (parseInt(e[0]) + 1) == fichaMovida.fila && (parseInt(e[1]) + 1) == fichaMovida.columna
        ) {
          if (e[0] % 2 !== 0 && e[1] % 2 !== 0) {
            tableroAux[e[0]][e[1]] = 2;
            tableroAux[fichaMovida.fila][fichaMovida.columna] = 0;
            turno = "azul";
          }
          else if (e[0] % 2 === 0 && e[1] % 2 === 0) {
            tableroAux[e[0]][e[1]] = 2;
            tableroAux[fichaMovida.fila][fichaMovida.columna] = 0;
            turno = "azul";
          }
        } else {
          this.cancelarMovimiento();
        }
      }

      this.setState({
        fichaSeleccionada: fichaSeleccionadaAux,
        jugador: turno,
        tablero: tableroAux,
        //volvemos a dejar las coordenadas vacías
        coordenada: coordenadaAux
      })
    }

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
    let coordenadaAux = this.state.coordenada;
    let jugadorAux = this.state.jugador;

    console.log("Boton clicado: " + copiaTablero[e[0][e[1]]]);

    //Si las coordenadas están vacías, entonces añadimos las coordenadas del botón clicado
    if (coordenadaAux.length < 1)
      coordenadaAux = { fila: e[0], columna: e[1] };

    console.log("coordenadaAux: " + coordenadaAux.fila + " - " + coordenadaAux.columna);

    //Si el turno corresponde a azul y clicamos en ficha roja, cancelamos movimiento
    if (jugadorAux = "azul" && copiaTablero[e[0]][e[1]] == 2)
      this.cancelarMovimiento();

    //Si el turno corresponde a rojo y clicamos en ficha azul, cancelamos movimiento
    if (jugadorAux = "rojo" && copiaTablero[e[0]][e[1]] == 1)
      this.cancelarMovimiento();

    console.log("Posicion ficha: " + e[0] + " " + e[1]);
    /*       copiaTablero[e[0]][e[1]]=0 */
    if (this.state.jugador == "azul" && copiaTablero[e[0]][e[1]] == 1) {
      this.ActivarMovimiento();
    } else if (this.state.jugador == "rojo" && copiaTablero[e[0]][e[1]] == 2) {
      this.ActivarMovimiento();
    }

    this.setState({
      tablero: copiaTablero,
      coordenada: coordenadaAux
    })
  }

  //Montar el tablero al iniciar la aplicación

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
    let coordenadaAux = [];
    let fichaSeleccionadaAux = false;

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
      jugador: turnoAux,
      coordenada: coordenadaAux,
      fichaSeleccionada: fichaSeleccionadaAux
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
