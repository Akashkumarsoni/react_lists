import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    inp: "",
    names: [],
    //   { id: 0, name: "Akash" },
    //   { id: 1, name: "Vaibhav" },
    // ],
  };
  inputHandler = (e) => {
    this.setState({
      inp: e.target.value,
    });
  };
  addNames = (e) => {
    if (this.state.inp === "") {
      alert("Name field is empty");
    } else {
      var l = Math.floor(Math.random() * 90 + 10);
      var nam = this.state.inp;
      var n = { id: l, name: nam };
      this.setState({
        inp: "",
        names: [...this.state.names, n],
      });
    }
  };
  remove = (e) => {
    var t = e.target.getAttribute("id");
    var indx = -1;
    var key ;
    this.state.names.forEach(i => {
      indx +=1;
      if(i.id == t){
        key =  indx
      }
    });
    this.state.names.splice(key, 1);
    this.setState({
      names: this.state.names,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="lines">
            <input
              value={this.state.inp}
              className="inputs"
              onChange={this.inputHandler}
              placeholder="Enter name"
            />
            <button onClick={this.addNames} className="addbtn">
              Add
            </button>
          </div>

          <ul>
            {this.state.names.map((i) => (
              <p className="lists" key={i.id}>
                <span
                  key={i.id}
                  id={i.id}
                  className="cross"
                  onClick={this.remove}
                >
                  X
                </span>
                {i.name}
              </p>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}
