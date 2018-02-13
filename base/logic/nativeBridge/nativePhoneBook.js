/*
  nativePhoneBook.js - nativeBridge
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component nativePhoneBook.js
  Description:  
*/
// IMPORTS
// Import React Modules
import {Platform, NativeModules} from 'react-native';

// Import App Logic
import {trimPhoneNumber} from '../jsExtend/trimPhoneNumber';

export const getContactFromPhonesPhoneBook = (promiseFunction) => {
	if (Platform.OS === 'ios') {
	if (NativeModules.iosContactsManager != undefined) {
		let iosContactsManager = NativeModules.iosContactsManager;
		if (iosContactsManager.getPhoneContact != undefined) {
			iosContactsManager.getPhoneContact(function(contact) {
				let newContact = {'contactName': contact["firstName"]+" "+contact["lastName"], 
								  'contactNumber': contact["number"],// trimPhoneNumber(contact["number"]),
								  'numberLabel': contact["label"]
							  };
				  promiseFunction(null, newContact);
				});
			} else {
		console.log('NativeModules.iosContactsManager.getPhoneContact is not found');
		}
        } else {
        console.log('NativeModules.iosContactsManager is not found');
	}
	} else {
		if (NativeModules.androidContactsManager != undefined) {
			let androidContactsManager = NativeModules.androidContactsManager;
			if (androidContactsManager.getContact != undefined) {
				androidContactsManager.getContact(function(contact) {
					console.log("androidContactsManager - back in RN callback with result: ");
					console.log(contact);
					let newContact = {'contactName': contact["name"],
										'contactNumber': contact["phone"]
										};
					  promiseFunction(null, newContact);
				});
			} else {
			console.log('NativeModules.androidContactsManager.getContact is not found');
			}
			} else {
			console.log('NativeModules.androidContactsManager is not found');
	  }
	}
}