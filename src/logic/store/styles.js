/*
  styles.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description:
      Root functions for managing styles in redux store
*/
// IMPORTS
// Import Other Node Modules
import { combineReducers, createStore } from 'redux';

// Action Definitions
export const setAppStylesTo = (styles) => {return ({type: 'SET_APP_IMAGES', styles: styles})};

export default stylesReducers = (state = {}, action) => {
  switch (action.type) {
    case setAppStylesTo().type:
      return Object.assign({}, state, action.styles)
    }
    return state
  }


// const stylesViewReducer = (state = {}, action) => {
//   return state
// }

// const stylesTextReducer = (state = {}, action) => {
//   return state
// }

// export default stylesReducers = combineReducers({
//   stylesViewState: stylesViewReducer,
//   stylesTextState: stylesTextReducer
// })