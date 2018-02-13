/*
  appPhonebook.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description:
*/
// Action Definitions
export const addContactToAppPhonebook = (contact) => {return({type:'ADD_CONTACT_TO_APP_PHONEBOOK', contact: contact})};

const appPhonebookReducer = (state = {}, action) => {
  switch (action.type) {
    case addContactToAppPhonebook().type:
      return Object.assign({}, state, action.contact)
  }
  return state
}

// export default props to be loaded for all views
export const appPhonebook = {name: 'appPhonebookState', reducer: appPhonebookReducer};

export default setAppPhonebookSection = {
  appPhonebook: appPhonebook
}