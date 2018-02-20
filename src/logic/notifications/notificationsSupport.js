/*
  notificationsSupport.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description: Functions for managing OneSignal integrations
        These functions are triggered when the app is open and the device receives a notification from OneSignal

    All of these functions are essential to using OneSignal. Don't remove entire functions.
*/

import {
    setOneSignalPushTokenTo,
    setOneSignaluserIdTo
} from '../../../base/logic/store/notifications';

// A OneSignal-sent notification is received
export const getOnReceived = (dispatch) => {
    return((notification) => {
        console.log("Notification received: ", notification);
    })
}

// a OneSignal-sent notification is opened
// (the user clicks the notification and the app opens)
// openResult.notification has this format:
    // {
    //     shown: true, // BOOLEAN: If the notification was displayed to the user or not
    //     payload: {notificationID : "", contentAvailable : false, badge : 1, sound : "default", title : "Hello!", body : "World", launchURL : "", }, // OBJECT; the push data
    //     displayType: 1, //The display method of a received notification
    //     silentNotification: false // BOOLEAN : Wether the received notification was a silent one
    // }
export const getOnOpened = (dispatch) => {
    return ((openResult) => {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
    })
}

// Device has been registered with OneSignal for push notifications
export const getOnRegistered = (dispatch) => {
    return((notifData) => {
        console.log("Device had been registered for push notifications!", notifData);
  })}

// The OneSignal device info
export const getOnIds = (dispatch) => {
    return((device) => {
        console.log('Device info: ', device);
  })}
  