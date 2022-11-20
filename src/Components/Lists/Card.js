import React from 'react';
/*import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';*/
import { Paper } from '@mui/material';

const style = {
  card: {
    padding: (3, 3, 3, 6),
    margin: 15
  }
}

/*<Paper style={style.card} >{card.content}</Paper>*/

/*<Card style={style.card} >
        <Typography>
          {card.content}
        </Typography>
      </Card>*/
/*const Cards = ({card}) => {*/
function Card({card}) {
  return (
    <div>
    <Paper style={style.card} >{card.content}</Paper>
    </div>
  );
 }
 export default Card;