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
// Loading
export const fontsDoneLoading = {type: 'FONTS_DONE_LOADING'};
export const imagesDoneLoading = {type: 'IMAGES_DONE_LOADING'};
export const marketDoneLoading = {type: 'MARKET_DONE_LOADING'};
export const appLaunchRan = {type: 'APP_LAUNCH_RAN'};

// Subscriptions
export const oneSignalIsSubscribing = {type: 'ONE_SIGNAL_IS_SUBSCRIBING'};
export const oneSignalIsUnSubscribing = {type: 'ONE_SIGNAL_IS_UNSUBSCRIBING'};
export const oneSignalDoneSubscribing = {type: 'ONE_SIGNAL_DONE_SUBSCRIBING'};
export const oneSignalDoneUnSubscribing = {type: 'ONE_SIGNAL_DONE_UNSUBSCRIBING'};

const subscriptionsReducer = (state, action) => {
    if (state === undefined) {
        state = {
            OneSignalIsSubscribing: false,
            OneSignalIsUnSubscribing: false,
            OneSignalSubscribed: false
        }
    }
    switch(action.type) {
        case oneSignalIsSubscribing.type:
            return Object.assign({}, state, {OneSignalIsSubscribing: true})
        case oneSignalIsUnSubscribing.type:
            return Object.assign({}, state, {OneSignalIsUnSubscribing: true})
        case oneSignalDoneSubscribing.type:
            return Object.assign({}, state, {OneSignalIsSubscribing: false, OneSignalSubscribed: true})
        case oneSignalDoneUnSubscribing.type:
            return Object.assign({}, state, {OneSignalIsUnSubscribing: false, OneSignalSubscribed: false})
    }
    return state
}

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