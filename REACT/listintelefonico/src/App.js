import React, { Component, useState } from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody,
ModalFooter, FormGroup, Label, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import logo from './logo.svg';
import './App.css';
import VentanaModal from './componentes/VentanaModal';


const Mostrar = (props) => {
  return (
    <ul>
      <li>
          {" NOMBRE - TELEFONO  "}
          <Button>Borrar</Button>
        </li>
    </ul>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // INSERTE AQUÍ EL ESTADO NECESARIO. AQUÍ SE GUARDARÁ TODA LA INFORMACIÓN
      listaUsuarios: [],
      isOpen: false,

    };
  }



  setIsOpen(d) {
    if (d == undefined) return;
    this.setState({ isOpen: d })
  }

  toggleModal() { this.setIsOpen(!this.state.isOpen); }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Listin teléfonico</h1>
        <Mostrar  />
        <Button onClick={() => { this.toggleModal() }} color="info">Add</Button>
        <VentanaModal
          mostrar={this.state.isOpen}
          aceptar={"Añadir"}
          toggle={() => this.toggleModal()}
          titulo={"Alta en el listín"}
        />
      </div>
    );
  }
}

export default App;
