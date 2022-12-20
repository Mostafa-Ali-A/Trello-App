import './index.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './Components/Lists/Lists';
import store from './Utils/Store';
import StoreApi from './Utils/StoreApi';

function App() {

  const [data, setData] = useState(store);

  const addMoreCard = (title, listId) => {
  const newCardId = uuidv4();

  const newCard = {
    id: newCardId,
    title,
  };

  const list = data.lists[listId];
  list.cards = [...list.cards, newCard];

  const newState = {
    ...data,
    lists: {
      ...data.lists,
      [listId]: list,
    },
  }
  setData(newState);
  };

    return (
      <StoreApi.Provider value={{addMoreCard}}>
        <div className= 'container'>
          {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return
          <List list={list} key={listId}/>;
          })}
        </div>
      </StoreApi.Provider>
    );
  }

export default(App);
