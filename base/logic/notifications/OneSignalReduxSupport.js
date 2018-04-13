/*
  OneSignalReduxSupport.js
    Betterment Labs
    Created by BettermentLabs.
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.
    These functions are the Betterment Labs implementation of this package:
    https://github.com/geektimecoil/react-native-onesignal#usage
    Description: Functions for managing OneSignal integrations
*/
// IMPORTS
import OneSignal from '../nativeBridge/OneSignal/OneSignalBridge';
import { setOneSignalIOSPermissionsTo } from '../store/permissions';
import { setOneSignalSubscriptionsTo } from '../store/subscriptions';

export const linkPermissionsTrackingToStore = ({dispatch}) => {
  return (() => {OneSignal.default.getPermissionSubscriptionState(result => {
    dispatch(setOneSignalSubscriptionsTo(result));
  });
  OneSignal.default.checkPermissions(result => {
    dispatch(setOneSignalIOSPermissionsTo(result));
  })})
};
