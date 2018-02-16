/*
  setUserInfoTo.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description:
      Root functions for managing redux store
*/
// Action Definitions
export const setUserInfoTo = (userInfo) => {return({type:'SET_USER_INFO_TO', userInfo: userInfo})};

const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case setUserInfoTo().type:
      return Object.assign({}, state, action.userInfo)
  }
  return state
}

// export default props to be loaded for all views
export const userInfo = {name: 'userInfoState', reducer: userInfoReducer};

export default setUserInfoSection = {
  userInfo: userInfo
}