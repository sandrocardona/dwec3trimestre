import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Botonera(props) {
  let tableroBase = props.tablero.slice()
  let tableroAux = [];
  for (let fila = 0; fila < tableroBase.length; fila++) {
    let tableroAuxCol = [];
    for (let columna = 0; columna < tableroBase[fila].length; columna++) {
      let indiceAux = fila + columna + 2;
      let clave = [[fila],[columna]];
      if(fila < 3 || fila > 5){
        if(indiceAux %2 === 0)
          if(fila < 3)
            tableroAuxCol.push(<Button className='btnDama' onClick={() => props.handleClick(clave)} key={clave} color="primary"></Button>)
          else
            tableroAuxCol.push(<Button className='btnDama' onClick={() => props.handleClick(clave)} key={clave} color="danger"></Button>)
        else
          tableroAuxCol.push(<Button className='btnDama btnGris' key={clave} color="secondary" disabled></Button>)
      } else {
        tableroAuxCol.push(<Button className='btnDama btnGris' key={clave} color="secondary" disabled></Button>)
      }
    }
    
    tableroAuxCol.push(<br key={"br" + fila}></br>)
    tableroAux.push(tableroAuxCol)
  }


  return tableroAux;
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      titulo: "Damas",
      tablero:[
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
              ],
      jugador: 1,
              
    }
  }

  click(e){
    console.log("clickado: " + e)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>{this.state.titulo}</h1>
        <div className="tablero">
          <Botonera handleClick={(key) => this.click(key)} tablero={this.state.tablero} />
        </div>
      </div>
    );
  }
}

export default App;
