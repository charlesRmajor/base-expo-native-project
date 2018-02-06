# build by Betterment Labs
www.bettermentlabs.com

# base-expo-native-project
Betterment Labs's starter project with expo / native dual dev

# How To Use This
1. Downlod
2. Update App Identifiers:
    a. in app.json:
        i. name
        ii. slug
        iii. ios.bundleIdentifier
        iv. android.package
    b. for iOS/Xcode Project:
3. Get Packages:
    a. from home directory, run 'yarn'
    b. from ios/ directory, run 'pod install && pod update'

## Continue to Use Expo To Develop Parts That Don't Need Native Code
If Expo throws errors, copy app.json (use current version when developing native/using XCode or Android Studio).
Remove these lines from app.json:
    "isDetached"
    "detach": {
      "scheme":...
      "iosExpoViewUrl":...
      "androidExpoViewUrl": ...
    }
    
(note: app.json needs to include those lines when developing for native, with Xcode or Android Studio)


## How to protect against native elements in expo development
-- also helps with expo code updates that don't have the binary update too?

# Includes These Packages
styled-components
redux
react-redux

# Our Logic
App Theming:
    /src/interface/theming/
    AppStyles

Strings:
    /src/logic/strings/

# Structure
/src/
contains all javascript source code beyond App.js

# To-Do's
-AsyncStorage

-eject

-base native projects

-get working with Expo & native at same time

-react-router-redux???
https://github.com/reactjs/react-router-redux


Expo-Project:
-add expo-based notifications (maybe?)