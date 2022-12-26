import React from 'react';
import Card from './Cards';
import Title from './Titles';
import InputContainer from '../Input/InputContainer';

function List({ list }) {
  return (
    <div>
      <div className='Lists' >
        <Title title={list.title} />
        <div className='overflow' >
          {list.cards.map((card) => (
          <Card key={card.id} card={card} />
          ))}
        </div>
        <InputContainer listId={list.id} type= 'card' />
      </div>
    </div>
  )
}

export default List;
