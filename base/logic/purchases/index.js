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
    purchaseProduct,
    transactionFailed,
    consumeProduct
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

export default purchaseProductWithDispatch = ({callback, dispatch}) => {
    return(
        ({productID}) => {
            const isAttemptingToPurchaseAction = isAttemptingToPurchase(productID);
            dispatch && dispatch(isAttemptingToPurchaseAction);
            buyMarketplaceProductFromStore({
                productID: productID,
                callback: (result) => {
                    console.log("buyMarketplaceProductFromStore result:");
                    console.log(result);
                    if (result.error) {
                        const transactionFailedAction = transactionFailed(productID);
                        dispatch && dispatch(transactionFailedAction);
                    } else {
                        const purchaseProductAction = 
                            purchaseProduct({
                                productID: result.content.productIdentifier,
                                transactionID: result.content.transactionIdentifier
                            });
                        dispatch && dispatch(purchaseProductAction);
                    }
                    if (isFunction(callback)) {
                        callback(result);
                    } else {
                        console.log("No callback function to purchaseProductWithDispatch provided. Result is: ");
                        console.log(result);
                    }
                    console.log('buyMarketplaceProductFromStore callback')}       
            })
        }
    )
}

export const consumeProductWithDispatch = ({callback, dispatch}) => {
    return(
        ({productID}) => {
            const consumeProductAction = consumeProduct(productID);
            dispatch && dispatch(consumeProductAction);
            if (isFunction(callback)) {
                callback(true);
            } else {
                console.log("No callback function to consumeProductWithDispatch provided.");
            }
        }
    )
}

/*
result:

Object {
  "productIdentifier": "consumableProdID",
  "transactionIdentifier": "1000000380462355",
}

  "error": true,
  "errorMessage": "transaction_failed",

*/
