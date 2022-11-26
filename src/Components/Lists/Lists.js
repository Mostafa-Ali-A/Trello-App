import React from 'react';
import { CssBaseline, Paper } from '@mui/material';
import Card from './Cards';
import Title from './Titles';
import Input from '../Input/Input';

const style = {
  list: {
    width: 300,
    backgroundColor: '#EBECF0',
    marginLeft: 15
  }
}

function List({list}) {
  return (
    <div>
    <Paper style={style.list} >
    <CssBaseline />
    <Title title={list.title} />
    {list.cards.map((card) => (
      <Card key={card.id} card={card} />
  ))}
    <Input />
    </Paper>
    </div>
  )
}

 export default List;