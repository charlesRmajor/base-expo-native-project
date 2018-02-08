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
import { createStore, combineReducers } from 'redux';

// import general logic
import {getStoreSubscriptionObjectFrom, combineReducersObjectFrom, addPropsRequestFromStore} from './helpers';

// Import App Redux Stores
import loadingReducer from './loading';

// Action Definitions
export const setAppLanguageTo = (language) => {return ({type: 'SET_APP_LANGUAGE', language: language})};
export const setAppStringsTo = (strings) => {return ({type: 'SET_APP_STRINGS', strings: strings})};
export const setAppImagesTo = (images) => {return ({type: 'SET_APP_IMAGES', images: images})};
export const setAppStylesTo = (styles) => {return ({type: 'SET_APP_STYLES', styles: styles})};
export const setUserInfoTo = (userInfo) => {return({type:'SET_USER_INFO_TO', userInfo: userInfo})};

const stylesReducers = (state = {}, action) => {
  switch (action.type) {
    case setAppStylesTo().type:
      return Object.assign({}, state, action.styles)
    }
  return state
}

const imagesReducer = (state = {}, action) => {
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
    case setAppStringsTo().type: // not currently used
      return Object.assign({}, state, action.strings)
  }
  return state
}

const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case setUserInfoTo().type:
      return Object.assign({}, state, action.userInfo)
  }
  return state
}

// export default props to be loaded for all views
export const loading = {name: 'loadingState', reducer: loadingReducer};
export const styles = {name: 'stylesState', reducer: stylesReducers};
export const images = {name: 'imageState', reducer: imagesReducer};
export const strings = {name: 'stringsState', reducer: stringsReducer};
export const userInfo = {name: 'userInfoState', reducer: userInfoReducer};

export const allStoreSections = {
  loading: loading,
  styles: styles,
  images: images,
  strings: strings,
  userInfo: userInfo
}

export const defaultInterfacePropsFrom = (store) => {
  const storeSubscriptionObject = getStoreSubscriptionObjectFrom({
    styles: styles,
    images: images,
    strings: strings,
    userInfo: userInfo
  }, store);
  return(storeSubscriptionObject)
}

const createAppStore = () => {
  const reducersToCombine = combineReducersObjectFrom(allStoreSections);
  const combinedReducers = combineReducers(reducersToCombine);
  return(combinedReducers)
}

export default store = createStore(createAppStore())