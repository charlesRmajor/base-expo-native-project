/*
  OneSignalBridge.js
    Betterment Labs
    Created by BettermentLabs.
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

    Description: Bridges OneSignal package to project
        allows for continued use of Expo/XDE
*/
// IMPORTS
// Import Other Project Modules
// import NativeOneSignal from 'react-native-onesignal'; // Import package from node modules

// Import Other App Logic
import {isCurrentlyRunningInExpoClient} from '../../VersionInfo';

const getOneSignalPackage = () => {
    if (isCurrentlyRunningInExpoClient()) {
        console.log("getOneSignalPackage isCurrentlyRunningInExpoClient")
        return null
    } else {
        console.log("getOneSignalPackage isNOTCurrentlyRunningInExpoClient - returning NativeOneSignal")
        const NativeOneSignal = require('./OneSignalImport');
        return NativeOneSignal.default;
    }
}

export default OneSignal = getOneSignalPackage();
