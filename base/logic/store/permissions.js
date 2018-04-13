/*
  permissions.js
    Betterment Labs
    Created by BettermentLabs.
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description:
      Root functions for managing redux store
*/
// Action Definitions
// OneSignal Permissions Actions

export const setOneSignalIOSPermissionsTo = permissions => {
  return { type: 'SET_ONE_SIGNAL_IOS_PERMISSIONS_TO', permissions: permissions };
};

const permissionsReducer = (state = {}, action) => {
  switch (action.type) {
    case setOneSignalIOSPermissionsTo().type:
      return Object.assign({}, state, action.permissions);
  }
  return state;
};

// export default props to be loaded for all views
export const permissions = {
  name: 'permissionState',
  reducer: permissionsReducer
};

export default (setPermissionsSection = {
  permissions: permissions
});

// base/logic/permissions/index.js

// result is object of form: {
//   "alert": 0 or 1,
//   "badge": 0 or 1,
//   "sound": 0 or 1,
// }

// export const checkNotificationsPermissions = (callback) => {
//   if (OneSignal == undefined || OneSignal.checkPermissions == undefined) {return}
//   OneSignal.checkPermissions((result) => {
//     console.log('OneSignal: ')
//     console.log(result);
//     if (isFunction(callback)) {
//       callback({
//         error: false,
//         errorMessage: '',
//         content: result
//       })
//     } else {
//       console.log("No callback function to CheckOneSignalSubscriptionStatus provided. Result is: ");
//       console.log(result);
//     }
//   });
// }
