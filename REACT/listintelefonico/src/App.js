import React, { Component, useState } from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody,
ModalFooter, FormGroup, Label, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import logo from './logo.svg';
import './App.css';
import VentanaModal from './componentes/VentanaModal';

const Mostrar = (props) => {
    return(
      <ul>
      {props.listaUsuarios.map((x, index) => (
        <li className='listado' key={index}>
          <p className='plistin'>
            {index+1 + ". " + x.nombre + " - " + x.telefono}
            <Button color='primary' className='btnlistin' onClick={() => props.borrar(index)}>Borrar {" " + (index+1)}</Button>
          </p>
        </li>
    ))}
  </ul>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaUsuarios: [],
      isOpen: false,
      error: ""
    };
  }

  borrar(index){
    //creamos copia de la lista de usuarios
    let arr = this.state.listaUsuarios;

    //retiramos del array el objeto en la posición del index
    arr.splice(index, 1);

    //actualizamos el estado
    this.setState({listaUsuarios: arr})
  }

  setIsOpen(d) {
    if (d == undefined) return;
    this.setState({ isOpen: d })
  }

  toggleModal(){
      this.setIsOpen(!this.state.isOpen);
      this.setState({error: ""})
  }

  checkPhone(tlfn){
    //.some() busca si al menos un elemento cumple con la condicion
    const tlfnRepetido = this.state.listaUsuarios.some(x => 
      x.telefono === tlfn
    )

    //si se encuentra un elemento repetido devuelve true sino false
    if(tlfnRepetido){
      return true;
    } else {
      return false;
    }
  }

  annadir(nombre, telefono){

    //comprobar si el telefono está repetido (true o false)
    const tlfnRepetido = this.checkPhone(telefono);

    if(nombre !== "" && telefono !== ""){
      if(tlfnRepetido)
        this.setState({error: "Telefono repetido"})
      else{
        // Cierra la ventana y error=""
        this.toggleModal();

        // Variables
        let listaUsuariosAux = this.state.listaUsuarios;
        let obj = {nombre: nombre, telefono: telefono};
        
        // pushear la variable
        listaUsuariosAux.push(obj);
        
        // actualizar el estado
        this.setState({listaUsuarios: listaUsuariosAux});
      }
    } else {
        this.setState({error: "Introduce datos"})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Listin teléfonico</h1>
        <Mostrar listaUsuarios={this.state.listaUsuarios} borrar={(index) => this.borrar(index)} />
        <Button onClick={() => { this.toggleModal() }} color="info">Add</Button>
        <VentanaModal
          mostrar={this.state.isOpen}
          aceptar={"Añadir"}
          toggle={() => this.toggleModal()}
          annadir={(nombre, telefono) => this.annadir(nombre, telefono)}
          titulo={"Alta en el listín"}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
