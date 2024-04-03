import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './componentes/Userlist';
import UserForm from './componentes/Userform';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [
        {id: 1, name: "nacho", email: "nacho@myfpschool.com"},
        {id: 2, name: "alberto", email: "juanico@myfpschool.com"},
        {id: 3, name: "cristina", email: "cristina@myfpschool.com"},
      ]
    }
  }

  handleOnAddUser (event) {
    event.preventDefault();
    let user = {
      name : event.target.name.value,
      email: event.target.email.value
    };

    let tmp = this.state.users;
    tmp.push(user);
    this.setState({
      users: tmp
    });
  }

  render() {
    return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Me mola Myfpschool</h2>
      </div>
      <div>
        <p><strong>Añade usuarios</strong></p>
        <UserList users={this.state.users}/>
        <UserForm onAddUser = {(e) => this.handleOnAddUser(e)} />
      </div>
    </div>
    );
  }
}

export default App;
