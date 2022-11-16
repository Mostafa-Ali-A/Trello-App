import { combineReducers } from 'redux';
import ListsReducer from './ListsReducer';



export default combineReducers({
/*mylists*/Lists: ListsReducer
});

/*import { createStore } from 'redux';
const reducer = () => {}
const Store  = createStore(reducer);
export default Store;*/