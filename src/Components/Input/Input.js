import React, { useState } from 'react';
import { Collapse, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InputCard from './InputCard';

function InputContainer() {

const [open, setOpen] = useState(false);
const [setFocus] = useState(false);

  return (
    <div>
      <Collapse in={open} >
        <InputCard setOpen={setOpen}/>
      </Collapse>
      <Collapse in={!open} >
        <Paper
        className= 'input card'
        elevation={0}
        onClick= {() => {setOpen(!open);setFocus(true)}} >
          <Typography
          className= 'input input2'>
          <AddIcon /> Add a card
          </Typography>
        </Paper>
      </Collapse>
    </div>
  )
 }
 export default InputContainer;