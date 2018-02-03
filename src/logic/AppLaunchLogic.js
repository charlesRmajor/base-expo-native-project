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
import loadAppStyles from './loading/loadAppStyles';
import {downloadAllAppImages} from './loading/loadImages';

// Import General Logic
import objectMerge from './jsExtend/objectMerge';

// Import App Logic

// here be our functions!
export const AppLaunch = (inputs) => {
    // load fonts (essential)
    loadEssentials({
        loadingCompleteCallback: getStateSetCallback({callback: inputs.essentialLoadingCompleteCallback || null, newState: {essentialLoadingComplete: true}}),
        stateSetCallback: getStateSetCallback({callback: inputs.essentialLoadingCompleteCallback || null}),
        isDoneLoadingObject: inputs.isDoneLoadingObject || null
    });
    // load images (non-essential) 

    loadNonEssentials(getStateSetCallback({callback: inputs.nonEssentialLoadingCompleteCallback || null, newState: {nonEssentialLoadingComplete: true}}));
}

async function loadEssentials (inputs) {
    // Set App Language
    // await loadAppStrings(callback.stateSetCallback && callback.stateSetCallback);
    await loadAppStyles({callback: inputs.stateSetCallback, isDoneLoadingObject: inputs.isDoneLoadingObject || null});
    // callbacks.loadingCompleteCallback && callbacks.loadingCompleteCallback();
}

const loadNonEssentials = (callback) => {
    downloadAllAppImages(callback);
}

const getStateSetCallback = (inputs) => {
    return(
        (result) => {
            const newState = objectMerge((result? result.newState ? result.newState : {} : {}), (inputs.newState ? inputs.newState : {}));
            inputs.callback &&
                inputs.callback({
                    newState: newState,
                    stateSetCallback: (inputs.stateSetCallback ? inputs.stateSetCallback : (result) => console.log('stateSetCallback with result: '+result))
                })
        }
    )
}

// const setAppLanguage = () => {
//     var state = this.state;
//     state.Strings.setLanguage('en'); // default to English if for some reason app can't read device's language setting
//     this.setState(state);
//     Expo.Util.getCurrentLocaleAsync()
//       .then((result) => {
//         var state = this.state;
//         state.Strings.setLanguage(result);
//         this.setState(state);
//         console.log("app language read as: ");
//         console.log(result);
//     });
//   }