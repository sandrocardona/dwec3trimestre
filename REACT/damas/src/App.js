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

      if(props.tablero[fila][columna]==1)
        tableroAuxCol.push(<Button className='btnDama' onClick={() => props.handleClick(clave)} key={clave} color="primary"></Button>)
      else if(props.tablero[fila][columna]==2)
        tableroAuxCol.push(<Button className='btnDama' onClick={() => props.handleClick(clave)} key={clave} color="danger"></Button>)
      else
        tableroAuxCol.push(<Button className='btnDama btnGris' key={clave} color="secondary"></Button>)
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
      jugador: "azul",
      fichaSeleccionada: false
    }
  }

  //Ficha Roja
  moverArriba(){
    let fichaSeleccionadaAux = this.state.fichaSeleccionada;
    fichaSeleccionadaAux = !fichaSeleccionadaAux;
    console.log("mover arriba");
    console.log(fichaSeleccionadaAux)

    this.setState({fichaSeleccionada:fichaSeleccionadaAux});
  }

  //Ficha azul
  moverAbajo(){
    let turno = this.state.jugador;
    let nextTurn = "rojo";
    let fichaSeleccionadaAux = this.state.fichaSeleccionada;
    fichaSeleccionadaAux = !fichaSeleccionadaAux;

    console.log("mover abajo");
    console.log("turno de: " + turno);
    console.log(fichaSeleccionadaAux)

    this.setState({
      fichaSeleccionada:fichaSeleccionadaAux,
      jugador:nextTurn
    });
  }

  click(e){
    let copiaTablero = this.state.tablero.slice();

    console.log("clickado: " + e)
    console.log(this.state.tablero)

/*       copiaTablero[e[0]][e[1]]=0 */
      if(this.state.jugador=="azul" && copiaTablero[e[0]][e[1]]==1){
        this.moverAbajo();
      } else if(this.state.jugador=="azul" && copiaTablero[e[0]][e[1]]==2) {
        this.moverArriba();
      }
    
    this.setState({
      tablero:copiaTablero
    })
  }

  componentWillMount(){
    let plantilla = this.state.tablero.slice();
    
    for (let i = 0; i < plantilla.length; i++) {
      for (let j = 0; j < plantilla[i].length; j++) {
        let indiceAux = i + j + 2;
        if(i < 3 || i > 5){
          if(indiceAux %2 === 0)
            if(i < 3)
              plantilla[i][j]=1;
            else
              plantilla[i][j]=2;
          else
              plantilla[i][j]=0;
        } else {
          plantilla[i][j]=0;
        }
      }
  }
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
          <p>{this.state.jugador}</p>
        </div>
      </div>
    );
  }
}

export default App;
