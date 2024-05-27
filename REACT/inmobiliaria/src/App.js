import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import SearchEngine from './components/SearchEngine';
import MainBoard from './components/MainBoard';
import axios from 'axios';
import { PHPURL } from './components/url';
import Atajo from './components/atajos';
import ModalPropiedad from './components/VerPropiedad';
import Filtro from './components/filtro';


const UploadPropertie = (props) => {
  return <Button outline color='success'>Subir anuncio</Button>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slogan: "Buscar propiedad",
      propiedades: [],  //lista para filtrar
      data: [], //lista con todas las propiedades
      buscar: true,
      idPropiedad: "",
      modalPropiedad: false
    };
  }


  openVer = (id) => {
    let modal = !this.state.modalPropiedad;
    this.setState({
      modalPropiedad: modal,
      idPropiedad: id,
    })
  };

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

  /* filtro del SearchEngine */
  filtrar = (localidad, tipoVenta, tipoPropiedad, habitaciones) => {

    let p = this.state.data;
    let flag = false;
    let t = false;

    //tipoVenta != 8 y tipoPropiedad == 8;
    if(tipoVenta != 8 && tipoPropiedad == 8){
      if(localidad && localidad.trim() !== ""){
        let propAux = this.state.data;

        let propiedadesVenta = propAux.propiedades.filter(propiedad => propiedad.localidad.toLowerCase().includes(localidad.toLowerCase()));

        let propdef = propiedadesVenta.filter(pr => pr.id_venta == tipoVenta);

        let propiedades = {
          propiedades:  propdef
        };

        flag = true;
        this.setState({propiedades: propiedades, buscar: t});

      } else if(localidad == ""){
        let propAux = this.state.data;

        let propdef = propAux.propiedades.filter(pr => pr.id_venta == tipoVenta);

        let propiedades = {
          propiedades:  propdef
        };

        flag = true;
        this.setState({propiedades: propiedades, buscar: t});
      }
    }

    //tipoVenta == 8 y tipoPropiedad != 8;
    if(tipoVenta == 8 && tipoPropiedad != 8){
      if(localidad && localidad.trim() !== ""){
        let propAux = this.state.data;

        let propiedadesVenta = propAux.propiedades.filter(propiedad => propiedad.localidad.toLowerCase().includes(localidad.toLowerCase()));

        let propdef = propiedadesVenta.filter(pr => pr.id_viviendas == tipoPropiedad);

        let propiedades = {
          propiedades:  propdef
        };

        flag = true;
        this.setState({propiedades: propiedades, buscar: t});

      } else if(localidad == ""){
        let propAux = this.state.data;

        let propdef = propAux.propiedades.filter(pr => pr.id_viviendas == tipoPropiedad);

        let propiedades = {
          propiedades:  propdef
        };

        flag = true;
        this.setState({propiedades: propiedades, buscar: t});
      }
    }

    //tipoVenta != 8 y tipoPropiedad != 8;
    if(tipoVenta != 8 && tipoPropiedad != 8){
      if(localidad && localidad.trim() !== ""){
        let propAux = this.state.data;

        let propiedadesVenta = propAux.propiedades.filter(propiedad => propiedad.localidad.toLowerCase().includes(localidad.toLowerCase()));

        let propdef = propiedadesVenta.filter(pr => pr.id_viviendas == tipoPropiedad && pr.id_venta == tipoVenta);

        let propiedades = {
          propiedades:  propdef
        };

        flag = true;
        this.setState({propiedades: propiedades, buscar: t});

      } else if(localidad == ""){
        let propAux = this.state.data;

        let propdef = propAux.propiedades.filter(pr => pr.id_viviendas == tipoPropiedad && pr.id_venta == tipoVenta);

        let propiedades = {
          propiedades:  propdef
        };

        flag = true;
        this.setState({propiedades: propiedades, buscar: t});
      }
    }

    //tipoVenta == 8 y tipoPropiedad == 8;
    if(localidad && localidad.trim() !== "" && tipoVenta == 8 && tipoPropiedad == 8){
        let propAux = this.state.data;

        let propdef = propAux.propiedades.filter(propiedad => propiedad.localidad.toLowerCase().includes(localidad.toLowerCase()));

        let propiedades = {
          propiedades:  propdef
        };

        flag = true;
        this.setState({propiedades: propiedades, buscar: t});

      }

    /* si no hay flag reseteamos las propiedades */
    if (!flag) {
      this.setState({propiedades: p,});
    }
  }

  /* filtro de atajos */
  filtro = (valor) => {
    let data = this.state.data; /* lista completa de propiedades */

    // Viviendas
    if(valor == 1){
      let propdef = data.propiedades.filter(pr => pr.id_tipo == valor);
      let propiedades = {
        propiedades:  propdef
      };
      this.setState({propiedades: propiedades})
    }

    // Garajes
    if(valor == 2){
      let propdef = data.propiedades.filter(pr => pr.id_tipo == valor);
      let propiedades = {
        propiedades:  propdef
      };
      this.setState({propiedades: propiedades})
    }

    // Trasteros
    if(valor == 3){
      let propdef = data.propiedades.filter(pr => pr.id_tipo == valor);
      let propiedades = {
        propiedades:  propdef
      };
      this.setState({propiedades: propiedades})
    }

    // Terrenos
    if(valor == 4){
      let propdef = data.propiedades.filter(pr => pr.id_tipo == valor);
      let propiedades = {
        propiedades:  propdef
      };
      this.setState({propiedades: propiedades})
    }

    // Terrenos
    if(valor == 5){
      let propdef = data.propiedades.filter(pr => pr.piscina != "no");
      let propiedades = {
        propiedades:  propdef
      };
      this.setState({propiedades: propiedades})
    }

    // Terrenos
    if(valor == 6){
      let propdef = data.propiedades.filter(pr => pr.estado == "Segunda mano");
      let propiedades = {
        propiedades:  propdef
      };
      this.setState({propiedades: propiedades})
    }

    console.log("value button: " + valor);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Inmobiliaria<img src={logo} className="App-logo" alt="logo" /></h1>
          <UploadPropertie />
        </header>
        <Atajo
          data={this.state.data} 
          filtro = {this.filtro}
        />
        <SearchEngine
          slogan={this.state.slogan}
          data={this.state.data}
          propiedades={this.state.propiedades}
          clicar = {this.handleSearch}
         />
        {!this.state.buscar ? <Filtro /> : null}
        <MainBoard
          propiedades={this.state.propiedades}
          openVer = {this.openVer}
        />
        <ModalPropiedad 
          isOpen={this.state.modalPropiedad}
          openVer = {this.openVer}
          idPropiedad = {this.state.idPropiedad}
          data = {this.state.data}
        />
      </div>
    );
  }

}

export default App;
