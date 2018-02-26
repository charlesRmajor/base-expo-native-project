/*
  marketplace.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component marketplace.js
  Description: Functions related to storing/tracking in-app-purchase ("marketplace")
*/
// IMPORTS
// Action Definitions
export const marketPlaceIsLoading = {type: 'MARKETPLACE_IS_LOADING'};
export const marketPlaceDoneLoading = {type: 'MARKETPLACE_IS_DONE_LOADING'};
export const marketPlaceFailedLoading = {type: 'MARKETPLACE_FAILED_LOADING'};
export const saveLoadedMarketplaceAction = (productsArray) => {return({type: 'SAVE_LOADED_MARKETPLACE', productsArray: productsArray})};

export const isAttemptingToPurchase = (productsArrayIndex) => {return({type: 'IS_ATTEMPTING_TO_PURCHASE', productsArrayIndex: productsArrayIndex})}
export const isPurchased = (productsArrayIndex) => {return({type: 'IS_PURCHASE', productsArrayIndex: productsArrayIndex})}

const marketplaceReducer = (state, action) => {
    if (state === undefined) {
        state = {
            MarketPlaceIsLoading: false,
            MarketPlaceDoneLoading: false,
            MarketPlaceFailedLoading: false,
            products: []
        }
    }
    const products = state.products.slice();
    switch(action.type) {
        case marketPlaceIsLoading.type:
            return Object.assign({}, state, {MarketPlaceIsLoading: true})
        case marketPlaceDoneLoading.type:
            return Object.assign({}, state, {MarketPlaceIsLoading: false, MarketPlaceDoneLoading: true})
        case marketPlaceFailedLoading.type:
            return Object.assign({}, state, {MarketPlaceIsLoading: false, MarketPlaceFailedLoading: true})
        case saveLoadedMarketplaceAction().type:
            return Object.assign({}, state, {products: action.productsArray})
        case isAttemptingToPurchase().type:
            products[action.productsArrayIndex].isAttemptingToPurchase = true;
            return Object.assign({}, state, {products: products})
        case isPurchased().type:
            products[action.productsArrayIndex].isPurchased = true;
            return Object.assign({}, state, {products: products})
    }
    return state
}

export const marketplace = {name: 'marketplaceState', reducer: marketplaceReducer};

export default setMarketplaceSection = {
    marketplace: marketplace
}