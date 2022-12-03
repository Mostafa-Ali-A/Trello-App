import React from 'react';
import Paper from '@mui/material/Card';
import {InputBase } from '@mui/material';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function InputCard({ setOpen }) {
  return (
    <div>
      <div>
        <Paper className= 'inputCard card1' >
        <InputBase multiline fullWidth onBlur={() => setOpen(false)}
          placeholder='Enter a title for this card...'  className= 'inputCard input3' type={'text'} inputRef={(input) => {
            if (input != null) {
              input.focus();}}}/>
        </Paper>
      </div>
      <div className= 'inputCard confirm' >
      <Button className= 'inputCard button' onClick= {() => setOpen(false)} >Add card</Button>
      <IconButton onClick= {() => setOpen(false)} />
      <CloseIcon className= 'inputCard close' onClick= {() => setOpen(false)} />
      <MoreHorizIcon className= 'horiz icon' />
      </div>
    </div>
  )
}
export default InputCard;