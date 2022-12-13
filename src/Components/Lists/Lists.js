import React from 'react';
import { CssBaseline } from '@mui/material';
import Card from './Cards';
import Title from './Titles';
import Input from '../Input/InputContainer';

function List({list}) {
  return (
    <div className= 'lists'>
      <CssBaseline />
      <Title title={list.title} />
      {list.cards.map((card) => (
      <Card key={card.id} card={card} />
      ))}
      <Input listId={list.id} />
    </div>
  )
}

export default List;