/**
 * @module actions.js
 * 
 * @description Action creators
 * 
 * */

import * as types from '../constants/actionTypes';

export const getProfile = () => ({
    type : types.GET_PROFILE,
})

export const authenticate = (id) => ({
    type : types.AUTHENTICATE,
    payload : id
})

export const logOut = () => ({
    type : types.LOGOUT
})