import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AddColumnDia =(props) => {

    return(
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Add Column</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To Add Column to this table, please enter Column Name and data type here.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Column Name"
                    type="text"
                    fullWidth
                    onChange={props.onTextChangeName}
                    variant="outlined"
                />
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Data Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.newColumType}
                            label="Data Type"
                            onChange={props.onTextChangeType}>
                            <MenuItem value={"int"}>Number</MenuItem>
                            <MenuItem value={"varchar(56)"}>String</MenuItem>
                            <MenuItem value={"date"}>Date</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button onClick={props.createNewColumn}>Add</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddColumnDia
