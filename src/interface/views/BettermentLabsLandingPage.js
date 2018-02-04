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

// Import Core Project Modules

// Import App Logic
import {getAlertWithVersionInfoContent} from '../../logic/VersionInfo';

// Import Other App UI Elements
import BView from './BView';
import BHeader from '../components/text/BHeader';
import ImageWithAspect from '../components/ImageWithAspect';

export default BettermentLabsLandingPage = (props) => {
    // getAlertWithVersionInfoContent();
        const styles = props.styles;
        const strings = props.strings;
        const images = props.images;
        const imageLogo = images ? images.logoTextWhite || false : false;

        const headerText = strings.title;
  
      const logoImage = (
          <BView
              style={{
                  flex:17,
                  justifyContent: 'flex-end',
                  marginBottom: '-2%'
              }}
          >
          {imageLogo &&
              (<ImageWithAspect
                  source={imageLogo}
              />)}</BView>);
  
        const headerStyles = styles;
        headerStyles.viewStyles = {flex:10};
        headerStyles.textStyles = {color: props.styles.color.highlight, fontSize: styles.fontSizes.large}; // fontSize: props.styles.fontSize.large

        const mainView = 
                  (<BView
                        style={{
                            backgroundColor: styles.color.background,
                            justifyContent: 'flex-end'
                        }}
                  >
                      <BView style={{flex:1}}/>
                      <BHeader
                        styles={headerStyles}
                        text={headerText}
                      />
                      <BView style={{flex:1}}/>
                      {logoImage}
                  </BView>)
      return ( mainView)
  }