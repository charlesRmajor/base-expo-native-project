# built by Betterment Labs
www.bettermentlabs.com

# base-expo-native-project
Betterment Labs's starter project with expo / native dual dev

# Version Info

# How To Use This
1. Downlod
2. Prepare files for project
    1. Copy folders inside "defaultFiles" (interface & logic folders) into the "src" folder
    2. delete src/.gitignore
    3. delete "defaultFiles"
    4. PLEASE don't commit those changes to this repo!!!
3. Update App Identifiers:
    1. Setup:
        1. get your expo org/slug path
        2. Get your bundle/package identifiers:
            1. Android:
            2. iOS:
    2. in app.json:
        1. name
        2. slug
        3. ios.bundleIdentifier
        4. android.package
    3. for iOS/Xcode Project:
        1. Supporting/EXShell.plist ... manifestURL updated with your Expo org/slug path
        2. project build settings (click on project name in file navigator)
            1. Under "Targets" (project name) & "General"
            2. Update "bundle identifier"
            3. Update version info as you choose
                NOTE: "Build" numbers uploaded to iTunes store must be unique for the bundle identifer
    4. for Android Project:
        1. in app/build.gradle, android.defaultConfig.applicationId
        2. in "...MainActivity.java", update expo org/slug path
            public String publishedUrl() { return "exp://exp.host/@sosappsinc/base-expo-native-project"; }
4. Get Packages:
    1. from home directory, run 'yarn'
    2. from ios/ directory, run 'pod install && pod update'
5. Open!
    1. XDE
        1. Open
        2. Load project (this root directory)
    2. Android Studio
        1. Open
        2. Load Project (android folder in root directory)
        3. sync Gradle
        4. Run!
    3. XCode (for iOS Development)
        1. Open XCode
        2. Open *.xcworkspace file in ios/ folder
        3. run!
6. Update Google Play Services:
    1. Higher versions of Google Play Services require a google-services.json file:
        https://developers.google.com/android/guides/google-services-plugin
    2. Once you add this file to your app/ directory, update google play services version:
        i. in app/build.gradle, update playServicesVersion number inside the ext {} (around line 18)

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

## Upgrading Packages
Android:
    Upgrade Google Play Services:

## How to protect against native elements in expo development
-- also helps with expo code updates that don't have the binary update too?

## Other Notes
iOS Permissions:
-When using iOS permissions, you'll need to update Info.plist with the reason your app needs the requested permission

# Includes These React-Native Packages
styled-components
redux
react-redux

# Includes These Custom Native Modules & Integration

# Includes These Native Packages

# Native Packages To-Add
react-native-onesignal
react-native-fbsdk

firebase?

in-app-purchases



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
-base native projects

-get working with Expo & native at same time

-react-router-redux???
https://github.com/reactjs/react-router-redux


Expo-Project:
-add expo-based notifications (maybe?)

-live theme update from in-app 

-language override