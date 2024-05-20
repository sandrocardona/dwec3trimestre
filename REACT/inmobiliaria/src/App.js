import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { PHPDATA } from './components/url';

const UploadPropertie = (props) => {
  return <Button outline>Subir anuncio</Button>
}

const SearchEngine = (props) => {
  return <>
    <div className='search-engine'>
      <h2>{props.slogan}</h2>
      <form>
        {/* Aquí irá bucle para traer tipo_venta */}
        <select>
          <option>comprar</option>
          <option>alquilar</option>
          <option>compartir</option>
        </select>
        {/* Aquí irá bucle para traer tipo_propiedad */}
        <select>
          <option>piso</option>
          <option>casa</option>
          <option>chalet</option>
        </select>
        <input type='text' placeholder='Buscar localidad'></input>
        <Button>Buscar</Button>
      </form>
    </div>
  </>
}

const MainBoard = (props) => {
  return <>
    <div className='MainBoard'>
    </div>
  </>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slogan: "Buscar propiedad",
      data: PHPDATA,
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Inmobiliaria<img src={logo} className="App-logo" alt="logo" /></h1>
          <UploadPropertie />
        </header>
        <SearchEngine slogan={this.state.slogan} />
        <MainBoard data={this.state.data}/>
      </div>
    );
  }

}

export default App;
