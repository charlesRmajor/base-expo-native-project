/*
  p2pOneSignalSupport.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    These functions are the Betterment Labs implementation of this package:
    https://github.com/geektimecoil/react-native-onesignal#post-notification-peer-to-peer-notifications

    Description: Functions for managing OneSignal peer-to-peer messaging
*/



/*
// Calling postNotification

let otherParameters = {"ios_attachments" : {"image1" : "{image_url}"}};
let data = arr // some array as payload
let contents = {
	'en': 'You got notification from user'
}
OneSignal.postNotification(contents, data, playerId, otherParameters);

// Listening to postNotification using OneSignal.Configure:
onNotificationOpened: function(message, data, isActive) {
	if (data.p2p_notification) {
		for (var num in data.p2p_notification) {
			// console.log(data.p2p_notification[num]);
		}
	}
}
*/