/** 
*    index.js
*
*
*   @description Entry to point to the frontend application. Hangs react app from index.html via #root
**/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';

render(
    (<Provider store={store}>
        <App />
    </Provider>),
    document.getElementById('root')
)