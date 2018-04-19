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

export const isAttemptingToPurchase = (productID) => {return({type: 'IS_ATTEMPTING_TO_PURCHASE', productID: productID})};
export const transactionFailed = (productID) => {return({type: 'TRANSACTION_FAILED', productID: productID})};
export const cancelTransaction = (productID) => {return({type: 'CANCEL_TRANSACTION', productID: productID})};
export const purchaseProduct = ({productID, transactionID}) => { return({type: 'PURCHASE_PRODUCT', productID: productID, transactionID: transactionID})};
export const consumeProduct = (productID) => {return({type: 'CONSUME_PRODUCT', productID: productID})};

const marketplaceReducer = (state, action) => {
    // console.log("action");
    // console.log(action);
    // console.log("state");
    // console.log(state);
    if (state === undefined) {
        state = {
            MarketPlaceIsLoading: false,
            MarketPlaceDoneLoading: false,
            MarketPlaceFailedLoading: false,
            MarketPlaceProducts: [],
            AttemptedTransactions: [],
            FailedTransactions: [],
            CanceledTransactions: [],
            PurchasedProducts: [],
            ConsumedProducts: []
        }
    }
    // const products = state.MarketPlaceProducts.slice();
    // const thisProductObjectIndex = findKeyValueInArrayOfObjects({
    //     key: 'identifier',
    //     keyValue: action.productID,
    //     array: products
    //     });
    switch(action.type) {
        case marketPlaceIsLoading.type:
            return Object.assign({}, state, {MarketPlaceIsLoading: true})

        case marketPlaceDoneLoading.type:
            return Object.assign({}, state, {MarketPlaceIsLoading: false, MarketPlaceDoneLoading: true})

        case marketPlaceFailedLoading.type:
            return Object.assign({}, state, {MarketPlaceIsLoading: false, MarketPlaceFailedLoading: true})

        case saveLoadedMarketplaceAction().type:
            return Object.assign({}, state, {MarketPlaceProducts: action.productsArray})

        case isAttemptingToPurchase().type:
            const attemptedTransactions = state.AttemptedTransactions.slice();
            attemptedTransactions.push({
                productID: action.productID,
                dateTime: {attempted: JSON.stringify(Date.now())}
                });
            return Object.assign({}, state, {AttemptedTransactions: attemptedTransactions});

        case transactionFailed().type:
            const resultingFailedArrays = moveProduct({
                fromArray1: state.AttemptedTransactions.slice(),
                toArray2: state.FailedTransactions.slice(),
                forProductID: action.productID,
                dateTimeLabel: 'failed'
                });
            return Object.assign({}, state, {
                AttemptedTransactions: resultingFailedArrays.array1,
                FailedTransactions: resultingFailedArrays.array2})

        case cancelTransaction().type:
            const resultingCanceledArrays = moveProduct({
                fromArray1: state.AttemptedTransactions.slice(),
                toArray2: state.CanceledTransactions.slice(),
                forProductID: action.productID,
                dateTimeLabel: 'canceled'
                });
            return Object.assign({}, state, {
                AttemptedTransactions: resultingCanceledArrays.array1,
                CanceledTransactions: resultingCanceledArrays.array2})

        case purchaseProduct({productID: null, transactionID: null}).type:
            const resultingPurchasedArrays = moveProduct({
                fromArray1: state.AttemptedTransactions.slice(),
                toArray2: state.PurchasedProducts.slice(),
                forProductID: action.productID,
                dateTimeLabel: 'purchased'
                });
            return Object.assign({}, state, {
                AttemptedTransactions: resultingPurchasedArrays.array1,
                PurchasedProducts: resultingPurchasedArrays.array2})

        case consumeProduct().type:
            const resultingConsumedArrays = moveProduct({
                fromArray1: state.PurchasedProducts.slice(),
                toArray2: state.ConsumedProducts.slice(),
                forProductID: action.productID,
                dateTimeLabel: 'consumed'
                });
            return Object.assign({}, state, {
                PurchasedProducts: resultingConsumedArrays.array1,
                ConsumedProducts: resultingConsumedArrays.array2})
    }
    return state
}

const findKeyValueInArrayOfObjects = ({key, keyValue, array}) => {
    if (!array || !array.length) {return null}
    for (index = 0; index < array.length; index++) {
        if (array[index][key] == keyValue) {
            return index
        }
    }
}

const moveProduct = ({fromArray1, toArray2, forProductID, dateTimeLabel}) => {
    // FIRST: find product position in array1
    const objectIndex = findKeyValueInArrayOfObjects({
        key: 'identifier',
        keyValue: forProductID,
        array: fromArray1 //newAttemptedTransactionsForFailed
        });
    // if not found, return
    if (objectIndex < 0) {
        console.log('productID: '+forProductID+' does not exist in array1. Nothing is being done.');
        return({array1: null, array2: null})
    }
    // SECOND: remove product from array1 of store and save
    const thisProduct = fromArray1.splice(objectIndex, 1)[0];

    // THIRD: add dateTimeConsumed to product info
    if (dateTimeLabel) {thisProduct.dateTime[dateTimeLabel] = JSON.stringify(Date.now())}

    // FOURTH: add product to array2
    toArray2.push(thisProduct);
    // const results = {array1: fromArray1, array2: toArray2};
    return({array1: fromArray1, array2: toArray2})
}

export const marketplace = {name: 'marketplaceState', reducer: marketplaceReducer};

export default setMarketplaceSection = {
    marketplace: marketplace
}
