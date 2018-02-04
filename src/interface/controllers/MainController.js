/*
  MainController.js
    CanonicalAppName
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component MainController.js
  Description:  main app launch logic
*/

// IMPORTS
// Import React Modules
import React from 'react';
import { View } from 'react-native';

// Import Other Node Modules

// Import Core Project Modules
import ControllerBase from './ControllerBase';
import BRoute from './BRoute';

// Import App Logic
import {isObject} from '../../logic/jsExtend/objectMerge';

// Import Other App UI Elements
import BettermentLabsLandingPage from '../views/BettermentLabsLandingPage';

export default class MainController extends React.Component {
  render() {
    const propsAllViewsNeed = {
        store: null,
        updateStore: null,
        styles: this.props.styles,
        images: this.props.images,
        strings: null
    }
    
    const ViewRouter =
    (<ControllerBase>
        <BRoute
            exact
            path="/"
            view={BettermentLabsLandingPage}
            {...propsAllViewsNeed}
            />            
    </ControllerBase>)

    const readyToRender = !isObject(this.props.essentialLoadingComplete) ? this.props.essentialLoadingComplete :
        (() => {for (const key in this.props.essentialLoadingComplete) { if (!this.props.essentialLoadingComplete[key]) {return false} else {return true}}})();
        // {readyToRender && ViewRouter}
    
    return (!readyToRender ? <View/> : ViewRouter);
  }
}