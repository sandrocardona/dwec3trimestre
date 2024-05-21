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
    };
  }
  componentDidMount(){
    const fetchData = async () => {
      try {
        const response = await axios.get(
          PHPURL
        );
        this.setState({propiedades:response.data});
        console.log(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }

  filtrar(localidad){
    let p = this.state.propiedades;
    let flag = false
    if (localidad != undefined && localidad!=""){

    }
    if (flag){
      this.setState({propiedades:p})
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Inmobiliaria<img src={logo} className="App-logo" alt="logo" /></h1>
          <UploadPropertie />
        </header>
        <SearchEngine slogan={this.state.slogan} data={this.state.data} />
        <MainBoard propiedades={this.state.propiedades}/>
      </div>
    );
  }

}

export default App;
