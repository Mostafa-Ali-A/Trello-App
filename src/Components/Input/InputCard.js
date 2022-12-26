import React, { useContext, useState } from 'react';
import {InputBase, Paper, Button, } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import StoreApi from '../../Utils/StoreApi';

function InputCard({ setOpen, listId, type }) {

  const [text, setText] = useState('');
  const { addMoreCard, addMoreList } = useContext(StoreApi);

  return (
    <div className= 'inputCardList'>
      <div>{
        type === 'card'
        ? <Paper className= 'inputCard card1' >
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
        : <Paper className= 'inputCard list' >
        <InputBase
        fullWidth
        onChange={(e) => setText(e.target.value)}
        onBlur={() => setOpen(false)}
        placeholder='Enter list title...'
        className= 'inputList input3'
        type={'text'}
        value={text}
        inputRef={(input) => {
          if (input != null) {
            input.focus();}}}/>
      </Paper>
          }
      </div>
      <div>
        {
          type === 'card'
        ? <Button
        className= 'btn button'
        onClick= {() => {setOpen(false);addMoreCard(text, listId);setText('')}}>
        Add card
        </Button>
        : <Button
        className= 'btn button list'
        onClick= {() => {setOpen(false);addMoreList(text);setText('')}}>
        Add list
        </Button>
      }
        {
          type === 'card'
        ? <ClearIcon
        className= 'inputCard icons'
        onClick= {() => setOpen(false)} />
        : <CloseIcon
        className= 'inputCard icons close' />
      }
        {
          type === 'card'
          ? <MoreHoriz
          className= 'horiz icon' />
          :''
      }
      </div>
    </div>
  );
}
export default InputCard;
