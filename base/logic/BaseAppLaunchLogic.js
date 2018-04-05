/*
  BaseAppLaunch.js
    BettermentLabs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

export Function AppLaunch
  Description:  main app launch logic
  Inputs: object containing:
    essentialLoadingCompleteCallback:      callback function called when essential AppLaunch loading (e.g. fonts - must be loaded before first render) is complete.
        Inputs: object containing:
            newState:                      newState object to update main App state
            stateSetCallback:              callback to call when app is finished updating state to newState

    appLoadingCompleteCallback:             callback function called when all AppLaunch loading is complete
        Inputs: object containing:
            newState:                      newState object to update main App state
            stateSetCallback:              callback to call when app is finished updating state to newState

    Outputs: see callbacks in the inputs above
*/
// IMPORTS
// Import React Modules

// Import Other Node Modules
// import {Asset} from 'expo';

// Import Core Project Modules
import loadAppStyles from './loading/loadAppStyles';

// Import General Logic
import {logVersionInfo} from '../logic/VersionInfo';
import {appLaunchStart, appLaunchDone} from '../logic/store/loading';

// Import App Logic
import {setAppLanguage} from './strings/setAppLanguage';
import {downloadAllAppImages} from './loading/loadImages';
// import {
//     OneSignalAppSubscriptions,
//     OneSignalAppUnSubscriptions
//     } from './notifications/OneSignalSupport';
import loadMarketplace from './loading/loadMarketplace';
// import {isCurrentlyRunningInExpoClient} from '../../base/logic/VersionInfo';

// import {setAppStringsTo} from './store';

// here be our functions!
export default BaseAppLaunch = (dispatch) => {
    dispatch && dispatch(appLaunchStart);
    logVersionInfo();
    loadAppStyles(dispatch || null);
    setAppLanguage(dispatch || null);
    downloadAllAppImages(dispatch || null);
    loadMarketplace(dispatch || null);
    dispatch && dispatch(appLaunchDone);
}

export const BaseAppSubscriptions = (dispatch) => {
    // if (!isCurrentlyRunningInExpoClient()) {
    //     console.log('OneSignalAppSubscriptions');
        // const OneSignalAppSubscriptions = require('./notifications/OneSignalSupport');
        // OneSignalAppSubscriptions(dispatch || null);
    // }
    // !isCurrentlyRunningInExpoClient() && OneSignalAppSubscriptions(dispatch || null);
}

export const BaseAppUnSubscriptions = (dispatch) => {
    // if (!isCurrentlyRunningInExpoClient()) {
        // const OneSignalAppUnSubscriptions = require('./notifications/OneSignalSupport');
        // OneSignalAppUnSubscriptions(dispatch || null);
    // }
    // !isCurrentlyRunningInExpoClient() && OneSignalAppUnSubscriptions(dispatch || null);
}