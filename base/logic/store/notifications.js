/*
  setUserInfoTo.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description:
      Root functions for managing redux store
*/
// Action Definitions
// OneSignal UserInfo Actions
export const setOneSignalPushTokenTo = (token) => {return({type:'SET_ONE_SIGNAL_PUSH_TOKEN_TO', token: token})}
export const setOneSignaluserIdTo = (userID) => {return({type:'SET_ONE_SIGNAL_USER_ID__TO', userID: userID})}

const notificationsReducer = (state = {}, action) => {
  switch (action.type) {
    case setOneSignalPushTokenTo().type:
      return Object.assign({}, state, action.token)
    case setOneSignaluserIdTo().type:
      return Object.assign({}, state, action.userID)      
  }
  return state
}

// export default props to be loaded for all views
export const notifications = {name: 'notificationsState', reducer: notificationsReducer};

export default setNotificationsSection = {
    notifications: notifications
}