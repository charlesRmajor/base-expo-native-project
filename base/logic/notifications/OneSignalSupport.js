/*
  OneSignalSupport.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    These functions are the Betterment Labs implementation of this package:
    https://github.com/geektimecoil/react-native-onesignal#usage

    Description: Functions for managing OneSignal integrations
*/
// IMPORTS
// Import Other Project Modules
import OneSignal from 'react-native-onesignal'; // Import package from node modules

// Import Other App Logic
import {
  getOnReceived,
  getOnOpened,
  getOnRegistered,
  getOnIds
} from '../../../src/logic/notifications/notificationsSupport'

// Import Redux Actions
import {
  oneSignalIsSubscribing,
  oneSignalIsUnSubscribing,
  oneSignalDoneSubscribing,
  oneSignalDoneUnSubscribing
  } from '../store/loading';

// inputObject has form: {key: "value", key2: "value"}
export const SendOneSignalTag = (inputObject) => {
  if (inputObject == null || inputObject == undefined) {return}
  OneSignal.sendTags(inputObject);
}

// inputObject has form: {key: "value", key2: "value"}
export const SendOneSignalTags = (inputObject) => {
  SendOneSignalTag(inputObject);
}

// Getting the tags from the server and use the received object
export const GetOneSignalTags = (callback) =>{
  OneSignal.getTags((receivedTags) => {
    if (callback == null || callback == undefined) {
      console.log(receivedTags);
    } else {
      callback({
        error: false,
        errorMessage: '',
        content: receivedTags
      })
    }
  });  
}

// Delete a tag
export const DeleteOneSignalTag = (tagKey) =>{
  OneSignal.deleteTag(tagKey);
}

// Set Email for Better Targeting
// Sync hashed email if you have a login system or collect it. Will be used to reach the user at the most optimal time of day.
export const SyncOneSignalHashedEmail = (email) => {
  // TODO: parse e-mail and only use if in valid form
  OneSignal.syncHashedEmail(email);
}

export const OneSignalAppSubscriptions = (dispatch) => {
  dispatch && dispatch(oneSignalIsSubscribing);
  OneSignal.addEventListener('received', getOnReceived(dispatch));
  OneSignal.addEventListener('opened', getOnOpened(dispatch));
  OneSignal.addEventListener('registered', getOnRegistered(dispatch));
  OneSignal.addEventListener('ids', getOnIds(dispatch));
  dispatch && dispatch(oneSignalDoneSubscribing);
}

export const OneSignalAppUnSubscriptions = (dispatch) => {
  dispatch && dispatch(oneSignalIsUnSubscribing);
  OneSignal.removeEventListener('received', getOnReceived(dispatch));
  OneSignal.removeEventListener('opened', getOnOpened(dispatch));
  OneSignal.removeEventListener('registered', getOnRegistered(dispatch));
  OneSignal.removeEventListener('ids', getOnIds(dispatch));
  dispatch && dispatch(oneSignalDoneUnSubscribing);
}

// ANDROID only
export const EnableOneSignalNotificationVibration = (dispatch) => {
  OneSignal.enableVibrate(true);
}