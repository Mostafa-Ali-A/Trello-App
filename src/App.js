import './index.css';
import React, { useState } from 'react';
import List from './Components/Lists/Lists';
import store from './Utils/store';

function App() {

  const [data/*, setData*/] = useState(store);

    return (
      <div className= 'container'>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId}/>;
      })}
      </div>
    );
  }

  export default(App);
