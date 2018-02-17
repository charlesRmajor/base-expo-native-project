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
import { connect } from 'react-redux';

// Import App Logic
import objectMerge from '../../logic/jsExtend/objectMerge';
import getPageStrings from '../../logic/strings/getPageStrings';

export default BRoute = (props) => {
    const view = props.view;
    const allStrings = getPageStrings(view.name);
    allStrings && props.strings && props.strings.language && allStrings.setLanguage(props.strings.language);
    LogRoute(view.name);
    const propsWithStrings = objectMerge({strings: allStrings}, props);
    const viewToRender = (props.mapStateToProps) ? connect(props.mapStateToProps)(view) : view;
    const path = props.path ? props.path : "/"+view.name;
    return(
        <Route
            path={path}
            render={(routeProps) => {
                return React.createElement(viewToRender, objectMerge(routeProps || null, propsWithStrings || null))
          }}/>
    )
}

const LogRoute = (routeName) => {
    console.log("LogRoute: "+routeName);
}

