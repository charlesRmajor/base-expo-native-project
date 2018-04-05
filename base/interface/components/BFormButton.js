/*
  BFormButton.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BFormButton.js
  Description: Displays basic themed form button (like on iOS settings pages)

  Inputs: object 'props'
    includes all typical React & base project props
    onPress: function that pressing on button calls (should be redux store action)

  Outputs: 
    renders button per description above
*/
// IMPORTS
// Import React Modules
import React from 'react';

// Import Other App UI Elements
import BButton, {ButtonView, ButtonText} from '../../../base/interface/components/BButton';

const BRoundedButtonView = ButtonView.extend`
    borderWidth: ${({isPressed}) => isPressed ? '3px' : '2px'};
    borderRadius: 15px;
    `

export default BFormButton = (props) => {
    return(
        <BButton ButtonView={BRoundedButtonView} {...props} />
    )
}