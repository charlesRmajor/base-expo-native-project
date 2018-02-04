/*
  App.js
    CanonicalAppName
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

export Component App.js
  Description:  main app insertion point
  Essentials:
          AppLaunchLogic.js   ->  runs in componentWillMount()
          MainController.js   ->  return in render()

  Inputs: N/A
  Outputs: N/A (your app on the screen!)
*/

// IMPORTS
// Import React Modules
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// Import Other Node Modules

// Import Core Project Modules

// Import General Logic

// Import App Logic
import {AppLaunch} from './src/logic/AppLaunchLogic.js';
import {AppSubscribe, AppUnSubscribe} from './src/logic/AppSubscriptions.js';

// Import Other App UI Elements
import MainController from './src/interface/controllers/MainController';

const getSetStateCallbackFunc = (thisThis) => {return((result) => {console.log("thisThis callback result.newState: "+JSON.stringify(result.newState)); thisThis.setState(result.newState, result.stateSetCallback && result.stateSetCallback())})}

export default class App extends React.Component {
  state = {
      essentialLoadingComplete: false, //updated by AppLaunch
      nonEssentialLoadingComplete: false //updated by AppLaunch
  }

  componentWillMount() {
    AppLaunch({
      isDoneLoadingObject: 'essentialLoadingComplete',
      essentialLoadingCompleteCallback: getSetStateCallbackFunc(this),
      nonEssentialLoadingCompleteCallback: getSetStateCallbackFunc(this)});
  }

  componentDidMount() {
    AppSubscribe(getSetStateCallbackFunc(this));
  }

  componentWillUnmount() {
    AppUnSubscribe(getSetStateCallbackFunc(this));
  }

  render() {
    return (
      <MainController
        essentialLoadingComplete={this.state.essentialLoadingComplete || false}
        nonEssentialLoadingComplete={this.state.nonEssentialLoadingComplete || false}
        images={this.state.images || null}
        styles={this.state.styles || null}
        language={this.state.appLanguage}
      />
    );
  }
}