
import './my-sass.scss';
import React/*, { useState, useEffect }*/ from 'react';
import Lists from './Components/Lists/List';
/*import {connect} from 'react-redux';*/
/*import ReactDOM from 'react-dom/client';*/
/*import { render } from '@testing-library/react';*/

/*import { useSelector, useDispatch } from 'react-redux';*/



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

  const [data, setData] = React.useState (Lists);
    return (
      <div style={style.root}>
      <Lists/>
      </div>
    )
  }

  /*const mapStateToProps = state => ({
    Lists: state.Lists/*myLists
  })*/

  export default /*connect (mapStateToProps)*/ (App);
  /*const clearTextarea = () => {
    setText('');
  };*/

  /*const [text, setText] = React.useState (Previewer);*/

  /*React.useEffect(() => {
		setText(Previewer);
	}, []);*/

  /*return (
    <div className='container'>
      <div className='editorWrap'>
        <div className='toolbar'>
          <i class='fa fa-free-code-camp' aria-hidden='true'>
          </i>
          <h1 className='h'>Editor
          </h1>
          <button className='clearBtn' onClick={clearTextarea}>Clear
          </button>
          <i class='fa fa-arrows-alt' aria-hidden='true'>
          <i class='fa fa-compress' aria-hidden='true'>
          </i>
          </i>
        </div>
        <textarea id='editor' name='text' value={text} onChange={(e) => setText(e.target.value) } placeholder='Enter Your Markdown' />
      </div>
        <div className='previewWrap'>
          <div className='toolbar'>
          <i class='fa fa-free-code-camp' aria-hidden='true'>
            </i>
            <h1 className='h'>Previewer
            </h1>
            <i class='fa fa-arrows-alt' aria-hidden='true'>
            <i class='fa fa-compress' aria-hidden='true'>
            </i>
            </i>
          </div>
        <Preview markdown={text} />
      </div>
    </div>
    );

    function Preview({markdown}){
    return(
      <div id='preview'
      ></div>
    );
    }*/
