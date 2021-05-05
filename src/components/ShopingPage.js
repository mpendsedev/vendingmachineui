import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Item name", width: 130 },
  { field: "lastName", headerName: "Price", width: 130 },
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
      dataArray :[]
    }
  } 

  render() {
    // let dataArray = []
    
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
        <div style={{ height: 400, width: "60%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
              checkboxSelection
              onRowSelected={(x) => {
                this.setState({dataArray: x.api.current.getSelectedRows()})
                // dataArray = x.api.current.getSelectedRows();
                console.log(x.api.current.getSelectedRows())
                
              }}
         
          />

          <hr></hr>
          <Button
            style={{ position: "absolute", left: 150 }}
            variant="outlined"
          >
            Buy
          </Button>

          <Button
            style={{ position: "absolute", left: 250 }}
            variant="outlined"
            color="secondary"
          >
            Reset
          </Button>
            <hr />
            <hr />

            ****************************
            {/* {this.state} */}
        </div>
        </div>
        </div>
    );
  }
}

//________________
