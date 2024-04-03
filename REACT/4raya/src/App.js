import React , { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapaBotones = (props) => {
  let tablero = [];
/*   console.log(props.tablero); */
  for(let i = 0; i < props.longitud; i++){
    let fila = [];
    for (let j = 0; j < props.longitud; j++) {
      fila.push(<Button key={`${i}${j}`} outline />);
    }
/*     console.log(fila); */
    tablero.push(<div key={i}>{fila}</div>);
  }


  return tablero;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    listaBotones: Array(9).fill("x"),
    longitud:9,
    
    listaColores: ["primary","danger"],
    // tendrás que añadir más atributos al state como el turno...
    turno: 1,

    }
  }

  componentWillMount() {
  // Utilízalo si necesitas hacer algo antes de renderizar
  }

  render() {
    return (
    <div className="App">
      <h1>4 en rayas</h1>
      <MapaBotones tablero={this.state.listaBotones} longitud = {this.state.longitud} ></MapaBotones>
    </div>
    );
  }
}

export default App;