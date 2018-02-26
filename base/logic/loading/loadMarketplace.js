/*
  loadMarketplace.js
    BettermentLabs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

export Function loadMarketplace
  Input: callback: called after marketplace loaded 
*/
// IMPORTS
// Import General Logic

// Import App Logic
import {getMarketplace} from '../purchases';
import {marketPlaceIsLoading,
    marketPlaceDoneLoading,
    marketPlaceFailedLoading,
    saveLoadedMarketplaceAction
    } from '../store/marketplace';
import productIDs from '../../../src/logic/purchases';

export default loadMarketplace = (dispatch) => {
    dispatch && dispatch(marketPlaceIsLoading);
    getMarketplace({productIDs: productIDs,
        callback: (result) => {
        if (result.error) {
            dispatch && dispatch(marketPlaceFailedLoading);
            console.log("Failed loading marketplace from app store with error:");
            console.log(result.errorMessage)
        } else {
            const thisSaveLoadedMarketplaceAction = saveLoadedMarketplaceAction(result.content)
            dispatch && dispatch(marketPlaceDoneLoading);
            dispatch && dispatch(thisSaveLoadedMarketplaceAction);
        }
    }})
}

/*
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
}*/