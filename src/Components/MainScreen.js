import React, { useState } from 'react'
import '../MainScreen.css'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';

function MainScreen() {
    const style = {
        backgroundImage: `url('flappy.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',  // Set a specific height to ensure visibility
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',  // Set text color to make it visible on the background
      };

     const [name, setName] = useState(''); 

     const handleInputName = (e) => {
      console.log(e.target.value);
      setName(e.target.value);
     }

  return (
    <div style={style}> 
        <ButtonGroup size="large" aria-label="large button group" className='game-controls' >
          <TextField id="outlined-basic" label="Enter Name" variant="outlined" size="Normal" sx={{ fontSize: '1rem', padding: '10px', backgroundColor: 'burlywood', border: '1px solid rgba(25, 118, 210, 0.5)'}} onChange={handleInputName} />,
          <Link to='/play'>
            <Button sx={{ fontSize: '1.8rem', padding: '16px', backgroundColor: 'burlywood'}} key="Play" onClick={() => localStorage.setItem('playerName', name)}>
              Play
            </Button>
          </Link>,
        </ButtonGroup>
    </div>
  )
}

export default MainScreen