import React, { useState } from "react";
import { InputBase, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Title({title}) {

const [open, setOpen] = useState(false);

  return(
  <div>
    {open ? (
    <div>
      <InputBase
      value = {title}
      onFocus={(e) => {e.target.select()}}
      className= 'titles input1'
      multiline
      autoFocus
      fullWidth
      maxRows={15}
      onBlur={() => setOpen(!open)}
      type={'text'}
      />
    </div>
    ) : (
    <div className= 'titles'>
      <Typography
      onClick = {() => setOpen(!open)}
      className= 'titles todo' >
      {title}
      </Typography>
      <MoreHorizIcon
      fontSize='small'
      className= 'horiz' />
    </div>
    )
    }
  </div>
  );
}

export default (Title);