import React, { useState/*, useEffect */ } from 'react';
import List from './Components/Lists/List';
import Store from './Utils/Store';

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

  const [data, setData] = useState(Store);

    return (
      <div style={style.root}>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId}/>;
      })}
      </div>
    );
  }

  /*const mapStateToProps = state => ({
    Lists: state.Lists/*myLists
  })*/

  export default(App);
