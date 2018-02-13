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

// Import App Logic
import requestNotificationsPermissions from '../nativeBridge/permissions/notificationsPermissions';

export const requestNotifications = (callback) => requestNotificationsPermissions(requestNotificationsPermissions);
export const requestContacts = (callback) => {console.log('automatically requested when phone book is attempted to be accessed. Nothing done now.'); callback && callback(true)}