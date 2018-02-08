/*
  setAppLanguage.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

export Function setAppLanguage
  Input: callback:             called after images loaded 

*/
// IMPORTS
// Import App Logic
import {setAppLanguageTo} from '../store';

export const setAppLanguage = (dispatch) => {
    Expo.Util.getCurrentLocaleAsync()
      .then((result) => {
          dispatch && dispatch(setAppLanguageTo(result));
    });
  }