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

export const getGames = (games) => ({
    type : types.GET_GAMES,
    payload : games
})

export const authenticate = (id) => ({
    type : types.AUTHENTICATE,
    payload : id
})

export const renderInfo = (appid) => ({
    type : types.RENDER_INFO,
    payload : appid
})

export const logOut = () => ({
    type : types.LOGOUT
})