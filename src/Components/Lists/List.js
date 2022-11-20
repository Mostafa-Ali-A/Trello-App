import React from 'react';
import { CssBaseline, Paper } from '@mui/material';
import Card from './Card';
import Title from './Title';
import Input from '../Input/Input';
/*import Cards from './Card';*/
/*{cards.map(card => (
  <cards text= {cards.text}/>
))}*/

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
    {list.cards.map((card) => {
      <Card key={card.id} Card={card} />
    })}
    <Input />
    </Paper>
    </div>
  )
}

 /*const Lists = ({title, cards}) => {
  return (
    <div class= 'content'>
    <h4>{title}</h4>
    <Cards card= 'nam' />
    
    </div>
  )
 }*/
 export default List;