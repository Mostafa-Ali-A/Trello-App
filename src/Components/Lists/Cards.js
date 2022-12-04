import React, { useState } from 'react';
import { Paper, InputBase, Button, Box } from '@mui/material';

function Cards({card}) {

  const [open, setOpen] = useState(false);

  return (
    <div>
    {open ? (
    <Box
    className= 'card input3'>
    <InputBase
    value = {card.content}
    onFocus={(e) => {e.target.select()}}
    multiline
    autoFocus
    fullWidth
    minRows={3}
    onBlur={() => setOpen(!open)}
    type={'text'}
    />
    <Button className= 'btn button cards'
    onClick= {() => setOpen(false)} >Save</Button>
    </Box>
    ) : (
    <Paper
    onClick = {() => setOpen(!open)}
    className= 'cards'
    >
    {card.content}
    </Paper>
    )
  }
  </div>
  );
 }
 export default Cards;