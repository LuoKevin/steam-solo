/**
 * @module steamReducer
 * 
 * @description Reducer to handle requests to and from the steam api
 */

import * as types from '../constants/actionTypes';

const intialState = {
    authenticated: false,
    id: null,
    games: []
};

const steamReducer = (state=intialState, action) => {
    switch(action.type){
        case types.GET_PROFILE:

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