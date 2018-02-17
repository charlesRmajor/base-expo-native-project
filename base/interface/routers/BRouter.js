/*
  BRouter.js
    CanonicalAppName
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BRouter.js
  Description:  base controller to componentize
*/
// IMPORTS
// Import React Modules
import React from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NativeRouter, Switch, AndroidBackButton } from 'react-router-native';

// Import App Logic
import {objectMerge} from '../../logic/jsExtend/objectMerge';

export default BRouter = (props) => {
    const statusBarStyle = (props && props.styles && props.styles.statusBarStyle) ? props.styles.statusBarStyle : "light-content";
    return (
        (<NativeRouter>
            <AndroidBackButton>
            <StatusBar barStyle={statusBarStyle} />
                <Switch>
                    {props.children}
                </Switch>
            </AndroidBackButton>
        </NativeRouter>)
    )
}

const myRouter = (props) => {
    const currentView = null;//
    // props.location
    return(currentView);
}

const getPageForRoute = (route) => {

}

const getRouter = (routes) => {
    // const 
    return(
        <View style={{flex:1}}>

        </View>
    )
}

// export const getRouterWithStore = (mapPropsToStoreFunc) => {
//     export connect()
// }

/*

Router
CurrentView
Routes Object

RoutesObject(location) => createReactComponent

*/