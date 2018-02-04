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
import { Font } from 'expo';

// Import General Logic
import objectMerge from '../jsExtend/objectMerge';
import getArrayOfSources from './getArrayOfSources';

// Import Core Project Modules
import AppStyles, {defaultFontSet} from '../../interface/theming/AppStyles';
import getThemeFontSet from '../../interface/theming/getThemeFontSet';
import ChivoFontSet from '../../interface/theming/fontSets/ChivoFontSet';
import {rawImages, images} from '../../AppAssets';

// Set App Fonts
const ThemeFontSetIs = ChivoFontSet;//defaultFontSet; /* e.g. "ChivoFontSet" //*/
// const ThemeFontSetIs = defaultFontSet;//defaultFontSet; /* e.g. "ChivoFontSet" //*/
const fontsLoadedObjectKey = 'fontsLoaded';

export default loadAppStyles = (inputs) => {
  const callback = inputs.callback ? inputs.callback : null;
  downloadAllFonts({callback: callback, isDoneLoadingObject: inputs.isDoneLoadingObject || null});
}

const downloadAllFonts = (inputs) => {
  const callback = inputs.callback ? inputs.callback : null;
  const FontsToLoad = getThemeFontSet(ThemeFontSetIs);
  const needsLoading = FontsToLoad.needsLoading;
  delete FontsToLoad.needsLoading;
  const LoadedAppStyles = AppStyles({fontStyles: FontsToLoad});
  const newState = {styles: LoadedAppStyles};
  if (inputs.isDoneLoadingObject) {
    const tempField = {};
    tempField[fontsLoadedObjectKey] = false;
    const tempState = {};
    tempState[inputs.isDoneLoadingObject] = tempField;
    callback && callback({newState: tempState});
    const newTempField = {};
    newTempField[fontsLoadedObjectKey] = true;
    const newTempState = {};
    newTempState[inputs.isDoneLoadingObject] = newTempField;
    newState[inputs.isDoneLoadingObject] = newTempField;
  }
  if (needsLoading) {
    const fontDownloadObject = getFontDownloadObject(ThemeFontSetIs);
    downloadFonts({
      fontsObject: fontDownloadObject,
      callback: callback,
      newState: newState
    });
    } else {
      callback && callback({newState: newState});
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
  await Font.loadAsync(inputs.fontsObject);
  (inputs.callback && inputs.callback(inputs.newState ? {newState: inputs.newState} : null))
}