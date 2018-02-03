/*
  MainController.js
    CanonicalAppName
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component MainController.js
  Description:  main app launch logic
  Inputs: object containing:
    essentialLoadingCompleteCallback:      callback function called when essential AppLaunch loading (e.g. fonts) is complete.
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
import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Switch, AndroidBackButton } from 'react-router-native';

// Import Other Node Modules

// Import Core Project Modules

// Import App Logic
import {isObject} from '../../logic/jsExtend/objectMerge';

// Import Other App UI Elements
import BettermentLabsLandingPage from '../views/BettermentLabsLandingPage';
// import ImageWithAspect from '../components/ImageWithAspect';

export default class MainController extends React.Component {
  render() {
    const readyToRender = !isObject(this.props.essentialLoadingComplete) ? this.props.essentialLoadingComplete :
        (() => {for (const key in this.props.essentialLoadingComplete) { if (!this.props.essentialLoadingComplete[key]) {return false} else {return true}}})();

    const mainView = !readyToRender ? <View/> :
        (<BettermentLabsLandingPage
            images={this.props.images}
        />)
    return ( mainView);
  }
}