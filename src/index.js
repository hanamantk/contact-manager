/*
  Description   : routing of application done here
*/

import React  			from 'react';
import ReactDOM 		from 'react-dom';
import App 				from './App';
import AddContact 		from './components/addcontact'; 
import './index.css';
import {Provider} 		from 'react-redux';
import Store 			from './store';
import {Router,Route,browserHistory} from 'react-router';


const StoreInstance = Store();

ReactDOM.render(
 <Provider store={StoreInstance}>
	
	<Router history={browserHistory} >
	 	<Route path='/' component={App}/>
	 	<Route path='/AddContact' component={AddContact}/>
	 	<Route path='/UpdateContact' component={AddContact}/>
	 	
	 </Router>
	 
 </Provider>,
 document.getElementById('root')
);

