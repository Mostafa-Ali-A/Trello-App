import './index.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './Components/Lists/Lists';
import store from './Utils/Store';
import StoreApi from './Utils/StoreApi';
import InputContainer from './Components/Input/InputContainer';

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

  const addMoreList = (title, listId) => {
    const newListId = uuidv4();

    const newList = {
      id: newListId,
      title,
      cards: [],
    };

    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    }
    setData(newState);
    };

    return (
      <StoreApi.Provider value={{ addMoreCard, addMoreList }}>
        <div className= 'App'>
          {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId}/>;
          })}
          <InputContainer type= 'list' />
        </div>
      </StoreApi.Provider>
    );
  }

export default(App);
