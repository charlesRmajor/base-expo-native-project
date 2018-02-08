/* 
	asyncStorage.js
	  Betterment Labs
	  Updated by Charles Major on 2/1/18. 
	  Copyright © 2018 Betterment Labs. All rights reserved.
*/
// IMPORTS
// Import React Modules
import { AsyncStorage } from 'react-native';

// Import General Logic
import {objectKeysToArray, objectValuesToArray, arrayOfArrayPairsToObject} from '../jsExtend/objectArrayManipulation';

// import App Logic
import {setUserInfoTo} from '../store';

// Load/Define Data Definitions
const dateAppLastUsed = 'DATE_APP_LAST_USED';
const username = 'USERNAME';
const userBirthdate = 'USER_BIRTHDATE';
const userFullName = 'USER_FULLNAME';

const allSavedData = {
    dateAppLastUsed: dateAppLastUsed,
    username: username,
    userBirthdate: userBirthdate,
    userFullName: userFullName
}

const defaultSavedUserData = {
    dateAppLastUsed: dateAppLastUsed,
    username: username,
    userBirthdate: userBirthdate,
    userFullName: userFullName
}

export const loadUserInfoFromStorage = (dispatch) => {
    // console.log(defaultSavedUserData);
    AsyncStorage.multiGet(objectValuesToArray(defaultSavedUserData))
        .then(result => {
            const setUserInfoToAction = setUserInfoTo(arrayOfArrayPairsToObject(result));
            dispatch && dispatch(setUserInfoToAction);
        });
}

// export const saveUsersPhoneNumber = (inputs) => {
//   //      saveUsersPhoneNumber({phoneNumber: this.state.userPhoneNumber});
//   if (inputs.phoneNumber == null || inputs.phoneNumber == undefined) {return}
//   AsyncStorage.setItem('userPhoneNumber', inputs.phoneNumber || '');
//   logUsersPhoneNumber({phoneNumber: inputs.phoneNumber});
// }

// saveData = (varName, data) => {
//   console.log("saving ");
//   console.log(data);
//   AsyncStorage.setItem(data, varName);
// }

// getData = (varName) => {
//   AsyncStorage.getItem(varName, (err, results) => {
//     console.log("getting data");
//     console.log(err);
//     console.log(results);
//   })
// }