import { Button, Dialog, DialogTitle } from '@mui/material';
import CheckIcon from "@mui/icons-material/Check";
import React, { useState } from 'react'
import TextField from "@mui/material/TextField";


const UpdateTaskForm = ({ isDialogOpen, setIsDialogOpen, task }) => {
    const { id, completed } = task;
    const [taskName, setTaskName] = useState("");
    return (
        <Dialog open={isDialogOpen}>
            <DialogTitle>Edit Task</DialogTitle>
            <div classname="dialog">
                <TextField size="small" label="Task" variant="outlined" onChange={(e) => setTaskName(e.target.value)} />
                <Button variant='contained' onClick={() => { setIsDialogOpen(false); }}>
                    <CheckIcon />
                </Button>
            </div>
        </Dialog>
    )
}

export default UpdateTaskForm
