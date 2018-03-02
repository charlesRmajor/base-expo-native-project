/*
  baseMainView.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component LocationView.js
  Description:
    Displays the device's current location
*/

// IMPORTS
// Import React Modules
import React from 'react';

// Import Other Node Modules
import styled, {ThemeProvider} from 'styled-components';

// Import Core Project Modules

// Import App Logic

// Import Other App UI Elements
import {defaultAppStyles} from '../../../base/interface/theming/AppStyles';

// Interface Styling
const MainView = styled.View`flex:1;
    background: ${({theme}) => (theme.color.background)};
    justify-content: flex-end`;

const ViewSpacer = styled.View`flex:1`;
    
export default baseMainView = (props) => {
        const style = props.styles || defaultAppStyles;
        const strings = props.strings || null;
        const images = props.images || null;
        const imageLogo = images ? images.logoTextWhite || false : false;
        
        const mainView = 
            (<ThemeProvider theme={style}>
                <MainView>
                    <ViewSpacer/>
                    {props.children}
                    <ViewSpacer/>
                </MainView>
            </ThemeProvider>
            )
      return ( mainView)
  }