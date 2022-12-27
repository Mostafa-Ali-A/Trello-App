import React, { useContext, useState } from "react";
import { InputBase, Typography } from '@mui/material';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import StoreApi from '../../Utils/StoreApi';

function Title({ text, listId }) {

const [open, setOpen] = useState(false);
const [newText, setNewText] = useState(text);
const {updateListTitle} = useContext(StoreApi);

  return(
  <div>
    {open ? (
    <div className= 'titles inputWrap' >
      <InputBase
      value = {newText}
      onChange= {(e) => {setNewText(e.target.value)}}
      onFocus= {(e) => {e.target.select()}}
      className= 'titles input1'
      multiline
      autoFocus
      fullWidth
      maxRows={15}
      onBlur={() => {setOpen(!open);updateListTitle( newText, listId )}}
      type={'text'}
      />
      <MoreHoriz
      fontSize='small'
      className= 'horiz in' />
    </div>
    ) : (
    <div className= 'Titles'>
      <Typography
      onClick = {() => setOpen(!open)}
      className= 'titles todo' >
      {text}
      </Typography>
      <MoreHoriz
      fontSize='small'
      className= 'horiz' />
    </div>
    )
    }
  </div>
  );
}

export default (Title);
