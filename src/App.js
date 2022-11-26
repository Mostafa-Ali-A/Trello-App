import React, { useState } from 'react';
import List from './Components/Lists/Lists';
import store from './Utils/store';

function App() {

  const style = {
    root:{
    backgroundColor: '#EBECF0',
    marginLeft: '15px',
    marginTop: '30px',
    borderRadius: '3px',
    width: '300px',
    padding: '8px'
    }
  };

  const [data, setData] = useState(store);

    return (
      <div style={style.root}>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId}/>;
      })}
      </div>
    );
  }

  export default(App);
