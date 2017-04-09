/*
  Description   : this is application store 
  					that provides data to components
*/


import {createStore} from 'redux';
import rootReducer from './reducers';

export default (initialState)=>{
	return createStore(rootReducer,initialState);
}