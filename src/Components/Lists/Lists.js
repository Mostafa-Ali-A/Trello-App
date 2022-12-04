import React from 'react';
import { CssBaseline } from '@mui/material';
import Card from './Cards';
import Title from './Titles';
import Input from '../Input/Input';

function List({list}) {
  return (
    <div className= 'lists'>
    <CssBaseline />
    <Title title={list.title} />
    {list.cards.map((card) => (
      <Card key={card.id} card={card} />
  ))}
    <Input />
    </div>
  )
}

 export default List;