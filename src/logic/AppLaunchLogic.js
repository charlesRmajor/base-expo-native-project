/*
  AppLaunchLogic.js
    CanonicalAppName
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
// import loadAppStyles from './loading/loadAppStyles';
import BaseAppLaunch from '../base/logic/BaseAppLaunchLogic';

// Import General Logic
// import {logVersionInfo} from '../logic/VersionInfo';
// import {appLaunchRan} from '../logic/store/loading';

// Import App Logic
// import {setAppLanguage} from './strings/setAppLanguage';
// import {downloadAllAppImages} from './loading/loadImages';
// import {loadUserInfoFromStorage} from './loading/asyncStorage';

// import {setAppStringsTo} from './store';

// here be our functions!
export default AppLaunch = (dispatch) => {
    BaseAppLaunch(dispatch || null);
}

// const loadAppStrings = (dispatch) => {
//     const setAppStringsToAction = setAppStringsTo();
//     dispatch && dispatch(setAppStringsToAction);
// }