/*
  BController.js
    CanonicalAppName
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BController.js
  Description:  base controller to componentize
*/
// IMPORTS
// Import React Modules
import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Switch, AndroidBackButton } from 'react-router-native';

export default BController = (props) => {
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