import React, { useState } from 'react';
import { Paper, InputBase, Button } from '@mui/material';

function Cards({card}) {

  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <div className='contain'>
          <div className='card darken' ></div>
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
          onBlur={() => setOpen(!open)}
          type={'text'}
          />
          <Button className= 'card btn button'
          onClick= {() => setOpen(false)}>Save</Button>
          </div>
        </div>
      ) : (

        <Paper className= 'cards'
        onClick = {() => setOpen(!open)} >
        {card.title}
        </Paper>

      )
    }
  </div>
  );
}

export default Cards;
