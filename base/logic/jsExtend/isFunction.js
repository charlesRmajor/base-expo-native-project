/*
  isFunction.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component isFunction.js
  Description: tests if input is a function and returns true if so/false if not
*/
export default isFunction = (functionToCheck) => {
	var getType = {};
	return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
