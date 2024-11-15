import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

const Home = () => {
    const [todos, setTodo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:6001/todo/')
            .then((res) => {
                setTodo(res.data);
            })
            .catch(() => {
                console.log('Error fetching data');
            });
    }, []);

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:6001/todo/delete/${id}`)
            .then((res) => {
                alert('Todo deleted');
                window.location.reload(); 
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const toggleStatus = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo._id === id) {
                const newStatus = todo.status === 'ongoing' ? 'completed' : 'ongoing';
                return { ...todo, status: newStatus };
            }
            return todo;
        });
        setTodo(updatedTodos);
        axios.put(`http://localhost:6001/todo/put/${id}`, {
            status: updatedTodos.find(todo => todo._id === id).status
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <Grid container spacing={2} marginLeft={8} maxWidth={1050}>
            {todos.map((todo) => (
                <Grid item xs={12} sm={6} md={4} key={todo._id}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3, width: 230 }}>
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ fontWeight: 700, textDecoration: todo.status === 'completed' ? 'line-through' : 'none' }}
                            >
                                {todo.todoDesc}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: 17, color: '#2b7a78' }}>
                                {todo.status}
                            </Typography>
                            <Checkbox
                                checked={todo.status === 'completed'}
                                onChange={() => toggleStatus(todo._id)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'space-between', padding: 2 }}>
                            <Button size="small" variant="contained" sx={{ backgroundColor: '#800000' }} onClick={() => deleteTodo(todo._id)}>
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Home;
