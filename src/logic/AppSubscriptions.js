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

import {
    BaseAppSubscriptions,
    BaseAppUnSubscriptions
    } from '../../base/logic/BaseAppLaunchLogic';

export const AppSubscribe = (dispatch) => {
    BaseAppSubscriptions(dispatch || null);
}

export const AppUnSubscribe = (dispatch) => {
    BaseAppUnSubscriptions(dispatch || null);
}