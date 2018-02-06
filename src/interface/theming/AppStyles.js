/*
  AppStyles.js
  Betterment Labs Base Expo-Native Project
  Created by Charles Major on 02/01/18. 
  Copyright © 2018 Betterment Labs, LLC. All rights reserved.

  Use :
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
THIS FILE SHOULDN'T NEED TO BE CHANGED

TO UPDATE STYLES:
    COLORS:
        Use ThemeColors.js

    FONTS:
        Use loadAppStyles.js

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// IMPORTS
// Import React Modules
import {Platform} from 'react-native';
import Dimensions from 'Dimensions';

// Import Other Node Modules

// Import Core Project Modules
import getThemeFontSet from './getThemeFontSet';
import {defaultAndroidFonts, defaultIosFonts} from './fontSets/defaultFonts';
import ThemeColors from './ThemeColors';

// Import General Logic
import objectMerge from '../../logic/jsExtend/objectMerge';

// Import App Logic

export const defaultFontSet = (Platform.OS === 'ios') ? defaultIosFonts : defaultAndroidFonts;

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
// const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1 ;
// const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1 ;
const ratioX = x/320;
const ratioY = y/480;

// We set our base font size value
const base_unit = 15;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function 
function em(value) {
  return unit * value;
}

const getDefaultAppStyles = () =>{
    const FontSet = getThemeFontSet(defaultFontSet);    
    return(
        {color: {
                background: ThemeColors.background,
                bodyText: ThemeColors.bodyText,
                title: ThemeColors.title,
                secondary: ThemeColors.secondary,
                tertiary: ThemeColors.tertiary,
                highlight: ThemeColors.highlight,
                detailText: ThemeColors.detailText,
                quaternary: ThemeColors.quaternary,
            },
            statusBarHeight: 20,
            statusBarStyle: 'light-content',
            widthMultiplier: ratioX,
            heightMultiplier: ratioY,
            fontSizes: {
                base: em(1), //fixed
                small: em(0.75),
                tiny: em(0.5),
                medium: em(1.4), // fixed
                large: em(2.1),
                giant: em(3), // fixed
            },
            fontStyles: {
                regular: FontSet.regular,
                black: FontSet.black,
                blackItalic: FontSet.blackItalic,
                bold: FontSet.bold,
                boldItalic: FontSet.boldItalic,
                italic: FontSet.italic,
                light: FontSet.light,
                lightItalic: FontSet.lightItalic,
}})}

export const defaultAppStyles = getDefaultAppStyles();

export default AppStyles = (styleOverrides) =>{ // styleOverrides = {} for default styles
    const styles = objectMerge(defaultAppStyles,styleOverrides);
    return(styles)
}