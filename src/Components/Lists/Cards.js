import React, { useState } from 'react';
import { Paper, InputBase, Button } from '@mui/material';

function Cards({ card }) {

  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
          <div className='contain'>
            <div className='card darken'
            onClick = {() => setOpen(!open)}
            />
            <Paper className= 'card content' >
            {card.title}
            </Paper>
            <div className='contain2' >
              <InputBase className= 'card input3'
              value = {card.title}
              onFocus={(e) => {e.target.select()}}
              minRows={3}
              multiline
              autoFocus
              fullWidth

              type={'text'}
              />
              <Button className= 'card btn button'
              onClick= {() => setOpen(false)}>Save</Button>
            </div>
          </div>
        ) : (
          <Paper className= 'Cards'
          onClick = {() => setOpen(!open)}
          onContextMenu ={ (e) =>{ e.preventDefault();setOpen(!open);}} >
          {card.title}
          </Paper>
          )
      }
    </div>
  );
}

export default Cards;
