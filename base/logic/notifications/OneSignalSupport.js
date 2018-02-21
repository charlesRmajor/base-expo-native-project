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
import isFunction from '../../../base/logic/jsExtend/isFunction';
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

// Subscribe To OneSignal
// default is subscribed=true, only needs to be called if has been set to false before
export const SubscribeDeviceToOneSignalNotifications = (dispatch) => { OneSignal.setSubscription(true) }
export const UnSubscribeDeviceToOneSignalNotifications = (dispatch) => { OneSignal.setSubscription(false) }

// Check OneSignal Subscription Status
// result is object of form: {
//   "hasPrompted": bool,
//   "notificationsEnabled": bool,
//   "pushToken": string,
//   "subscriptionEnabled": bool,
//   "userId": string,
//   "userSubscriptionEnabled": bool,
// }
export const CheckOneSignalSubscriptionStatus = (callback) => {
  OneSignal.getPermissionSubscriptionState((result) => {
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

// inputObject has form: {key: "value", key2: "value"}
export const SendOneSignalTag = (inputObject) => {
  if (inputObject == null || inputObject == undefined) {return}
  OneSignal.sendTags(inputObject);
}

// inputObject has form: {key: "value", key2: "value"}
export const SendOneSignalTags = (inputObject) => { SendOneSignalTag(inputObject) }

// Getting the tags from the server and use the received object
export const GetOneSignalTags = (callback) =>{
  OneSignal.getTags((receivedTags) => {
    if (isFunction(callback)) {
      callback({
        error: false,
        errorMessage: '',
        content: receivedTags
      })
    } else {
      console.log("No callback function to GetOneSignalTags provided. Result is: ");      
      console.log(receivedTags);
    }
  });  
}

// Delete a tag
export const DeleteOneSignalTag = (tagKey) =>{ OneSignal.deleteTag(tagKey) }

// Set Email for Better Targeting
// Sync hashed email if you have a login system or collect it. Will be used to reach the user at the most optimal time of day.
export const SyncOneSignalHashedEmail = (email) => {
  // TODO: parse e-mail and only use if in valid form
  OneSignal.syncHashedEmail(email);
}

// Set In-App Notification Focus Behavior
// 0 = None - Will not display a notification, instead only onNotificationReceived will fire where you can display your own in app messages.
// 1 = InAppAlert - (Default) Will display an Android AlertDialog with the message contains.
// 2 = Notification - Notification will display in the Notification Shade. Same as when the app is not in focus.
export const SetOneSignalNotificationsToNotDisplay = (dispatch) => { OneSignal.inFocusDisplaying(0) }
export const SetOneSignalNotificationsToDisplayInAppShade = (dispatch) => { OneSignal.inFocusDisplaying(1) }
export const SetOneSignalNotificationsToDisplayAsFullModal = (dispatch) => {OneSignal.inFocusDisplaying(2) }

// ANDROID only
export const EnableOneSignalNotificationVibration = (dispatch) => { OneSignal.enableVibrate(true)}
export const DisEnableOneSignalNotificationVibration = (dispatch) => { OneSignal.enableVibrate(false)}

// ANDROID only
export const EnableOneSignalNotificationSound = (dispatch) => { OneSignal.enableSound(true) }
export const DisEnableOneSignalNotificationSound = (dispatch) => { OneSignal.enableSound(false) }

// ANDROID only
//Removes all OneSignal notifications from the Notification Shade.
export const ClearOneSignalNotifications = (dispatch) => { OneSignal.clearOneSignalNotifications() }
// Cancels a single OneSignal notification based on its Android notification integer id. You can get the notification Id when invoking OneSignal.onNotificationOpened while receiving a notification.
export const CancelOneSignalNotification = ({dispatch: dispatch, id: id}) => { OneSignal.cancelNotification(id) }

// iOS only
export const RegisterForPushNotifications = (dispatch) => { OneSignal.registerForPushNotifications() }

// App Subscriptions For handling notifications received while app is opened
// OneSignalAppSubscriptions & OneSignalAppUnSubscriptions are part of this base project's
// automatic componentDidMount/componentDidUnMount process and shouldn't be changed
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


// TODO: add "send missing OneSignal tags" function of form:
/*
_syncOneSignal = () => {
	var allTags = {};
	var missingTags = {};

	OneSignal.getTags((receivedTags) => {
		// Find missing tags
		for (var i = this.categories.length * 1; i >= 0; i--) {
			var category = this.categories[i];
			if (!(category.slug in receivedTags)) {
				missingTags[category.slug] = category.is_push_default;
			}
			// Hash all tags for performance later on deletion
			allTags[category.slug] = category.is_push_default;
		};

		// Send missing tags if there are any
		if (Object.keys(missingTags).length > 0) {
			OneSignal.sendTags(missingTags);
		}

		// Delete tags that doesn't show up in the categories
		Object.keys(receivedTags).forEach(function(key,index) {
		    if (!(key in allTags)) {
		    	OneSignal.deleteTag(key);
		    }
		});
	});
};
*/