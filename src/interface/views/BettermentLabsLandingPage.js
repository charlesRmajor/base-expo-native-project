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
import { View } from 'react-native';

// Import Other Node Modules

// Import Core Project Modules

// Import App Logic

// Import Other App UI Elements
import HeaderLarge from '../components/text/HeaderLarge';
import ImageWithAspect from '../components/ImageWithAspect';

const headerText = "Welcome to Betterment Labs's Base Expo/React-Native Project";

export default class BettermentLabsLandingPage extends React.Component {
    render() {
        const images = this.props.images;
        const imageLogo = images ? images.logoTextBlack || false : false;
  
      const logoImage = (
          <View
              style={{
                  flex:5
              }}
          >
          {imageLogo &&
              (<ImageWithAspect
                  source={imageLogo}
              />)}</View>);
  
        const mainView = 
                  (<View
                      style={{
                          flex:1,
                      }}
                    >
                      <View style={{flex:1}}/>
                      <HeaderLarge
                        styles={{viewStyles: {flex:10}}}
                        text={headerText}
                      />
                      <View style={{flex:1}}/>
                      {logoImage}
                      <View style={{flex:1}}/>
                  </View>)
      return ( mainView);
    }
  }