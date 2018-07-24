import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  f(){
        fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                alert(json.name);
            })
    }

    state = {
        valid: true
    };
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <form>
              <input align="center" className="Input-1" onChange={this.state.valid = true} ></input>
              <input className="Input-2" type = "Button" value="Нажми на меня" onClick={this.f()}></input>
          </form>
      </div>
    );
  }

}

export default App;
