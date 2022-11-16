import React from 'react';
import Paper from '@mui/material/Card';
import {InputBase } from '@mui/material';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  card: {
    paddingBottom: 30,
    margin: (0, 3, 3, 3)
  },
  input: {
    margin: 0
  },
  button: {
    background: '#0079BF',
    color: '#fff',
    /*"&:hover": {
      background: Fade('#ddd', .075) 
    }*/
  },
  confirm: {
    margin: (0, 3, 3, 3)
  },
  add: {
    color: '#5E6C84'
  }
};

function InputCard({setOpen}) {
  return (
    <div>
      <div>
        <Paper style = {style.card} >
          <InputBase multiline fullWidth onBlur={() => setOpen(false)}
          placeholder='Enter a title for this card...'  style = {style.input} />
        </Paper>
      </div>
      <div style = {style.confirm} >
      <Button style = {style.button} onClick= {() => setOpen(false)} >Add Card</Button>
      <IconButton onClick= {() => setOpen(false)} />
      <CloseIcon style={style.add} />
      </div>
    </div>
  )
}
export default InputCard;