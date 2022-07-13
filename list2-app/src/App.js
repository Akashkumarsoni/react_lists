import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  state = {
    ids: "",
    names: "",
    prices: "",
    products: [
      {
        id: "101",
        name: "Product1 ",
        price: 1000,
      },
      {
        id: "102",
        name: "Product2 ",
        price: 2000,
      },
    ],
  };
  idinput = (e) => {
    this.setState({
      ids: e.target.value,
    });
  };
  nameinput = (e) => {
    this.setState({
      names: e.target.value,
    });
  };
  priceinput = (e) => {
    this.setState({
      prices: e.target.value,
    });
  };

  addproductbtn = (e) => {
    var pr = {};
    var i = this.state.ids;
    var n = this.state.names;
    var p = this.state.prices;
    if (i === "" || n === "" || p === "") {
      alert("All fields are mendotary");
    } else {
      pr = { id: i, name: n, price: p };
      console.log(pr);
      this.setState({
        products: [...this.state.products, pr],
        ids: "",
        names: "",
        prices: "",
      });
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <u>Product Table</u>
          </h1>
          <form className="prents">
            <RowsofProducts
              v={this.state.ids}
              inputchange={this.idinput}
              name="Product Id :"
              plachlder="Enter product id"
            />
            <RowsofProducts
            v={this.state.names}
              inputchange={this.nameinput}
              name="Product Name :"
              plachlder="Enter product name"
            />
            <RowsofProducts
            v={this.state.prices}
              inputchange={this.priceinput}
              name="Product Price :"
              plachlder="Enter product price"
            />
          </form>
          <button onClick={this.addproductbtn} type="button" className="addbtn">
            Add Product
          </button>
          <div>
            <h3>Products Table</h3>
            <table className="allproductstable">
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Product Price</th>
              </tr>
              {this.state.products.map((i) => (
                <TableOfProduct
                  ky={Math.random}
                  id={i.id}
                  name={i.name}
                  price={i.price}
                />
              ))}
            </table>
          </div>
        </header>
      </div>
    );
  }
}

export const RowsofProducts = (props) => {
  return (
    <p className="rowofproduct">
      <label className="heads">{props.name} </label>
      <input
      value={props.v}
        onChange={props.inputchange}
        placeholder={props.plachlder}
        className="inps"
      />
    </p>
  );
};

export const TableOfProduct = (props) => {
  return (
    <tr key={props.ky}>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default App;
