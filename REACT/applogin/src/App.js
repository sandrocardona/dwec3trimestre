import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLogin from './componentes/AppLogin'
import Menu from './componentes/Menu'
import { Component } from 'react';
import {PHPLOGIN} from './componentes/Datos';
import axios from 'axios';
import CuatroRaya from './componentes/4raya';
import Game from './componentes/3raya';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      menuItem:"UNO",
      logged:false,
    }
  }
  
  changeMenu(item){
    this.setState({menuItem:item})
  }

  prueba(item){
    console.log("clickado" + item);
    console.log("estado: " + this.state.menuItem)
  }

  userLogin(telefono,password){
    
    if (telefono=="Myfpschool" && password=="2023"){
      this.setState({logged:true})
    }

    axios.post(PHPLOGIN,JSON.stringify({
      telefono:telefono,
      password:password
    }))
    .then(res => {
      console.log(res.data.usuario);
      if ( res.data.usuario !== undefined){
        this.setState({logged:true});
      }
    })
  }

  render(){
    console.log("render " + this.state.menuItem)
    let app = "";
    switch (this.state.menuItem) {
      case "UNO":
        app = <CuatroRaya />
        break;
      case "DOS":
        app = <Game />
        break;
      case "TRES":
        app = <div>TRES</div>
        break;
    }
    let obj=<>
              <Menu menuItem={this.state.menuItem} changeMenu={(item)=>this.changeMenu(item)} prueba={(item) => this.prueba(item)} />
              <div>{app}</div>
            </>
    if (!this.state.logged){
      obj=<AppLogin userLogin={(telefono,password)=>this.userLogin(telefono,password)}/>
    }
    return (
      <div className="App">
        {obj}
      </div>
    );
  }
}

export default App;