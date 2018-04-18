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
import {
  setOneSignalSubscriptionsTo,
  setOneSignalIOSPermissionsTo
} from '../store/permissions';

export const linkPermissionsTrackingToStore = ({ dispatch }) => {
  return () => {
    OneSignal.getPermissionSubscriptionState(result => {
      dispatch(setOneSignalSubscriptionsTo(result));
    });
    OneSignal.checkPermissions(result => {
      dispatch(setOneSignalIOSPermissionsTo(result));
    });
  };
};
