import { Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate();
    const [todos, setTodo] = useState({
        todoDesc: '',
        status: ''
    });

    const fetchValue = (event) => {
        setTodo({ ...todos, [event.target.name]: event.target.value });
    };

    const sendData = () => {
        axios.post('http://localhost:6001/todo/post', todos)
            .then((res) => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h2>Add Todo</h2><br />
            <TextField
                sx={{ width: 500 }}
                label="Todo Description"
                variant="outlined"
                onChange={fetchValue}
                name="todoDesc"
                value={todos.todoDesc}
            /><br /><br />
            <FormControl sx={{ width: 500 }}>
                <InputLabel>Status</InputLabel>
                <Select
                    label="Todo Status"
                    onChange={fetchValue}
                    name="status"
                    value={todos.status}
                >
                    <MenuItem value="ongoing">Ongoing</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                </Select>
            </FormControl><br /><br />
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#2b7a78',
                    color: 'white',
                    margin: 2,
                    '&:hover': { border: 'none'},
                    '&:focus': { outline: 'none' }
                }}
                onClick={sendData}
            >
                Post Todo
            </Button>
        </div>
    );
};

export default Add;
