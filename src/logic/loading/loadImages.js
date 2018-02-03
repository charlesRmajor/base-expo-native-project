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
import {images} from '../../AppAssets';

export const downloadAllAppImages = (callback) => {
	Expo.Asset.loadAsync(getArrayOfSources({rawSourcesObject: images}))
	  .then((result) => {
		callback && callback({newState: {images: images}});
	    });
}