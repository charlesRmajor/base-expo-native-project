/*
  index.js - Permissions
    Betterment Labs
    Created by BettermentLabs.
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component index.js
  Description: organize all app permissions files
*/

// IMPORTS
// Import React Modules

// Import Other Project Modules
// import OneSignal from 'react-native-onesignal'; // OneSignal has permission helpers we'll use
import OneSignal from '../nativeBridge/OneSignal/OneSignalBridge';

// Import Other App Logic
import isFunction from '../../../base/logic/jsExtend/isFunction';
import requestNotificationsPermissions from '../nativeBridge/permissions/notificationsPermissions';

export const requestNotifications = (callback) => requestNotificationsPermissions(isFunction(callback) ? callback : null);
export const requestContacts = (callback) => {console.log('automatically requested when phone book is attempted to be accessed. Nothing done now.'); callback && callback(true)};

// doesn't return anything - may want to replace with method that returns success/failure
export const requestLocation = (callback) => {
  if (OneSignal == undefined || OneSignal.promptLocation == undefined) {return}
  OneSignal.promptLocation()
};

// iOS Only
// result is object of form: {
  //   "alert": 0 or 1,
  //   "badge": 0 or 1,
  //   "sound": 0 or 1,
  // }
export const checkNotificationsPermissions = (callback) => {
  if (OneSignal == undefined || OneSignal.default.checkPermissions == undefined) {return}
  OneSignal.default.checkPermissions((result) => {
    if (isFunction(callback)) {
      callback({
        error: false,
        errorMessage: '',
        content: result
      })
    } else {
      console.log("No callback function to CheckOneSignalSubscriptionStatus provided. Result is: ");
      console.log(result);
    }
  });
}

// iOS Only
// can optionally call false on items you don't want to ask for permission for
export const requestOneSignalNotificationsPermissions = ({alert = true, badge = true, sound = true}) => {
  if (OneSignal == undefined || OneSignal.requestPermissions == undefined) {return}
  OneSignal.requestPermissions({ alert: alert, badge: badge, sound: sound })
}
