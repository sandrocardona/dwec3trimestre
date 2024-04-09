import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';

const MapaBotones = (props) => {
  let tablero = [];
  /*   console.log(props.tablero); */
  for (let i = 0; i < props.tablero.length; i++) {
    let fila = [];
    for (let j = 0; j < props.tablero[0].length; j++) {
/*       console.log(props.tablero[i][j]) */
      if (props.tablero[i][j] === "x") {
        fila.push(<Button onClick={() => props.click(i, j)} key={`${i}${j}`} outline />);
      }
      else if (props.tablero[i][j] === "1") {
        fila.push(<Button color={"primary"} onClick={() => props.click(i, j)} key={`${i}${j}`} />);
      }

      else if (props.tablero[i][j] === "0") {
        fila.push(<Button color={"danger"} onClick={() => props.click(i, j)} key={`${i}${j}`} />);
      }

    }
    /*     console.log(fila); */
    tablero.push(<div key={i}>{fila}</div>);
  }

  return tablero;
}

const BotonTurno = (props) => {
  return (<Button className='btnTurno' color={props.color}>{"Turno de "}{props.players}</Button>)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //      listaBotones: Array(9).fill(Array(9).fill("x")),
      listaBotones: JSON.parse(JSON.stringify(Array(9).fill(Array(9).fill("x")))),
      longitud: 9,
      listaColores: ["primary", "danger"],
      // tendrás que añadir más atributos al state como el turno...
      ganador: false,
      turno: 1,
      players: "azul"
    }

  }

 /*  componentWillMount() {

  } */

  buscarCasilla(col){
    for (let i=8; i>=0; i--){
      if (this.state.listaBotones[i][col]=="x") return i;
    }
    return -1;
  }

  winner(){
    let list = this.state.listaBotones;
    /* horizontal */
    for(let i = 0; i < 9; i++){
      for (let j = 0; j < 9 - 3; j++) {
        if(
          list[i][j] != "x" &&
          list[i][j] == list[i][j + 1] &&
          list[i][j] == list[i][j + 2] &&
          list[i][j] == list[i][j + 3]
        ){
          this.setState({ganador: true})
          return list[i][j]
        }
      }
    }
    /* vertical */
    for(let i = 0; i < 9 - 3; i++){
      for (let j = 0; j < 9; j++) {
        if(
          list[i][j] != "x" &&
          list[i][j] == list[i + 1][j] &&
          list[i][j] == list[i + 2][j] &&
          list[i][j] == list[i + 3][j]
        ){
          this.setState({ganador: true})
          return list[i][j]
        }
      }
    }
  }

  clickar(i, j) {
    /* para la primera fila */
    if(this.state.ganador) return;

    let l = this.state.listaBotones
    if (i !== 0) return;
    if (this.buscarCasilla(j)==-1) return;

/*     console.log(i + " " + j); */
    /* cambiar turno y color del btnTurno */
    if (this.state.turno === 1 && this.state.listaBotones[i][j] == "x") {
      l[this.buscarCasilla(j)][j] = "1";
      this.setState({listaBotones:l, players:"rojo",turno:0})
    }
    else if (this.state.turno === 0 && this.state.listaBotones[i][j] == "x") {
      l[this.buscarCasilla(j)][j] = "0";
      this.setState({listaBotones:l,players:"azul",turno:1})
    }
    this.winner();
  }

  limpiarTablero(){
    let v = this.state.listaBotones;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        v[i][j]="x";
      }
    }
    this.setState({listaBotones:v, players:"azul", turno:1, ganador: false})
  }

  montador() {
    // Utilízalo si necesitas hacer algo antes de renderizar
  }

  render() {

    const colorBotonTurno = this.state.turno === 1 ? this.state.listaColores[0] : this.state.listaColores[1];

    return (
      <div className="App">
        <h1 id="titulo">4 en rayas</h1>
        <MapaBotones tablero={this.state.listaBotones} longitud={this.state.longitud} click={(i, j) => this.clickar(i, j)}></MapaBotones><br></br>
        <BotonTurno color={colorBotonTurno} players={this.state.players} ></BotonTurno><br></br>
        <Button className='btnLimpiar' onClick={() => this.limpiarTablero()} outline>{"Limpiar tablero"}</Button>
      </div>
    );
  }
}

export default App;