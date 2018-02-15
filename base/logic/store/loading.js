/*
  loading.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description:
      Root functions for managing redux store app loading state
*/
// IMPORTS
// Import Other Node Modules
import { combineReducers } from 'redux';

// Action Definitions
export const fontsDoneLoading = {type: 'FONTS_DONE_LOADING'};
export const imagesDoneLoading = {type: 'IMAGES_DONE_LOADING'};
export const marketDoneLoading = {type: 'MARKET_DONE_LOADING'};
export const appLaunchRan = {type: 'APP_LAUNCH_RAN'};

export const completeAppSubscriptions = {type: 'COMPLETE_APP_SUBSCRIPTIONS'};
export const closeAppSubscriptions = {type: 'CLOSE_APP_SUBSCRIPTIONS'};

const essentialLoadingReducer = (state, action) => {
    if (state === undefined) {
        state = {
            appLaunchRan: false,
            fontsLoaded: false
        }
    }
    switch(action.type) {
        case fontsDoneLoading.type:
            return Object.assign({}, state, {fontsLoaded: true})
        case appLaunchRan.type:
            return Object.assign({}, state, {appLaunchRan: true})
    }
    return state
}

const nonEssentialLoadingReducer = (state, action) => {
    if (state === undefined) {
        state = {
            imagesLoaded: false
        }
    }
    switch(action.type) {
        case imagesDoneLoading.type:
            return Object.assign({}, state, {imagesLoaded: true})
        case marketDoneLoading.type:
            return Object.assign({}, state, {marketLoaded: true})
    }
    return state
}
  
export default loadingReducer = combineReducers({
    essentialState: essentialLoadingReducer,
    nonEssentialState: nonEssentialLoadingReducer
})