import React from 'react';
import { Paper } from '@mui/material';

const style = {
  card: {
    padding: (3, 3, 3, 6),
    margin: 15
  }
}

function Cards({card}) {
  return (
    <div>
    <Paper style={style.card} >{card.content}</Paper>
    </div>
  );
 }
 export default Cards;