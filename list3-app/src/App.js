import "./App.css";
import React, { Component } from "react";

export class App extends Component {
  state = {
    left: ["Ajax", "Jquery", "Javascript", "Mootools","Prototype","Dojo"],
    right: ["ASP.NET", "C#", "VB.NET", "Java","PHP","Python"],
  };
  rightshift = (e) => {
    var select = document.getElementById("lefts");
    var selected = [...select.selectedOptions].map((option) => option.value);
    selected.forEach(i=>{
      var k = this.state.left.indexOf(i);
      this.state.left.splice(k,1);
    })
    this.setState((p) => {
      return {
        right: [...this.state.right, ...selected],
      };
    });
  };
  leftshift = (e) => {
    var select = document.getElementById("rights");
    var selected = [...select.selectedOptions].map((option) => option.value);
    selected.forEach(i=>{
      var k = this.state.right.indexOf(i);
      this.state.right.splice(k,1);
    })
    this.setState((p) => {
      return {
        left: [...this.state.left, ...selected],
      };
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="columsn">
            <select className="subcolumn" multiple={true} id="lefts">
              {this.state.left.map((i, index) => (
                <ListArray key={index} items={i} />
              ))}
            </select>
            <span>
              <p>
                <input
                  onClick={this.rightshift}
                  type="button"
                  className="shiftingbtn"
                  value=">"
                />
              </p>
              <p>
                <input
                  onClick={this.leftshift}
                  type="button"
                  className="shiftingbtn"
                  value="<"
                />
              </p>
            </span>
            <select className="subcolumn" multiple={true} id="rights">
              {this.state.right.map((i, index) => (
                <ListArray key={index} items={i} />
              ))}
            </select>
          </div>
        </header>
      </div>
    );
  }
}

export const ListArray = (props) => {
  return (
    <option key={props.key} className="options">
      {props.items}
    </option>
  );
};

export default App;
