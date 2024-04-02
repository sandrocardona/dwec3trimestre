import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import { Button } from 'reactstrap';

function Boton(props){
  return (
    <Button color={props.color} onClick={() => props.mensaje()} outline>{props.idioma}</Button>
  )
}

class App extends Component {
  constructor(props){
  super(props);
    this.state = {
      saludo: "Pulsa para saludar"
    }
  }

  ingles(){
    this.setState({saludo: "Hi there!"})
  }

  español(){
    this.setState({saludo: "Hola, qué tal"})
  }

  aleman(){
    this.setState({saludo: "Was geht Mann!"})
  }

  andalu(){
    this.setState({saludo: "paza pisha"})
  }
  

    render(){
      return(
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Idiomas</h1>
          <h3>{this.state.saludo}</h3>
          <Boton idioma='Español' mensaje={() => this.español()} color='danger'/> {' '}
          <Boton idioma='Inglés' mensaje={() => this.ingles()} color='primary'/> {' '}
          <Boton idioma='Alemán' mensaje={() => this.aleman()} color='warning'/> {' '}
          <Boton idioma='Andalúz' mensaje={() => this.andalu()} color='success'/> {' '}
        </div>
      )
    }
};

export default App;
