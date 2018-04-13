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
// Import Other App Logic
import OneSignal from '../nativeBridge/OneSignal/OneSignalBridge';
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
export const SubscribeDeviceToOneSignalNotifications = (dispatch) => {
  if (OneSignal == undefined || OneSignal.setSubscription == undefined) {return}
      OneSignal.setSubscription(true)
}
export const UnSubscribeDeviceToOneSignalNotifications = (dispatch) => {
  if (OneSignal == undefined || OneSignal.setSubscription == undefined) {return}
      OneSignal.setSubscription(false)
}

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
  if (OneSignal == undefined || OneSignal.default.getPermissionSubscriptionState == undefined) {return}
  OneSignal.default.getPermissionSubscriptionState((result) => {
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
  if (OneSignal == undefined || OneSignal.sendTags == undefined) {return}
  OneSignal.sendTags(inputObject);
}

// inputObject has form: {key: "value", key2: "value"}
export const SendOneSignalTags = (inputObject) => {
  if (OneSignal == undefined || OneSignal.SendOneSignalTag == undefined) {return}
  SendOneSignalTag(inputObject)
}

// Getting the tags from the server and use the received object
export const GetOneSignalTags = (callback) =>{
  if (OneSignal == undefined || OneSignal.getTags == undefined) {return}
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
export const DeleteOneSignalTag = (tagKey) =>{
  if (OneSignal == undefined || OneSignal.deleteTag == undefined) {return}
  OneSignal.deleteTag(tagKey)
}

// Set Email for Better Targeting
// Sync hashed email if you have a login system or collect it. Will be used to reach the user at the most optimal time of day.
export const SyncOneSignalHashedEmail = (email) => {
  // TODO: parse e-mail and only use if in valid form
  if (OneSignal == undefined || OneSignal.syncHashedEmail == undefined) {return}
  OneSignal.syncHashedEmail(email);
}

// Set In-App Notification Focus Behavior
// 0 = None - Will not display a notification, instead only onNotificationReceived will fire where you can display your own in app messages.
// 1 = InAppAlert - (Default) Will display an Android AlertDialog with the message contains.
// 2 = Notification - Notification will display in the Notification Shade. Same as when the app is not in focus.
export const SetOneSignalNotificationsToNotDisplay = (dispatch) => {
  if (OneSignal == undefined || OneSignal.inFocusDisplaying == undefined) {return}
  OneSignal.inFocusDisplaying(0)
}

export const SetOneSignalNotificationsToDisplayInAppShade = (dispatch) => {
  if (OneSignal == undefined || OneSignal.inFocusDisplaying == undefined) {return}
  OneSignal.inFocusDisplaying(1)
}

export const SetOneSignalNotificationsToDisplayAsFullModal = (dispatch) => {
  if (OneSignal == undefined || OneSignal.inFocusDisplaying == undefined) {return}
  OneSignal.inFocusDisplaying(2)
}

// ANDROID only
export const EnableOneSignalNotificationVibration = (dispatch) => {
  if (OneSignal == undefined || OneSignal.enableVibrate == undefined) {return}
  OneSignal.enableVibrate(true)
}

export const DisEnableOneSignalNotificationVibration = (dispatch) => {
  if (OneSignal == undefined || OneSignal.enableVibrate == undefined) {return}
  OneSignal.enableVibrate(false)
}

// ANDROID only
export const EnableOneSignalNotificationSound = (dispatch) => {
  if (OneSignal == undefined || OneSignal.enableSound == undefined) {return}
  OneSignal.enableSound(true)
}

export const DisEnableOneSignalNotificationSound = (dispatch) => {
  if (OneSignal == undefined || OneSignal.enableSound == undefined) {return}
  OneSignal.enableSound(false)
}

// ANDROID only
//Removes all OneSignal notifications from the Notification Shade.
export const ClearOneSignalNotifications = (dispatch) => {
  if (OneSignal == undefined || OneSignal.clearOneSignalNotifications == undefined) {return}
  OneSignal.clearOneSignalNotifications()
}

// Cancels a single OneSignal notification based on its Android notification integer id. You can get the notification Id when invoking OneSignal.onNotificationOpened while receiving a notification.
export const CancelOneSignalNotification = ({dispatch: dispatch, id: id}) => {
  if (OneSignal == undefined || OneSignal.cancelNotification == undefined) {return}
  OneSignal.cancelNotification(id)
}

// iOS only
export const RegisterForPushNotifications = (dispatch) => {
  if (OneSignal == undefined || OneSignal.registerForPushNotifications == undefined) {return}
  OneSignal.registerForPushNotifications()
}

// App Subscriptions For handling notifications received while app is opened
// OneSignalAppSubscriptions & OneSignalAppUnSubscriptions are part of this base project's
// automatic componentDidMount/componentDidUnMount process and shouldn't be changed
export const OneSignalAppSubscriptions = (dispatch) => {
  if (OneSignal || OneSignal == undefined) {return}
  dispatch && dispatch(oneSignalIsSubscribing);
  OneSignal.addEventListener('received', getOnReceived(dispatch));
  OneSignal.addEventListener('opened', getOnOpened(dispatch));
  OneSignal.addEventListener('registered', getOnRegistered(dispatch));
  OneSignal.addEventListener('ids', getOnIds(dispatch));
  dispatch && dispatch(oneSignalDoneSubscribing);
}

export const OneSignalAppUnSubscriptions = (dispatch) => {
  if (OneSignal == undefined) {return}
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
