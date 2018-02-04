/*
  BText.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BText.js
  Description:  
*/
// Import React Modules
import React from 'react';
import { Text, View } from 'react-native';

// Import Other Node Modules

// Import Core Project Modules
import {defaultAppStyles} from '../../theming/AppStyles';

// Import App Logic
import {mergeStyles} from '../../../logic/jsExtend/objectMerge';

// Import Other App UI Elements

export default BText = (props) => {
    const AppStyles = props.AppStyles || defaultAppStyles;

    const styles = {
        viewStyles: {
            flex:1,
        },
        textStyles: {
            flex: 1,
            fontSize: AppStyles.fontSizes.base,
            fontFamily: AppStyles.fontStyles.regular,
            color: AppStyles.color.base
        }
    }
    const newProps = mergeStyles(styles, props);
    const view = (<View style={newProps.styles.viewStyles}><Text style={newProps.styles.textStyles}>{newProps.text}</Text></View>);
    return(view)
}