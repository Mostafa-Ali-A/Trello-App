import React from 'react';
import { Paper } from '@mui/material';
import Card from './Card';
import Title from './Title';
import Input from '../Input/Input';
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

function Lists() {
  return (
    <div>
    <Paper style={style.list} >
    <Title />
    </Paper>
    <Card />
    <Card />
    <Card />
    <Input />
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
 export default Lists;