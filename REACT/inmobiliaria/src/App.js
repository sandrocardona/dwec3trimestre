import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button, Modal } from 'reactstrap';
import SearchEngine from './components/SearchEngine';
import MainBoard from './components/MainBoard';
import axios from 'axios';
import { GETDATA } from './components/url';
import { GETCONTACTOS } from './components/url';
import Atajo from './components/atajos';
import ModalPropiedad from './components/VerPropiedad';
import Filtro from './components/filtro';
import ModalContactar from './components/Contactar';
import PanelInfo from './components/panelInfo';
import VerContactos from './components/VerContactos';
import ModalContactos from './components/ModalContactos';


const UploadPropertie = (props) => {
  return <Button outline color='success'>Subir anuncio</Button>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slogan: "Buscar propiedad",
      data: [], //lista con todas las propiedades
      propiedades: [],  //lista para filtrar
      propiedadesAux: [], //lista resultante al Buscar
      //contactos
      contactos: [],
      modalContactos: false,
      //
      buscar: true,
      idPropiedad: null,
      modalPropiedad: false,
      modalContactar:false,
      modalAnuncio: false,
      tipoSales: 1,
      //valores para recoger info del SearchEngine
      inputValue: null,
      tipoVenta: null,
      tipoPropiedad: null,
    };
  }

  openContactos = () => {
    let modal = !this.state.modalContactos;
    this.setState({
      modalContactos: modal
    })
  }

  openVer = (id) => {
    let modal = !this.state.modalPropiedad;
    this.setState({
      modalPropiedad: modal,
      idPropiedad: id,
    })
  };

  contactar = (id) => {
    let modal = !this.state.modalContactar;
    this.setState({
      modalContactar: modal,
      idPropiedad: id
    })
  }

  componentDidMount(){
    const fetchData = async () => {
      try {
        const response = await axios.get(
          GETDATA
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

    const fetchContactos = async () => {
      try {
        const response = await axios.get(
          GETCONTACTOS
        );
        this.setState({
          contactos:response.data,
        });
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchContactos();
  }

  handleSearch = (inputValue, tipoVenta, tipoPropiedad) => {
    this.filtrar(inputValue, tipoVenta, tipoPropiedad);
    this.setState({
      inputValue: inputValue,
      tipoVenta: tipoVenta,
      tipoPropiedad: tipoPropiedad
    })
  }

  /* filtro del SearchEngine */
  filtrar = (localidad, tipoVenta, tipoPropiedad) => {

    let p = this.state.data;
    let flag = false;
    let t = false;
    let tipoVentaAux = tipoVenta;
    let propAux;
    let propdef;

    //tipoVenta != 8 y tipoPropiedad == 8;
    if(tipoVenta != 8 && tipoPropiedad == 8){
      if(localidad && localidad.trim() !== ""){
        propAux = this.state.data;

        let propiedadesVenta = propAux.propiedades.filter(propiedad => propiedad.localidad.toLowerCase().includes(localidad.toLowerCase()));

        propdef = propiedadesVenta.filter(pr => pr.id_venta == tipoVenta);

        flag = true;
      } else if(localidad == ""){
        propAux = this.state.data;

        propdef = propAux.propiedades.filter(pr => pr.id_venta == tipoVenta);

        flag = true;
      }
    }

    //tipoVenta == 8 y tipoPropiedad != 8;
    if(tipoVenta == 8 && tipoPropiedad != 8){
      if(localidad && localidad.trim() !== ""){
        propAux = this.state.data;

        let propiedadesVenta = propAux.propiedades.filter(propiedad => propiedad.localidad.toLowerCase().includes(localidad.toLowerCase()));

        propdef = propiedadesVenta.filter(pr => pr.id_viviendas == tipoPropiedad);

        flag = true;

      } else if(localidad == ""){
        propAux = this.state.data;

        propdef = propAux.propiedades.filter(pr => pr.id_viviendas == tipoPropiedad);

        flag = true;
      }
    }

    //tipoVenta != 8 y tipoPropiedad != 8;
    if(tipoVenta != 8 && tipoPropiedad != 8){
      if(localidad && localidad.trim() !== ""){
        propAux = this.state.data;

        let propiedadesVenta = propAux.propiedades.filter(propiedad => propiedad.localidad.toLowerCase().includes(localidad.toLowerCase()));

        propdef = propiedadesVenta.filter(pr => pr.id_viviendas == tipoPropiedad && pr.id_venta == tipoVenta);

        flag = true;

      } else if(localidad == ""){
        propAux = this.state.data;

        propdef = propAux.propiedades.filter(pr => pr.id_viviendas == tipoPropiedad && pr.id_venta == tipoVenta);

        flag = true;
      }
    }

    //tipoVenta == 8 y tipoPropiedad == 8;
    if(localidad && localidad.trim() !== "" && tipoVenta == 8 && tipoPropiedad == 8){
        propAux = this.state.data;

        propdef = propAux.propiedades.filter(propiedad => propiedad.localidad.toLowerCase().includes(localidad.toLowerCase()));

        flag = true;
      }

      let propiedades = {
        propiedades:  propdef
      };

      this.setState({
        propiedades: propiedades,
        propiedadesAux: propiedades,
        buscar: t,
        tipoSales: tipoVentaAux
      });

    /* si no hay flag reseteamos las propiedades */
    if (!flag) {
      this.setState({propiedades: p,});
    }
  }

  /* filtro de atajos */
  filtro = (valor) => {
    let data = this.state.data; /* lista completa de propiedades */
    let propdef;

    // Viviendas
    if(valor == 1){
      propdef = data.propiedades.filter(pr => pr.id_tipo == valor);
    }

    // Garajes
    if(valor == 2){
      propdef = data.propiedades.filter(pr => pr.id_tipo == valor);
    }

    // Trasteros
    if(valor == 3){
      propdef = data.propiedades.filter(pr => pr.id_tipo == valor);
    }

    // Terrenos
    if(valor == 4){
      propdef = data.propiedades.filter(pr => pr.id_tipo == valor);
    }

    // Terrenos
    if(valor == 5){
      propdef = data.propiedades.filter(pr => pr.piscina != "no");
    }

    // Terrenos
    if(valor == 6){
      propdef = data.propiedades.filter(pr => pr.estado == "Segunda mano");
    }

    let propiedades = {
      propiedades:  propdef
    };
    this.setState({propiedades: propiedades})
  }

  filtroExtra = (habitaciones, garaje, piscina, precioMinimo, precioMaximo) => {
    let propAux = this.state.propiedadesAux.propiedades;
    let propFiltered = propAux;

    //número de habitaciones
    if (habitaciones !== 8) {
      if (habitaciones === 3) {
          propFiltered = propFiltered.filter(x => x.habitaciones >= habitaciones);
      } else {
          propFiltered = propFiltered.filter(x => x.habitaciones === habitaciones);
      }
    } else 

    //garaje
    if (garaje === 1) {
      propFiltered = propFiltered.filter(g => g.garaje === 'si');
    } else if (garaje === 2) {
      propFiltered = propFiltered.filter(g => g.garaje === 'no');
    }

    //piscina
    if(piscina === 1){
      propFiltered = propFiltered.filter(p => p.piscina === 'no');
    } else if(piscina === 2){
      propFiltered = propFiltered.filter(p => p.piscina === 'comunitaria');
    } else if(piscina === 3){
      propFiltered = propFiltered.filter(p => p.piscina === 'privada');
    }

    //Máximo y mínimo
    propFiltered = propFiltered.filter(m => m.precio >= precioMinimo && m.precio <= precioMaximo); 

    let propiedades = {
      propiedades:  propFiltered
    };

    this.setState({
      propiedades: propiedades
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Inmobiliaria<img src={logo} className="App-logo" alt="logo" /></h1>
          <VerContactos
            contactos={this.state.contactos}
            isOpen={this.state.modalContactos}
            openContactos={this.openContactos}
          />
          <UploadPropertie />
        </header>
        <Atajo
          data={this.state.data} 
          filtro = {this.filtro}
        />
        {this.state.buscar ?
        <SearchEngine
          slogan={this.state.slogan}
          data={this.state.data}
          propiedades={this.state.propiedades}
          clicar = {this.handleSearch}
         />
        : 
        <PanelInfo
          tipoVenta={this.state.tipoVenta}
          tipoPropiedad={this.state.tipoPropiedad}
          inputValue={this.state.inputValue}
        />
        }
        {!this.state.buscar ? 
        <Filtro
          tipoSales = {this.state.tipoSales}
          filtroExtra = {this.filtroExtra}
        />
        : null}
        <MainBoard
          propiedades={this.state.propiedades}
          openVer = {this.openVer}
        />
        <ModalPropiedad 
          isOpen={this.state.modalPropiedad}
          openVer = {this.openVer}
          idPropiedad = {this.state.idPropiedad}
          data = {this.state.data}
          contactar = {this.contactar}
        />
        <ModalContactar
          isOpen={this.state.modalContactar}
          idPropiedad={this.state.idPropiedad}
          contactar = {this.contactar}
        />
        <ModalContactos 
          isOpen={this.state.modalContactos}
          openContactos={this.openContactos}
          contactos={this.state.contactos}
        />
      </div>
    );
  }

}

export default App;
