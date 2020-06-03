import React, { useState, useRef } from "react";
import Button from '@material-ui/core/Button';
import {Dialog, DialogActions, DialogContent, DialogTitle, OutlinedInput, RootRef} from '@material-ui/core';

export default function DialogRemarks(props) {

    const [remarks, setRemarks] = useState("");
    const domRef = useRef();

    const handleChangeInput = (e) => {
        setRemarks(e.target.value)
    };

    const handleClose = () => {
        props.setOpen(false)
    };

    const handleSeve = () => {
        props.setRemarks(remarks)
        props.setOpen(false)
    };

    return (
        <RootRef rootRef={domRef}>
            <Dialog open={props.open} onClose={() => props.setOpen(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">כתוב הערה</DialogTitle>
                <DialogContent>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        placeholder="הערות"
                        defaultValue={props.remarks}
                        onChange={handleChangeInput}
                        style={{width: "100%"}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        בטל
                    </Button>
                    <Button onClick={handleSeve} color="primary">
                        שמור
                    </Button>
                </DialogActions>
            </Dialog>
        </RootRef>
    )
}