/*
  ControllerBase.js
    CanonicalAppName
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component ControllerBase.js
  Description:  base controller to componentize
*/
// IMPORTS
// Import React Modules
import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Switch, AndroidBackButton } from 'react-router-native';

export default MainController = (props) => {
    return (
        (<NativeRouter>
            <AndroidBackButton>
                <Switch>
                    {props.children}
                </Switch>
            </AndroidBackButton>
        </NativeRouter>)
    )
}