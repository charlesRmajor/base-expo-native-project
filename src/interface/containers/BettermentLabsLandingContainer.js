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
import { connect } from 'react-redux';

// Import Core Project Modules

// Import App Logic
import {appPhonebook} from '../../logic/store/appPhonebook';
import {
  requestNotifications,
  requestLocation,
  checkNotificationsPermissions
  } from '../../../base/logic/permissions';
import saveContactFromPhonesPhoneBook from '../../logic/loading/saveContactFromPhonesPhoneBook';
import {getRemoveContactFromAppPhonebookWithDispatch} from '../../logic/store/appPhonebook';
import {SendOneSignalTag,
  GetOneSignalTags,
  CheckOneSignalSubscriptionStatus
  } from '../../../base/logic/notifications/OneSignalSupport';

// Import Other App UI Elements
import BettermentLabsLandingPage from '../dumbViews/BettermentLabsLandingPage';

export default BettermentLabsLandingContainer = (props) => {
    const strings = props.strings || null;

    const dispatcher = props.dispatch ? {dispatch: props.dispatch} : null;
    const thisRemoveContactFromAppPhonebook = props.dispatch ? (contactIndex) => getRemoveContactFromAppPhonebookWithDispatch({contactIndex: contactIndex, dispatcher: props.dispatch}) : null;
    const ThisViewWithStore = connect(mapStateToProps)(BettermentLabsLandingPage);
    const ViewButtons = [
      {title: strings.checkPermissions,
        onPress: checkNotificationsPermissions
      },
      {title: strings.notificationsRequestButton,
        onPress: requestNotifications
      },
      {title: strings.locationPermissionsRequest,
        onPress: requestLocation
      },
      {title: strings.getContactButton,
        onPress: () => saveContactFromPhonesPhoneBook(dispatcher)
      },
      {
        title: strings.sendTestOneSignalTag,
        onPress: () => {
          console.log("ThisSendTestOneSignalTag");
          SendOneSignalTag({key0: "value0", key1: "value1", key2: "value2"});
        }
      },
      {title: strings.checkOneSignalSubscription,
        onPress: CheckOneSignalSubscriptionStatus
      },
      {title: strings.checkOneSignalTags,
        onPress: GetOneSignalTags
      }
    ];
    return(
        <ThisViewWithStore
          buttons={ViewButtons}
          removeContactFromPhonesPhoneBook={thisRemoveContactFromAppPhonebook}
          {...props} />
    )
}

const mapStateToProps = function(store) {
    return({contacts: store[appPhonebook.name]});
  }
