/*
  notificationsPermissions.js - nativeBridge
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component notificationsPermissions.js
  Description:  
*/

// IMPORTS
// Import React Modules
import {Platform, NativeModules} from 'react-native';

export default requestNotificationsPermissions = (callback) => {
    if (NativeModules.PermissionsModule != undefined) {
        let PermissionsModule = NativeModules.PermissionsModule;
        if (PermissionsModule.getNotificationsPermissions != undefined) {
            const ThisCallback = callback ? callback : result => console.log("requestNotificationsPermissions result: "+result);
            PermissionsModule.getNotificationsPermissions(ThisCallback);
        } else {
            console.log('NativeModules.PermissionsModule.getNotificationsPermissions is not found');
        }
        } else {
        console.log('NativeModules.PermissionsModule is not found');
    }
}