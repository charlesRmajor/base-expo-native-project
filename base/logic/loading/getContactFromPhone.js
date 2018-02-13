/* 
	getContactFromPhone.js
	  Betterment Labs
	  Updated by Charles Major on 2/1/18. 
	  Copyright © 2018 Betterment Labs. All rights reserved.
*/
// IMPORTS
// Import React Modules

// Import General Logic

// import App Logic
import {getContactFromPhonesPhoneBook} from '../nativeBridge/nativePhoneBook';

export default getContactFromPhone = (callback) => {
  getContactFromPhonesPhoneBook((error, contact) => {
    if (error==null) {
      const callbackResponse = {
        error: false,
        errorMessage: '',
        content: contact
      };
      callback && callback(callbackResponse);
    } else {
      console.log("error getting contact from phonebook: ");
      console.log(error);
      const callbackResponse = {
        error: true,
        errorMessage: error,
        content: null
      };
      callback && callback(callbackResponse);
    }
  })
}