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
import {getAlertWithVersionInfoContent} from '../../logic/VersionInfo';

// Import Other App UI Elements
import ImageWithAspect from '../components/ImageWithAspect';

// Interface Styling
const MainView = styled.View`
    background: ${p => p.theme.color.background};
    justify-content: flex-end;
    flex: 1
    `;

const ViewSpacer = styled.View`
    flex:1
`;

const Header = styled.Text`
    flex:10;
    fontFamily: ${p => p.theme.fontStyles.bold};
    color: ${p => p.theme.color.highlight};
    fontSize: ${p => p.theme.fontSizes.large}
`

const ImageView = styled.View`
    flex:17;
    justify-content: flex-end;
    marginBottom: -2%;
`
    
export default BettermentLabsLandingPage = (props) => {
    // getAlertWithVersionInfoContent();
        const style = props.styles || null;
        const strings = props.strings || null;
        const images = props.images || null;
        const imageLogo = images ? images.logoTextWhite || false : false;

        const headerText = strings.title;

        const logoImage = (
          <ImageView>
          {imageLogo &&
              (<ImageWithAspect
                  source={imageLogo}
              />)}</ImageView>);
  
              const mainView = 
                  (<MainView theme={style}>
                      <ViewSpacer/>
                      <Header theme={style}>{headerText}</Header>
                      <ViewSpacer/>
                      <ViewSpacer/>
                      {logoImage}
                  </MainView>)
      return ( mainView)
  }