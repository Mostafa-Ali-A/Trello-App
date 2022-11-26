import React, { useState } from "react";
import { InputBase, Typography } from '@mui/material';
import { MoreHoriz } from "@mui/icons-material";

function Title({title}) {

  const style = {
      title: {
        margin: 15,
        display: 'flex'
      },
      todo: {
        flexGrow: 15,
        fontSize: 15,
        fontWeight: 'bold'
      },
      input: {
        margin: 15,
        /*fontSize: 15,*/
        fontWeight: 'bold',
        /*"&:FocusEvent": {
          background: '#ddd'
        }*/
      },
      horiz: {
        color: '#5E6C84'
      }
  };

const [open, setOpen] = useState(false);

  return(
  <div>
  {open ? (
    <div>
    <InputBase
    value = {title}
    style = {style.input}
    autoFocus
    fullWidth
    onBlur={() => setOpen(!open)}
    />
    </div>
  ) : (
    <div style= {style.title}>
    <Typography
    onClick = {() => setOpen(!open)}
    style = {style.todo} >
    {title}
    </Typography>
    <MoreHoriz style = {style.horiz} />
    </div>
  )
}
  </div>
  );
}

export default (Title);