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
    a. Setup:
        i. get your expo org/slug path
        ii. Get your bundle/package identifiers:
            A. Android:
            B. iOS:
    b. in app.json:
        i. name
        ii. slug
        iii. ios.bundleIdentifier
        iv. android.package
    c. for iOS/Xcode Project:
        i. Supporting/EXShell.plist ... manifestURL updated with your Expo org/slug path
        ii. project build settings (click on project name in file navigator)
            a. Under "Targets" (project name) & "General"
            b. Update "bundle identifier"
            c. Update version info as you choose
                NOTE: "Build" numbers uploaded to iTunes store must be unique for the bundle identifer
    d. for Android Project:
        i. in app/build.gradle, android.defaultConfig.applicationId
        ii. in "...MainActivity.java", update expo org/slug path
            public String publishedUrl() { return "exp://exp.host/@sosappsinc/base-expo-native-project"; }
4. Get Packages:
    a. from home directory, run 'yarn'
    b. from ios/ directory, run 'pod install && pod update'
5. Open!
    a. XDE
        i. Open
        ii. Load project (this root directory)
    b. Android Studio
        i. Open
        ii. Load Project (android folder in root directory)
        iii. sync Gradle
        iv. Run!
    c. XCode (for iOS Development)
        i. Open XCode
        ii. Open *.xcworkspace file in ios/ folder
        iii. run!
6. Update Google Play Services:
    a. Higher versions of Google Play Services require a google-services.json file:
        https://developers.google.com/android/guides/google-services-plugin
    b. Once you add this file to your app/ directory, update google play services version:
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