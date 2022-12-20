import React from 'react';
import Card from './Cards';
import Title from './Titles';
import Input from '../Input/InputContainer';

function List({ list }) {
  return (
    <div className= 'lists'>
      <div className='color' >
        <Title title={list.title} />
        <div className='overflow' >
          {list.cards.map((card) => (
          <Card key={card.id} card={card} />
          ))}
        </div>
        <Input listId={list.id} />
      </div>
    </div>
  )
}

export default List;
