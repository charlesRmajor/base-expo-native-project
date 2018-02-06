/*
  index.js
    top-level store organizing file
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description:
      Root functions for managing redux store
*/
// IMPORTS
// Import Other Node Modules
import { combineReducers, createStore } from 'redux';

// Import App Redux Stores
import loadingReducer from './loading';
import stylesReducers from './styles';

// Action Definitions
export const setAppLanguageTo = (language) => {return ({type: 'SET_APP_LANGUAGE', language: language})};
export const setAppImagesTo = (images) => {return ({type: 'SET_APP_IMAGES', images: images})};

const imageReducer = (state = {}, action) => {
  switch (action.type) {
    case setAppImagesTo().type:
      return Object.assign({}, state, action.images)
  }
  return state
}

const stringsReducer = (state = {}, action) => {
  switch (action.type) {
    case setAppLanguageTo().type:
      return Object.assign({}, state, {language: action.language})
  }
  return state
}

const rootReducer = combineReducers({
  loadingState: loadingReducer,
  stylesState: stylesReducers,
  imagesState: imageReducer,
  stringsState: stringsReducer,
})

export default store = createStore(rootReducer)