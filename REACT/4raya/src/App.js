import React , { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapaBotones = (props)=>{

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    listaBotones: /*aquí almaceno los colores de los botones*/,
    
    listaColores: ["primary","danger"],
    // tendrás que añadir más atributos al state como el turno...
    }
  }

  componentWillMount() {
  // Utilízalo si necesitas hacer algo antes de renderizar
  }

  render() {
    return (
    <div className="App">

    </div>
    );
  }
}

export default App;