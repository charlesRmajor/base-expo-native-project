/*
  subscriptions.js
    Betterment Labs
    Created by BettermentLabs.
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description:
      Root functions for managing redux store
*/
// Action Definitions
// OneSignal Subscriptions Actions

export const setOneSignalSubscriptionsTo = subscriptions => {
  return { type: 'SET_ONE_SIGNAL_SUBSCRIPTIONS_TO', subscriptions: subscriptions };
};

const subscriptionsReducer = (state = {}, action) => {
  switch (action.type) {
    case setOneSignalSubscriptionsTo().type:
      return Object.assign({}, state, action.subscriptions);
  }
  return state;
};

// export default props to be loaded for all views
export const subscriptions = {
  name: 'subscriptionState',
  reducer: subscriptionsReducer
};

export default (setSubscriptionsSection = {
  subscriptions: subscriptions
});

// base/logic/notifications/OneSignalSupport.js

// result is object of form: {
//   "hasPrompted": bool,
//   "notificationsEnabled": bool,
//   "pushToken": string,
//   "subscriptionEnabled": bool,
//   "userId": string,
//   "userSubscriptionEnabled": bool,
// }

// export const CheckOneSignalSubscriptionStatus = (callback) => {
//   if (OneSignal == undefined || OneSignal.getPermissionSubscriptionState == undefined) {return}
//   OneSignal.getPermissionSubscriptionState((result) => {
//     if (isFunction(callback)) {
//       callback({
//         error: false,
//         errorMessage: '',
//         content: result
//       })
//     } else {
//       console.log("No callback function to CheckOneSignalSubscriptionStatus provided. Result is: ");
//       console.log(result);
//     }
//   });
// }
