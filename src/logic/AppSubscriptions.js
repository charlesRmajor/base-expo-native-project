/*
  AppLaunchLogic.js
    CanonicalAppName
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

export Function AppSubscribe
  Description:  main app subscriptions
  Inputs: object containing:
    Inputs: object containing:
        newState:                      newState object to update main App state
        stateSetCallback:              callback to call when app is finished updating state to newState

export Function AppUnSubscribe
  Description:  main app un-subscriptions
  Inputs: object containing:
    Inputs: object containing:
        newState:                      newState object to update main App state
        stateSetCallback:              callback to call when app is finished updating state to newState

    Outputs: see callbacks in the inputs above
*/

export const AppSubscribe = (callback) => {
    callback && callback({newState: {appIsFullySubscribed: true}, stateSetCallback: (result) => console.log('AppSubscribe state set callback response: '+result)})
}

export const AppUnSubscribe = (callback) => {
    callback && callback({newState: {appIsFullySubscribed: false}, stateSetCallback: (result) => console.log('AppUnSubscribe state set callback response: '+result)})
}