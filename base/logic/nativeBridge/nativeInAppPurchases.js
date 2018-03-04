/*
  nativeInAppPurchases.js - nativeBridge
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component nativeInAppPurchases.js
  Description: Functions connecting to native in app purchase code
*/
// IMPORTS
// Import React Modules
import {Platform, NativeModules} from 'react-native';

// Import Other App Logic
import isFunction from '../../../base/logic/jsExtend/isFunction';

export const getMarketplaceFromAppStore = ({callback, productArray}) => {
    console.log("updating Market with product array:");
    console.log(productArray);
	if (NativeModules.InAppPurchasesModule != undefined) {
		let InAppPurchasesModule = NativeModules.InAppPurchasesModule;
		if (InAppPurchasesModule.loadProducts != undefined) {
			InAppPurchasesModule.loadProducts(productArray, (error, products) => {
                if (isFunction(callback)) {
                    if (error) {
                        callback({
                            error: true,
                            errorMessage: error
                          })      
                    } else {
                        callback({
                            error: false,
                            errorMessage: '',
                            content: products
                          })      
                    }
                  } else {
                    console.log("No callback function to getMarketplaceFromAppStore provided. Result is: ");
                    console.log("error: ");
                    console.log(error);
                    console.log("products");
                    console.log(products);
                }
			})
        } else {
            console.log('NativeModules.InAppPurchasesModule.loadProducts is not found');
        }
    } else {
        console.log('NativeModules.InAppPurchasesModule is not found');
    }
}

export const buyMarketplaceProductFromStore = ({productID, callback}) => {
    console.log("buyMarketplaceProductFromStore productID");
    console.log(productID);
    if (NativeModules.InAppPurchasesModule != undefined) {
		let InAppPurchasesModule = NativeModules.InAppPurchasesModule;
		if (InAppPurchasesModule.purchaseProduct != undefined) {
			InAppPurchasesModule.purchaseProduct(productID, (error, response) => {
                if (isFunction(callback)) {
                    if (error) {
                        callback({
                            error: true,
                            errorMessage: error
                          })      
                    } else {
                        callback({
                            error: false,
                            errorMessage: '',
                            content: response
                          })      
                    }
                  } else {
                    console.log("No callback function to updateMarket provided. Result is: ");
                    console.log("error: ");
                    console.log(error);
                    console.log("response");
                    console.log(response);
                }
			});			
		} else {
            console.log('NativeModules.InAppPurchasesModule.loadProducts is not found');
			}
		} else {
            console.log('NativeModules.InAppPurchasesModule is not found');
		}
}