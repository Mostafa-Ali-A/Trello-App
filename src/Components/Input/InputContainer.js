import React, { useState } from 'react';
import { Collapse, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InputCard from './InputCard';

function InputContainer({ listId, type }) {

const [open, setOpen] = useState(false);
const [setFocus] = useState(false);

  return (
    <div>
      <Collapse in={open} >
        <InputCard setOpen={setOpen} listId={listId} type= {type} />
      </Collapse>
      <Collapse in={!open} >
      {type === 'card'
        ? <Paper
        className= 'input card'
        elevation={0}
        onClick= {() => {setOpen(!open);setFocus(true)}} >
          <Typography
          className= 'input input2'>
            <AddIcon />
            Add a card
          </Typography>
        </Paper>
        : <Paper
        className= 'input list'
        elevation={0}
        onClick= {() => {setOpen(!open);setFocus(true)}} >
          <Typography
          className= 'input list2'>
            <AddIcon />
            Add another list
          </Typography>
        </Paper>
  }
      </Collapse>
    </div>
  );
}
export default InputContainer;
