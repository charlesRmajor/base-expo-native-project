/*
  BettermentLabsLandingPage.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BettermentLabsLandingPage.js
  Description:  landing page
*/

// IMPORTS
// Import React Modules
import React from 'react';

// Import Other Node Modules
import styled from 'styled-components';

// Import Core Project Modules

// Import App Logic

// Import Other App UI Elements
import ImageWithAspect from '../components/ImageWithAspect';
import {defaultAppStyles} from '../theming/AppStyles';

// Interface Styling
const MainView = styled.View`flex:1;
    background: ${({theme}) => (theme.color.background)};
    justify-content: flex-end`;

const ViewSpacer = styled.View`flex:1`;

const Header = styled.Text`flex:10;
    fontFamily: ${({theme}) => theme.fontStyles.bold};
    color: ${({theme}) => theme.color.highlight};
    fontSize: ${({theme}) => theme.fontSizes.large}`

const ImageView = styled.View`flex:17;
    justify-content: flex-end;
    marginBottom: -2%`
    
export default BettermentLabsLandingPage = (props) => {
        const style = props.styles || defaultAppStyles;
        const strings = props.strings || null;
        const images = props.images || null;
        const imageLogo = images ? images.logoTextWhite || false : false;

        const logoImage = (<ImageView>{imageLogo && (<ImageWithAspect source={imageLogo} />)}</ImageView>);

        const mainView = 
            (<MainView theme={style}>
                <ViewSpacer/>
                <Header theme={style}>{strings.title}</Header>
                <ViewSpacer/>
                {logoImage}
            </MainView>)
      return ( mainView)
  }