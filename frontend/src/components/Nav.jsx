import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 , marginTop: -5}}>
      <AppBar position="static" sx={{backgroundColor: '#2b7a78'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODO APP
          </Typography>
          <Link to='/'><button style={{color: '#2b7a78'}}>Home</button></Link>
          <Link to='/add'><button style={{color: '#2b7a78', marginLeft: 6}} >Add Task</button></Link>
          
        </Toolbar>
      </AppBar>
    </Box>    
     
    </>
  )
}

export default Nav