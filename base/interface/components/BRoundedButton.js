/*
  BRoundedButton.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BRoundedButton.js
  Description: Displays basic themed rounded button

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
import BButton, {ButtonView} from '../../../base/interface/components/BButton';

const BRoundedButtonView = ButtonView.extend`
    borderWidth: 2px;
    borderRadius: 15px;
    `

export default BRoundedButton = (props) => {
    return(
        <BButton ButtonView={BRoundedButtonView} {...props} />
    )
}