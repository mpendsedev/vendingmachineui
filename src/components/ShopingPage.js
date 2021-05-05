import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Item name", width: 130 },
  { field: "age", headerName: "Price", width: 130 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export class ShopingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  handleClick(localList) {
    console.log("clicked");
    // console.log(localList);
    let totalCost = 0;
    const selected = Object.keys(localList).map((key, value) => {
      totalCost = totalCost + parseInt(localList[key]["age"]);
      return localList[key];
    });
    alert(totalCost);
    console.log(selected);
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
          <h1>
            Shoping List Page
          </h1>
          <div style={{ height: 400, width: "60%" }}>
            <DataGrid
              rows={rows}
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
