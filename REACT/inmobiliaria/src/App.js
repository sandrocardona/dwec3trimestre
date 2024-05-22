import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import SearchEngine from './components/SearchEngine';
import MainBoard from './components/MainBoard';
import axios from 'axios';
import { PHPURL } from './components/url';


const UploadPropertie = (props) => {
  return <Button outline>Subir anuncio</Button>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slogan: "Buscar propiedad",
      propiedades: [],
      data: [],
    };
  }

  componentDidMount(){
    const fetchData = async () => {
      try {
        const response = await axios.get(
          PHPURL
        );
        this.setState({
          propiedades:response.data,
          data: response.data,
        });
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }

  handleSearch = (inputValue, tipoVenta, tipoPropiedad) => {
    this.filtrar(inputValue, tipoVenta, tipoPropiedad);
  }

  filtrar = (localidad, tipoVenta, tipoPropiedad) => {
    let p = this.state.propiedades;
    let flag = false;

    // En caso de que exsista localidad
    if (localidad && localidad.trim() !== "") {
      const propiedadesFiltradas = p.propiedades.filter(propiedad => propiedad.localidad.toLowerCase().includes(localidad.toLowerCase()));

      //nuevo objeto propiedades
      let propiedades = {
        propiedades:  propiedadesFiltradas
      };

      //tipoVenta == 8 y tipoPropiedad == 8;
      console.log("Tipo veta; " + tipoVenta);
      console.log("Tipo propidead: " + tipoPropiedad);

      //tipoVenta == otro valor y tipoPropiedad == otro valor

      //tipoVenta == 8 y tipoPropiedad == otro valor

      //tipoVenta == otro valor y tipoPropiedad == 8.

      if (propiedadesFiltradas.length > 0) {
        flag = true;
        this.setState({ propiedades: propiedades });
      }
    
    }
    //En caso de que no exista localidad 
    else if(!localidad){
      
    }

    if (!flag) {
      this.setState({ propiedades: p });
    }

    this.setState({ localidad: localidad });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Inmobiliaria<img src={logo} className="App-logo" alt="logo" /></h1>
          <UploadPropertie />
        </header>
        <SearchEngine
         slogan={this.state.slogan}
         data={this.state.data}
         propiedades={this.state.propiedades}
         clicar = {this.handleSearch}
         />

         {/* 
          aquí dependiendo si se ha clicado buscar o no:
          si no: atajos.js
          si sí: filtros.js
         */}
        <MainBoard propiedades={this.state.propiedades}/>
      </div>
    );
  }

}

export default App;
