import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Collapse, Paper} from '@mui/material';
import InputCard from './InputCard';
import AddIcon from '@mui/icons-material/Add';

const style = {
  card: {
    marginTop: 20
  },
  input: {
    padding: (3, 3, 3, 6),
    margin: (0, 3, 3, 3),
    background: '#EBECF0',
    color: '#5E6C84',
    /*"&:hover": {
    backgroundColor: Fade('#000', 0.25)
    }*/
  }
};

function Input() {

const [open, setOpen] = useState(false);

  return (
    <div>
      <Collapse in={open} >
        <InputCard setOpen={setOpen} />
      </Collapse>
      <Collapse in={!open}>
        <Paper style={style.card} elevation={0} onClick= {() => setOpen(!open)} >
          <Typography style={style.input} >
          <AddIcon /> Add a Card
          </Typography>
        </Paper>
      </Collapse>
    </div>
  )
 }
 export default Input;