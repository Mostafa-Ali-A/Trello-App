import React from 'react';
import {InputBase, Paper, Button, } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import MoreHoriz from '@mui/icons-material/MoreHoriz';

function InputCard({ setOpen }) {
  return (
    <div>
      <div>
      <Paper className= 'inputCard card1' >
        <InputBase
        multiline
        fullWidth
        onBlur={() => setOpen(false)}
        placeholder='Enter a title for this card...'
        className= 'inputCard input3'
        type={'text'}
        inputRef={(input) => {
            if (input != null) {
              input.focus();}}}/>
              </Paper>
      </div>
      <div>
      <Button
      className= 'btn button'
      onClick= {() => setOpen(false)}
      >Add card</Button>
      <ClearIcon
      className= 'inputCard clear'
      onClick= {() => setOpen(false)} />
      <MoreHoriz
      className= 'horiz icon' />
      </div>
    </div>
  )
}
export default InputCard;