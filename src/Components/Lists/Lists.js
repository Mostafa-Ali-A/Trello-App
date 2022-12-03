import React from 'react';
import { CssBaseline, Paper } from '@mui/material';
import Card from './Cards';
import Title from './Titles';
import InputContainer from '../Input/InputContainer';

function List({list}) {
  return (
    <div>
    <Paper className= 'lists' >
    <CssBaseline />
    <Title title={list.title} />
    {list.cards.map((card) => (
      <Card key={card.id} card={card} />
  ))}
    <InputContainer />
    </Paper>
    </div>
  )
}

 export default List;