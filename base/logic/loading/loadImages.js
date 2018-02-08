/*
  loadImages.js
    BettermentLabs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

export Function downloadAllAppImages
  Input: callback:             called after images loaded 

local Function downloadAllAppImages
  Input: rawSourcesObject:      object from AppAssets.js that has paths to images to load 

*/
// IMPORTS
// Import General Logic
import getArrayOfSources from './getArrayOfSources';

// Import Core Project Modules
import {images} from '../../../src/AppAssets';
import {setAppImagesTo} from '../store/';
import {imagesDoneLoading} from '../store/loading';

export const downloadAllAppImages = (dispatch) => {
	Expo.Asset.loadAsync(getArrayOfSources({rawSourcesObject: images}))
	  .then((result) => {
      if (result) {
        if (dispatch) {
          const setAppImagesToAction = setAppImagesTo(images);
          dispatch(setAppImagesToAction);
          dispatch(imagesDoneLoading);
        }
      } });
}