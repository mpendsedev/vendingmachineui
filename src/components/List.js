// import { render } from '@testing-library/react';
import React from "react";
import { Button } from "@material-ui/core";

//css
import "../css/listPage.css";

const axios = require("axios");

const rows = [
  { id: 1, itemName: "Snow", firstName: "Jon", price: 35 },
  { id: 2, itemName: "Lannister", firstName: "Cersei", price: 42 },
  { id: 3, itemName: "Lannister", firstName: "Jaime", price: 45 },
  { id: 4, itemName: "Stark", firstName: "Arya", price: 16 },
  { id: 5, itemName: "Targaryen", firstName: "Daenerys", price: null },
  { id: 6, itemName: "Melisandre", firstName: null, price: 150 },
  { id: 7, itemName: "Clifford", firstName: "Ferrara", price: 44 },
  { id: 8, itemName: "Frances", firstName: "Rossini", price: 36 },
  { id: 9, itemName: "Roxie", firstName: "Harvey", price: 65 },
];

export class List extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: rows,
  //   };
  // }
  state = {
    data: rows,
  };

  componentDidMount() {
    var tempArray = [];

    axios.get("http://localhost:3003/api/listprintall").then((response) => {
      console.log(response["data"]);

      tempArray = response["data"].map((value, key) => {
        return value;
      });
      console.log(tempArray);

      this.setState({
        data: tempArray,
      });
    });
  }

  handleClick(localList) {
    axios.get("http://localhost:3003/api/removeall").then((response) => {
      console.log(response);
      console.log("cleaned");
      this.setState({
        data: [],
      });
      alert("list in clear and money will refund");
    });
  }

  render() {
    return (
      <div
        style={{
          // backgroundColor: 'blue',
          position: "absolute",
          top: 100,
          left: 425,
          // right: 200,
          bottom: 0,
          width: "40%",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <h1>Vending Machine request List</h1>

        <table id="customers">
          <thead>
            <tr>
              <th>Id </th>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value, key) => {
              return (
                <tr>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.price}</td>
                </tr>
              );
            })}

            <hr></hr>
            <Button
              style={{ position: "absolute", left: 150 }}
              variant="outlined"
              onClick={(e) => this.handleClick()}
            >
              Clear All & refund
            </Button>
          </tbody>
        </table>
      </div>
    );
  }
}
