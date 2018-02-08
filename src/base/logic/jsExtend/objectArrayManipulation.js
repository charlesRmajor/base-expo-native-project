/*
  objectArrayManipulation.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description:
*/
// IMPORTS

export const objectKeysToArray = (inputObject) => {
    var outputArray = [];
    for (key in inputObject) {
        outputArray.push(key);
    }
    return outputArray
}

export const objectValuesToArray = (inputObject) => {
    var outputArray = [];
    for (key in inputObject) {
        outputArray.push(inputObject[key]);
    }
    return outputArray
}

export const arrayOfArrayPairsToObject = (inputArray) => {
    const outputObject = {};
    inputArray.map((arrayItem) => { outputObject[arrayItem[0]] = arrayItem[1]});
    return(outputObject)
}