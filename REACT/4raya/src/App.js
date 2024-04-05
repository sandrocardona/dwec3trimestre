import React , { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';

const MapaBotones = (props) => {
  let tablero = [];
/*   console.log(props.tablero); */
  for(let i = 0; i < props.tablero.length; i++){
    let fila = [];
    for (let j = 0; j < props.tablero[0].length; j++) {
      let colorBoton = '';
      console.log(props.tablero[i][j])
      if (props.tablero[i][j]==="x"){
        fila.push(<Button onClick={() => props.click(i, j)} key={`${i}${j}`} outline />);
      }
      else if(props.tablero[i][j]==="1"){
        colorBoton = props.listaColores[0];
        fila.push(<Button color={colorBoton} onClick={() => props.click(i, j)} key={`${i}${j}`} />);
      }

      else if(props.tablero[i][j]==="0"){
        colorBoton = props.listaColores[1];
        fila.push(<Button color={colorBoton} onClick={() => props.click(i, j)} key={`${i}${j}`} />);
      }

    }
/*     console.log(fila); */
    tablero.push(<div key={i}>{fila}</div>);
  }

  return tablero;
}

const BotonTurno = (props) => {
  return(<Button className='btnTurno' color={props.color}>{"Turno de "}{props.players}</Button>)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
//      listaBotones: Array(9).fill(Array(9).fill("x")),
      listaBotones: JSON.parse(JSON.stringify(Array(9).fill(Array(9).fill("x")))),
      longitud:9,
      listaColores: ["primary","danger"],
      // tendrás que añadir más atributos al state como el turno...
      turno: 1,
      players: "azul"
    }
    
  }
  componentWillMount(){
    this.state.listaBotones[5][5]="1";
    this.state.listaBotones[4][4]="0";
  }

  clickar(i, j){
    /* para la primera fila */
    if(i === 0){
      console.log(i + " " + j);
      /* cambiar turno y color del btnTurno */
      if(this.state.turno === 1){
        this.setState({players: "rojo"})
        this.setState({turno: 0})
      } else {
        this.setState({players: "azul"})
        this.setState({turno: 1})
      }

    } else {
      console.log(i + " " + j);
    }

  }

  montador() {
  // Utilízalo si necesitas hacer algo antes de renderizar
  }

  render() {

    const colorBotonTurno = this.state.turno === 1 ? this.state.listaColores[0] : this.state.listaColores[1];

    return (
    <div className="App">
      <h1 id="titulo">4 en rayas</h1>
      <MapaBotones tablero={this.state.listaBotones} longitud={this.state.longitud} click={(i, j) => this.clickar(i, j)}></MapaBotones>
      <BotonTurno color={colorBotonTurno} players={this.state.players} ></BotonTurno>
    </div>
    );
  }
}

export default App;