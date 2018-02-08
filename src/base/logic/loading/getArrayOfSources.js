/*
  getArrayOfSources.js
    BettermentLabs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

export Function getArrayOfSources
  Input: callback:             called after images loaded 

local Function downloadAllAppImages
  Input: rawSourcesObject:      object from AppAssets.js that has paths to images to load 

*/
export default getArrayOfSources = (inputs) => {
  const rawSourcesObject = inputs.rawSourcesObject;
  var arrayOfImageSources = [];
	for(var key in rawSourcesObject) {
        if(rawSourcesObject.hasOwnProperty(key)) {
	        arrayOfImageSources.push(rawSourcesObject[key]);
	    }
    }
	return(arrayOfImageSources)
}