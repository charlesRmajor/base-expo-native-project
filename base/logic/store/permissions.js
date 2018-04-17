/*
  permissions.js
    Betterment Labs
    Created by BettermentLabs.
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description:
      Root functions for managing redux store
*/
// Action Definitions
// OneSignal Permissions Actions

export const setOneSignalSubscriptionsTo = subscriptions => {
  return {
    type: 'SET_ONE_SIGNAL_SUBSCRIPTIONS_TO',
    subscriptions: subscriptions
  };
};

export const setOneSignalIOSPermissionsTo = permissions => {
  return {
    type: 'SET_ONE_SIGNAL_IOS_PERMISSIONS_TO',
    permissions: permissions
  };
};

const defaultPermissionsState = {
  oneSignalSubscription: null,
  permissions: null
};

const permissionsReducer = (state = defaultPermissionsState, action) => {
  switch (action.type) {
    case setOneSignalSubscriptionsTo().type:
      return Object.assign({}, state, {
        oneSignalSubscription: action.subscriptions
      });
    case setOneSignalIOSPermissionsTo().type:
      return Object.assign({}, state, {
        permissions: action.permissions
      });
  }
  return state;
};

export const permissions = {
  name: 'permissionState',
  reducer: permissionsReducer
};

export default (setPermissionsSection = {
  permissions: permissions
});
