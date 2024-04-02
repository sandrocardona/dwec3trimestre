import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import { Button, Spinner } from 'reactstrap';

function Boton(props){
  return(
    <Button color={props.color} onClick={() => props.cambiar()} >{props.color}</Button>
  )
}

class App extends Component {
  constructor(props){
  super(props);
    this.state = {
      color: "secondary"
    }
  }
  
  secondary(){
    this.setState({color:"secondary"})
  }

  primary(){
    this.setState({color:"primary"})
  }

  danger(){
    this.setState({color:"danger"})
  }

    render(){
      return(
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Tres Botones</h1>
          <p>Pulsa en un botón para cambiar el color del Spinn</p>
          <Boton color="secondary" cambiar={() => this.secondary()} />
          {' '}
          <Boton color="primary" cambiar={() => this.primary()} />
          {' '}
          <Boton color="danger" cambiar={() => this.danger()} />
          {' '}
          <p id='spin'>
            <Spinner color={this.state.color} type='border' />
          </p>
        </div>
      )
    }
};

export default App;
