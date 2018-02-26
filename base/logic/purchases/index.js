/*
  purchases/index.js - nativeBridge
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component 
  Description: functions enabling in-app-purchases
*/
// IMPORTS
// Import React Modules

// Import Other App Logic
import isFunction from '../../../base/logic/jsExtend/isFunction';
import {
    getMarketplaceFromAppStore,
    buyMarketplaceProductFromStore
    } from '../nativeBridge/nativeInAppPurchases';
import {
    isAttemptingToPurchase,
    isPurchased
    } from '../../../base/logic/store/marketplace';

export const getMarketplace = ({callback, productIDs}) => {
    getMarketplaceFromAppStore({
        callback: (result) => {
            if (isFunction(callback)) {
                callback(result);
            } else {
                console.log("No callback function to getMarketplace provided. Result is: ");
                console.log(result);
            }
            // callback && callback(result)
            console.log('getMarketplaceFromAppStore callback')},
        productArray: productIDs})
}

export const buyProduct = ({productID, productsArrayIndex, callback, dispatch}) => {
    const isAttemptingToPurchaseAction = isAttemptingToPurchase(productsArrayIndex);
    const isPurchased = isPurchased(productsArrayIndex);
    dispatch && dispatch(isAttemptingToPurchase);

}