/**
 * @module steamReducer
 * 
 * @description Reducer to handle requests to and from the steam api
 */

import * as types from '../constants/actionTypes';
import fetch from 'node-fetch';

const intialState = {
    authenticated: false,
    id: null,
    games: []
};

const steamReducer = (state=intialState, action) => {
    switch(action.type){
        case types.GET_PROFILE:
        case types.GET_GAMES:
            //Take the id and retrieve the list of games associated with a user (via backend express and steam API), then return it
            return {
                ...state,
                games : action.payload
            }
        case types.RENDER_INFO:
            const newGameArr = state.games.slice();
            const targetGame = newGameArr.find(game => game.appid === action.payload);
            targetGame.render = !targetGame.render;
            return {
                ...state,
                games : newGameArr 
            }
        case types.AUTHENTICATE:
            return {
                ...state,
                authenticated : true,
                id : action.payload
            }
        case types.LOGOUT:
            return intialState;
        default:
            return state;
    }
}

export default steamReducer;