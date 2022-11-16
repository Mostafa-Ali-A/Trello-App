import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const style = {
  card: {
    padding: (3, 3, 3, 6),
    margin: 15
  }
}

/*const Cards = ({card}) => {*/
function Cards() {
  return (
    <Card style={style.card} >
        <Typography>
          Word of the Day
        </Typography>
    </Card>
  )
 }
 export default Cards;