/*
  HeaderBase.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component HeaderBase.js
  Description:  
*/
// Import React Modules
import React from 'react';

// Import Other Node Modules

// Import Core Project Modules
import {defaultAppStyles} from '../../theming/AppStyles';
import TextBase from './TextBase';

// Import App Logic
import {mergeStyles} from '../../../logic/jsExtend/objectMerge';

// Import Other App UI Elements

export default HeaderBase = (props) => {
    const AppStyles = props.AppStyles || defaultAppStyles;

    const styles = {
        viewStyles: {

        },
        textStyles: {
            flex: 1,
            alignSelf: 'center',
            marginLeft: '3%',
            marginRight: '3%',
            fontSize: AppStyles.fontSizes.medium,
            fontFamily: AppStyles.fontStyles.bold,
            color: AppStyles.color.highlight
        }
    }
    const newProps = mergeStyles(styles, props);
    const view = <TextBase {...newProps} />
    return(view)
}