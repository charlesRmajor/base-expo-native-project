/*
  appPhonebook.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description:
*/
// Action Definitions
export const addContactToAppPhonebook = (contact) => {return({type:'ADD_CONTACT_TO_APP_PHONEBOOK', contact: contact})};
export const removeContactFromAppPhonebook = (contactIndex) => {return({type: 'REMOVE_CONTACT_FROM_APP_PHONEBOOK', contactIndex: contactIndex})}

export const getRemoveContactFromAppPhonebookWithDispatch = ({contactIndex, dispatcher}) => {return(() => {dispatcher && dispatcher(removeContactFromAppPhonebook(contactIndex))})}

const appPhonebookReducer = (state = [], action) => {
  const newState = state.slice();
  switch (action.type) {
    case addContactToAppPhonebook().type:
      newState.push(action.contact);
      return newState
    case removeContactFromAppPhonebook().type:
      newState.splice(action.contactIndex,1);
      return newState
  }
  return state
}

// export default props to be loaded for all views
export const appPhonebook = {name: 'appPhonebookState', reducer: appPhonebookReducer};

export default setAppPhonebookSection = {
  appPhonebook: appPhonebook
}