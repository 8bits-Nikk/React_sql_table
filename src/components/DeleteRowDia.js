import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

const DeleteRowDia =(props) => {

    return(
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Delete Row</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To Delete Row from this table, please enter ID here.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    label="ID"
                    type="number"
                    fullWidth
                    onChange={props.onTextChangeName}
                    variant="outlined"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button onClick={props.deleteRow}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteRowDia
