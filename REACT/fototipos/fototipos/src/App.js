import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Fototipos",
    }
  }

  render() {
    return (
      <div className="App">
        <h1 id="titulo">{this.state.titulo}</h1>
      </div>
    );
  }
}

export default App;
