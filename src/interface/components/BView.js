/*
  BView.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BView.js
  Description:  landing page
*/

// IMPORTS
// Import React Modules
import React from 'react';
import { View, StatusBar } from 'react-native';

// Import Other Node Modules

// Import Core Project Modules

// Import App Logic
import objectMerge from '../../logic/jsExtend/objectMerge';

// Import Other App UI Elements
import ImageWithAspect from '../components/ImageWithAspect';

export default BView = (props) => {
    const defaultViewStyle = {
        flex:1,
    }

    //         statusBarStyle: "light-content"


    const styleToUse = objectMerge(defaultViewStyle, props.style);
    const statusBarStyle = styleToUse.statusBarStyle ? styleToUse.statusBarStyle : "light-content";

    return(
        <View style={styleToUse}>
            <StatusBar
                barStyle={statusBarStyle}
                />
            {props.children}
        </View>
    )
  }