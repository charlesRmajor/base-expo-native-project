/* 
	saveContactFromPhonesPhoneBook.js
	  Betterment Labs
	  Updated by Charles Major on 2/1/18. 
	  Copyright © 2018 Betterment Labs. All rights reserved.
	
inputs:
	object with:
		callback:
		dispatch:
*/
// IMPORTS
// Import React Modules

// Import General Logic

// import App Logic
import getContactFromPhone from '../../../base/logic/loading/getContactFromPhone';
import {addContactToAppPhonebook} from '../store/appPhonebook';

export default saveContactFromPhonesPhoneBook = (inputs) => {
    const saveContactCallback = (result) => {
		const callbackResponse = {
			error: result.error,
			errorMessage: result.errorMessage,
			content: result.error ? null : result.content
		};
		if (!result.error && inputs.dispatch) {
			const saveContactAction = addContactToAppPhonebook(result.content);
			inputs.dispatch(saveContactAction);
		};
		inputs.callback && inputs.callback(saveContactCallback)
	}
    getContactFromPhone(saveContactCallback)
}