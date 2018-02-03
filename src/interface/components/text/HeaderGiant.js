/*
  HeaderGiant.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component HeaderGiant.js
  Description:  
*/
// Import React Modules
import React from 'react';

// Import Other Node Modules

// Import Core Project Modules
import {defaultAppStyles} from '../../theming/AppStyles';
import HeaderBase from './HeaderBase';

// Import App Logic
import {mergeStyles} from '../../../logic/jsExtend/objectMerge';

// Import Other App UI Elements

export default HeaderGiant = (props) => {
    const AppStyles = props.AppStyles || defaultAppStyles;

    const styles = {
        viewStyles: {

        },
        textStyles: {
            fontSize: AppStyles.fontSizes.giant,
        }
    }
    const newProps = mergeStyles(styles, props);
    const view = <HeaderBase {...newProps} />
    return(view)
}