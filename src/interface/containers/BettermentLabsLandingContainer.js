/*
  BettermentLabsLandingContainer.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BettermentLabsLandingContainer.js
  Description:
*/
// IMPORTS
// Import React Modules
import React from 'react';

// Import Core Project Modules
import BRoute from '../../../base/interface/controllers/BRoute';

// Import App Logic
import {appPhonebook} from '../../logic/store/appPhonebook';
import {requestNotifications} from '../../../base/logic/permissions';
import saveContactFromPhonesPhoneBook from '../../logic/loading/saveContactFromPhonesPhoneBook';
import {getRemoveContactFromAppPhonebookWithDispatch} from '../../logic/store/appPhonebook';

// Import Other App UI Elements
import BettermentLabsLandingPage from '../mainViews/BettermentLabsLandingPage';

export default BettermentLabsLandingContainer = (props) => {
    console.log("rendering BettermentLabsLandingContainer");
    const dispatcher = props.dispatch ? {dispatch: props.dispatch} : null;
    const thisSaveContactFromPhonesPhoneBook = () => saveContactFromPhonesPhoneBook(dispatcher);
    const thisRemoveContactFromAppPhonebook = props.dispatch ? (contactIndex) => getRemoveContactFromAppPhonebookWithDispatch({contactIndex: contactIndex, dispatcher: props.dispatch}) : null;
    return(
        <BRoute
            exact
            path="/"
            view={BettermentLabsLandingPage}
            mapStateToProps={(store) => ({contacts: store[appPhonebook.name]})}
            requestNotifications={requestNotifications}
            saveContactFromPhonesPhoneBook={thisSaveContactFromPhonesPhoneBook}
            removeContactFromPhonesPhoneBook={thisRemoveContactFromAppPhonebook}
            {...props}
            />
    )
}
