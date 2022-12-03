import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';

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
    minRows={3}
    onBlur={() => setOpen(!open)}
    type={'text'}
    />
    <Button className= 'btn button'
    onClick= {() => setOpen(false)} >Save</Button>
    <IconButton
    onClick= {() => setOpen(false)} />
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