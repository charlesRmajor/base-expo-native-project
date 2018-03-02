/*
  SwipeableRouter.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component SwipeableRouter.js
  Description:  main app controller
  Essentials:

  Inputs: N/A
  Outputs: N/A (your app on the screen!)
*/

// IMPORTS
// Import React Modules
import React from 'react';
import { connect } from 'react-redux';

// Import Other Node Modules

// Import Core Project Modules
import {allStoreSections} from '../../../base/logic/store';
import {getStoreSection,
    getRouterGoTo,
    getRouterGoBack,
    getRouterGoForward,
    getRouterReducer,
    getFirstAvailableRoute,
    getCurrentView,
    getFirstAvailableKey,
    LogRoute
} from '../../../base/logic/store/RouterStoreHelper';

// Import App Logic

// Import Other App UI Elements


// const Router = ({routerName, routes}) => {
//     const routesObject = getRoutesObjectFromArray({routesArray: routes});
//     const storeSection = getStoreSection({routerName: routerName});

//     const CurrentView = getCurrentView({
//         view: this.props.router.location.view,
//         routeProps: this.props});

//     return CurrentView
// }

export default SwipeableRouter = ({routerName, routes}) => {
    // const routesObject = getRoutesObjectFromArray({routesArray: routes});
    // const storeSection = getStoreSection({routerName: routerName});

    // const CurrentView = getCurrentView({
    //     view: this.props.router.location.view,
    //     routeProps: this.props});

    

    // const mapStateToProps = function(store) {
    //     return({router: allStoreSections[getFirstAvailableKey(storeSection)]})
    // }
    
    // const ThisRouter = Router({routerName: routerName, routes: routes});
    // connect(mapStateToProps)(ThisRouter);
}