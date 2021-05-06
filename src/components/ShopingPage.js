import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

const axios = require("axios");

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Item name", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
];

export class ShopingPage extends React.Component {
  state = {
    list: [],
    rows: [],
  };
  //   constructor(props) {
  //     super(props);
  //  }

  componentDidMount() {
    var tempArray = [];

    axios.get("http://localhost:3003/api/printall").then((response) => {
      console.log(response["data"]);

      tempArray = response["data"].map((value, key) => {
        return value;
      });
      console.log(tempArray);

      this.setState({
        rows: tempArray,
      });
    });
  }

  async handleClick(localList) {
    console.log("clicked");
    // console.log(localList);
    let totalCost = 0;
    const selected = Object.keys(localList).map((key, value) => {
      totalCost = totalCost + parseInt(localList[key]["price"]);
      console.log(localList[key]["id"]);
      console.log(localList[key]["name"]);
      console.log(localList[key]["price"]);

      return localList[key];
    });
    alert(totalCost);
    console.log(selected);

    await axios
      .post("http://localhost:3003/api/updateall?id=1&name=manish1&price=30")
      .then((response) => {
        console.log(response["data"]);
      });
  }

  render() {
    let localList = {};

    return (
      <div>
        <div
          style={{
            // backgroundColor: 'blue',
            position: "absolute",
            top: 100,
            left: 425,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Shoping List Page</h1>
          <div style={{ height: 400, width: "60%" }}>
            <DataGrid
              rows={this.state.rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
              onRowSelected={(x) => {
                //
                // dataArray = x.api.current.getSelectedRows();
                let isSelected = x.isSelected;
                // console.log(x)
                if (isSelected) {
                  localList[x["data"]["id"]] = x["data"];
                } else {
                  delete localList[x["data"]["id"]];
                }
                console.log(localList);
              }}
            />

            <hr></hr>
            <Button
              style={{ position: "absolute", left: 250 }}
              variant="outlined"
              onClick={(e) => this.handleClick(localList)}
            >
              Buy
            </Button>

            {this.state.list}
            {/* <Button
            style={{ position: "absolute", left: 250 }}
            variant="outlined"
            color="secondary"
          >
            Reset
          </Button>
     */}
          </div>
        </div>
      </div>
    );
  }
}

//________________
