/*
  BRoute.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BRoute.js
  Description:
*/
// Import React Modules
import React from 'react';
import { Route } from 'react-router-native';

// Import App Logic
import objectMerge from '../../logic/jsExtend/objectMerge';
import getPageStrings from '../../logic/strings/stringsFiles';

export default BRoute = (props) => {
    const view = props.view;
    const allStrings = getPageStrings(view.name);
    const stringsWithLanguageSet = allStrings.setLanguage(props.language);
    LogRoute(view.name);
    const propsWithStrings = objectMerge({strings: allStrings}, props);
    return(
        <Route {...props} render={(routeProps) => {
            return React.createElement(view, objectMerge(routeProps || null, propsWithStrings || null))
          }}/>
    )
}

const LogRoute = (routeName) => {
    console.log("LogRoute: "+routeName);
}

