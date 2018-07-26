import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    flag = false
c_name
c_temp

    constructor(props){
        super(props);
        this.state = {lobster: 0};
    }

    f(){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=e090edb163b2c70e2b6b6f078f302a79&units=metrice090edb163b2c70e2b6b6f078f302a79')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                this.c_name = json.name;
                this.c_temp = json.main.temp;
                this.setState({lobster: this.state.lobster + 1});
                return this.c_name , this.c_temp;
            })
    }

    render(){
    if((!this.c_name)&&(this.flag == true)) return null;
    if(this.flag == true) alert("Working!");
        alert("1ddf");
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"></img>
                    <h1 className="App-title">app2</h1>
                </header>
                <form>
                    <h2>Введите название города чтобы получить прогноз</h2>
                    <input align="center" className="Input-1"></input>
                </form>
                <form>
                    <input className="Input-2" type = "Button" value="Нажми на меня" onClick={this.f.bind(this)} onMouseUp={this.flag = true}></input>
                </form>
            </div>
        );
    }
}

export default App;
