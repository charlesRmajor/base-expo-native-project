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
export const fontsStartLoading = {type: 'FONTS_START_LOADING'};
export const fontsDoneLoading = {type: 'FONTS_DONE_LOADING'};
export const appLaunchStart = {type: 'APP_LAUNCH_START'};
export const appLaunchDone = {type: 'APP_LAUNCH_DONE'};

export const imagesStartLoading = {type: 'IMAGES_START_LOADING'};
export const imagesDoneLoading = {type: 'IMAGES_DONE_LOADING'};
export const marketStartLoading = {type: 'MARKET_START_LOADING'};
export const marketDoneLoading = {type: 'MARKET_DONE_LOADING'};

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
            areLoading: {appLaunch: false},
            areLoaded: {appLaunch: false}
        }
    }
    switch(action.type) {
        case appLaunchStart.type:
            return Object.assign({}, state, {areLoading: Object.assign({}, state.areLoading, {appLaunch: true})})
        case appLaunchDone.type:
            return Object.assign({}, state,
                {areLoading: Object.assign({}, state.areLoading, {appLaunch: false}),
                areLoaded: Object.assign({}, state.areLoaded, {appLaunch: true})
            })
        case fontsStartLoading.type:
            return Object.assign({}, state,
                {areLoading: Object.assign({}, state.areLoading, {fonts: true}),
                areLoaded: Object.assign({}, state.areLoaded, {fonts: false})
            })
        case fontsDoneLoading.type:
            return Object.assign({}, state,
                {areLoading: Object.assign({}, state.areLoading, {fonts: false}),
                areLoaded: Object.assign({}, state.areLoaded, {fonts: true})
            })
        }
    return state
}

const nonEssentialLoadingReducer = (state, action) => {
    if (state === undefined) {
        state = {
            areLoading: {
                images: false,
                market: false,
            },
            areLoaded:  {
                images: false,
                market: false,
            }
        }
    }
    switch(action.type) {
        case imagesStartLoading.type:
            return Object.assign({}, state,
                {areLoading: Object.assign({}, state.areLoading, {images: true}),
                areLoaded: Object.assign({}, state.areLoaded, {images: false})
            })
        case imagesDoneLoading.type:
            return Object.assign({}, state,
                {areLoading: Object.assign({}, state.areLoading, {images: false}),
                areLoaded: Object.assign({}, state.areLoaded, {images: true})
            })
        case marketStartLoading.type:
            return Object.assign({}, state,
                {areLoading: Object.assign({}, state.areLoading, {market: true}),
                areLoaded: Object.assign({}, state.areLoaded, {market: false})
            })
        case marketDoneLoading.type:
            return Object.assign({}, state,
                {areLoading: Object.assign({}, state.areLoading, {market: false}),
                areLoaded: Object.assign({}, state.areLoaded, {market: true})
            })
        }
    return state
}
  
export default loadingReducer = combineReducers({
    essentialState: essentialLoadingReducer,
    nonEssentialState: nonEssentialLoadingReducer
})