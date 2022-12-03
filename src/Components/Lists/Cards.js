import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';

function Cards({card}) {

  const [open, setOpen] = useState(false);

  return (
    <div>
  {open ? (
    <div>
    <InputBase
    value = {card.content}
    onFocus={(e) => {e.target.select()}}
    className= 'card input3'
    multiline
    autoFocus
    fullWidth
    onBlur={() => setOpen(!open)}
    type={'text'}
    />
    </div>
  ) : (
    <div>
    <Paper className= 'cards'
    onClick = {() => setOpen(!open)}
    >{card.content}
    </Paper>
    </div>
  )
}
  </div>
  );
 }
 export default Cards;