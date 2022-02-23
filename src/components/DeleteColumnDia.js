import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

const DeleteColumnDia = (props) => {
    return(
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Delete Column</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To Delete Column from this table, please enter Column Name here.
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
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button onClick={props.deleteColumn}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteColumnDia
