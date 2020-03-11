/**
 * @module index.js
 * 
 * @description Module to combine reducers to be used in store 
 */

 import { combineReducers } from 'redux';
 import steamReducer from './steamReducer.js';

 const reducers = combineReducers({
     steam: steamReducer
 });

 export default reducers;
