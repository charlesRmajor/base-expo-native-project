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

// Import Base Stores
import loadingReducer from './loading';
import setNotificationsSection from './notifications';
import setMarketplaceSection from './marketplace';

// Import App's Stores
import appStoreSections from '../../../src/logic/store/appStoreSections';

// Action Definitions
export const setAppLanguageTo = (language) => {return ({type: 'SET_APP_LANGUAGE', language: language})};
export const setAppStringsTo = (strings) => {return ({type: 'SET_APP_STRINGS', strings: strings})};
export const setAppImagesTo = (images) => {return ({type: 'SET_APP_IMAGES', images: images})};
export const setAppStylesTo = (styles) => {return ({type: 'SET_APP_STYLES', styles: styles})};
export const setAppAvailablePurchasesTo = (purchases) => {return ({type: 'SET_AVAILABLE_PURCHASES', purchases: purchases})};
export const setAppAvailableSubscriptionsTo = (subscriptions) => {return ({type: 'SET_AVAILABLE_SUBSCRIPTIONS', subscriptions: subscriptions})};

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

const defaultMarketState = {
  availablePurchases : [],
  availableSubscriptions: []
}

const marketReducer = (state = defaultMarketState, action) => {
  switch (action.type) {
    case setAppAvailablePurchasesTo().type:
      return Object.assign({}, state, {purchases: action.purchases})
    case setAppAvailableSubscriptionsTo().type:
      return Object.assign({}, state, {subscriptions: action.subscriptions})
  }
  return state
}

// export default props to be loaded for all views
export const loading = {name: 'loadingState', reducer: loadingReducer};
export const styles = {name: 'stylesState', reducer: stylesReducers};
export const images = {name: 'imageState', reducer: imagesReducer};
export const strings = {name: 'stringsState', reducer: stringsReducer};
export const market = {name: 'marketState', reducer: marketReducer};

const essentialStoreSections ={
  loading: loading,
  styles: styles,
  images: images,
  strings: strings,
  market: market
}

// Base Project Stores
// appStoreSections is the store sections defined in the /src/logic/store/... folder
export const allStoreSections = Object.assign({},
  essentialStoreSections,
  setNotificationsSection,
  setMarketplaceSection,
  (appStoreSections ? appStoreSections : {}));

export const defaultInterfacePropsFrom = (store) => {
  const storeSubscriptionObject = getStoreSubscriptionObjectFrom({
    styles: styles,
    images: images,
    strings: strings,
  }, store);
  return(storeSubscriptionObject)
}

const createAppStore = () => {
  const reducersToCombine = combineReducersObjectFrom(allStoreSections);
  const combinedReducers = combineReducers(reducersToCombine);
  return(combinedReducers)
}

export default store = createStore(createAppStore())