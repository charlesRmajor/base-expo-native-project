/*
  loadAppStyles.js
    CanonicalAppName
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

export Function downloadAllAppImages
  Input: callback:             called after images loaded 

local Function downloadAllAppImages
  Input: rawImageObject:      object from AppAssets.js that has paths to images to load 

*/
// IMPORTS
// Import React Modules
// import { Font } from 'expo';

// Import General Logic
import objectMerge from '../jsExtend/objectMerge';
import getArrayOfSources from './getArrayOfSources';

// Import Core Project Modules
import AppStyles, {defaultFontSet} from '../../interface/theming/AppStyles';
import getThemeFontSet from '../../interface/theming/getThemeFontSet';
import {rawImages, images} from '../../../src/AppAssets';
import {fontsStartLoading, fontsDoneLoading} from '../store/loading';
import {setAppStylesTo} from '../store';

// Import Current Font Set From App Properties
import ThemeFontSet from '../../../src/interface/theming/ThemeFont';
// Set App Fonts
// const ThemeFontSetIs = ChivoFontSet;//defaultFontSet; /* e.g. "ChivoFontSet" //*/
// const ThemeFontSetIs = defaultFontSet;//defaultFontSet; /* e.g. "ChivoFontSet" //*/

export default loadAppStyles = (dispatch) => {
  downloadAllFonts(dispatch || null);
}

const downloadAllFonts = (dispatch) => {
  dispatch(fontsStartLoading);
  const ThemeFontSetIs = ThemeFontSet ? ThemeFontSet : defaultFontSet;
  const FontsToLoad = getThemeFontSet(ThemeFontSetIs);
  const needsLoading = FontsToLoad.needsLoading;
  delete FontsToLoad.needsLoading;
  const LoadedAppStylesAction = setAppStylesTo(AppStyles({fontStyles: FontsToLoad}));
  dispatch && dispatch(LoadedAppStylesAction);
  const fontDownloadObject = getFontDownloadObject(ThemeFontSetIs);
  if (needsLoading) {
    downloadFonts({fontsObject: fontDownloadObject, callback: (result) => {if (result) {(dispatch && dispatch(fontsDoneLoading))}}});
  } else {
    dispatch(fontsDoneLoading);
  }
}

const getFontDownloadObject = (FontSet) => {
  const fontDownloadObject = {};
	for(var key in FontSet) {
    if(FontSet.hasOwnProperty(key) && FontSet[key].name && FontSet[key].path) {
      fontDownloadObject[FontSet[key].name] = FontSet[key].path;
    }
  }
  return(fontDownloadObject);
}

async function downloadFonts (inputs) {
  if (inputs.fontsObject == null || inputs.fontsObject == undefined) {return};
  await Expo.Font.loadAsync(inputs.fontsObject);
  inputs.callback && inputs.callback(true);
}