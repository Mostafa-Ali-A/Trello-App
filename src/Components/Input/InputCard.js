import React, { useState } from 'react';
import {InputBase, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function InputCard({ setOpen }) {

  const [text, setText] = useState('');

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
      <IconButton onClick= {() => setOpen(false)} />
      <ClearIcon
      className= 'inputCard close'
      onClick= {() => {setOpen(false);setText('');}} />
      <MoreHorizIcon
      className= 'horiz icon' />
      </div>
    </div>
  )
}
export default InputCard;