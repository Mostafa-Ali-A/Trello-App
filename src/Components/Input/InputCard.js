import React, { useContext, useState } from 'react';
import {InputBase, Paper, Button, } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import StoreApi from '../../Utils/StoreApi';

function InputCard({ setOpen, listId }) {

  const [text, setText] = useState('');
  const {addMoreCard} = useContext(StoreApi);

  return (
    <div>
      <div>
        <Paper className= 'inputCard card1' >
          <InputBase
          multiline
          fullWidth
          onChange={(e) => setText(e.target.value)}
          onBlur={() => setOpen(false)}
          placeholder='Enter a title for this card...'
          className= 'inputCard input3'
          type={'text'}
          value={text}
          inputRef={(input) => {
            if (input != null) {
              input.focus();}}}/>
        </Paper>
      </div>
      <div>
        <Button
        className= 'btn button'
        onClick= {() => {setOpen(false);addMoreCard(text, listId);setText('')}}
        >Add card</Button>
        <ClearIcon
        fontSize='large'
        className= 'inputCard clear'
        onClick= {() => setOpen(false)} />
        <MoreHoriz
        fontSize='large'
        className= 'horiz icon' />
      </div>
    </div>
  );
}
export default InputCard;
