import './App.css';
import * as React from 'react';
import {useEffect, useState} from "react";
import {create} from "apisauce";
import {DataGrid} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import AddColumnDia from "./components/AddColumnDia";
import DeleteColumnDia from "./components/DeleteColumnDia";
import DeleteRowDia from "./components/DeleteRowDia";

const api = create({
    baseURL: 'http://localhost:3001', headers: {
        Accept: 'application/vnd.github.v3+json'
    }
})

function App() {

    const [rows, setRows] = useState([])
    const [columns, setColumns] = useState([])
    const [newColumn, setNewColumn] = useState('')
    const [id, setId] = useState(0)
    const [newColumnType, setNewColumnType] = useState('')
    const [updater, setUpdater] = useState(true)
    const [open, setOpen] = React.useState(false)
    const [openDelCol, setOpenDelCol] = React.useState(false)
    const [openDelRow, setOpenDelRow] = React.useState(false)


    useEffect(() => {
        const getUsers = async () => {
            api.get("/users").then(response => {
                setRows(response.data)
                let allKeys = Object.keys(response.data[0])
                let tempCol = []
                allKeys.forEach(value => {
                    tempCol.push({
                        field: value,
                        headerName: value.toUpperCase(),
                        width: 200,
                        editable: true
                    })
                })
                setColumns(tempCol)
            })
        }
        getUsers().then(() => {
        })
    }, [updater])

    const handleChange = (event) => {
        setNewColumnType(event.target.value);
    };
    const handleChangeInColumnName = (event) => {
        setNewColumn(event.target.value);
    };
    const handleChangeInId = (event) => {
        setId(event.target.value);
    };

    const createNewColumn = () => {
        if (validate()) {
            api.get(`/column/${newColumn}-${newColumnType}`).then(res => {
                alert(res.data.message)
                setUpdater(!updater)
                setOpenDelCol(false);
            })
        } else {
            alert("Enter All Details!")
        }
    }

    const deleteColumn = () =>{
        if (!(newColumn === '')) {
            api.get(`/column/delete/${newColumn}`).then(res => {
                alert(res.data.message)
                setUpdater(!updater)
                setOpen(false);
            })
        } else {
            alert("Enter Name!")
        }
    }

    const deleteRow = () =>{
        if (!(id == null)) {
            api.get(`/row/delete/${id}`).then(() => {
                alert("Success..!")
                setUpdater(!updater)
                setOpenDelRow(false);
            })
        } else {
            alert("Enter ID!")
        }
    }

    const validate = () => {
        return !(newColumn === '' || newColumnType === '')
    }

    return (
        <div className={"App"}>
            <h1>React Table</h1>
            <div>
                <Button sx={{margin: 1}} variant="outlined" onClick={()=>{ setOpen(true)}}>
                    Add Column
                </Button>
                <Button sx={{margin: 1}} variant="outlined" onClick={()=>{}}>
                    Add Row
                </Button>
                <Button sx={{margin: 1}} variant="outlined" onClick={()=>{ setOpenDelCol(true)}}>
                    Delete Column
                </Button>
                <Button  sx={{margin: 1}} variant="outlined" onClick={()=>{ setOpenDelRow(true)}}>
                    Delete Row
                </Button>
            </div>
            <AddColumnDia open={open}
                          onClose={()=> setOpen(false) }
                          onTextChangeName={handleChangeInColumnName}
                          onTextChangeType={handleChange}
                          newColumType={newColumnType}
                          createNewColumn={createNewColumn}/>
            <DeleteColumnDia open={openDelCol}
                             onClose={()=> setOpenDelCol(false)}
                             onTextChangeName={handleChangeInColumnName}
                             deleteColumn={deleteColumn}/>
            <DeleteRowDia open={openDelRow}
                          onClose={()=> setOpenDelRow(false)}
                          onTextChangeName={handleChangeInId}
                          deleteRow={deleteRow}/>
            <div style={{margin: 32}}>
                <DataGrid
                    style={{height: 370}}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection={true}
                />
            </div>
        </div>);
}

export default App;
