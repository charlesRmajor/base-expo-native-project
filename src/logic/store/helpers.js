/*
  helpers.js
    redux store helper files
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description:
      Root functions for managing redux store
*/
// IMPORTS
// Import Other Node Modules

export const getStoreSubscriptionObjectFrom = (storeSectionsObject, store) => {
    const combinationObject = {};
    for (key in storeSectionsObject) {
      combinationObject[key] = store[storeSectionsObject[key].name || null];
    }
    return(combinationObject)
  }

export const combineReducersObjectFrom = (reducerObject) => {
    const combinationObject = {};
    for (key in reducerObject) {
      combinationObject[reducerObject[key].name] = reducerObject[key].reducer || null;
    }
    return(combinationObject)
  }

export const addPropsRequestFromStore = (startingStateToPropsObject, newStoreSections, store) => { // stateToPropsReturn, allStoreSections.loading
    for (key in newStoreSections) {
      startingStateToPropsObject[key] = store[newStoreSections[key].name] || null;
    }
    return startingStateToPropsObject
}