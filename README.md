# built by Betterment Labs
www.bettermentlabs.com

# base-expo-native-project
Betterment Labs's starter project with expo / native dual development

# Version Info

# How To Use This File
* Note: First follow "Project Setup Instructions" below.
* If you (personally) are only using Expo, you only need to follow these instructions.
* If you are going to publish to Expo, you also need to follow the bolded instructions in "Native Development Instructions"

## Use with Expo
* Copy "app.json.expo" and rename to "app.json" (if you already have an app.json, it can be deleted)

## Use with Native Builds
* Before using with Native Builds, follow "Native Development Instructions" below
* Copy "app.json.native" and rename to "app.json" (if you already have an app.json, it can be deleted)

## Project Setup Instructions
1. Download
2. files in src/ are basic templates for you to use to build your app on. Pay attention to the (few) times they directly call base/ code. It's important.
3. Get Packages
    1. from home directory, run 'yarn'
    2. from ios/ directory, run 'pod install && pod update'
4. Open!
    1. XDE
        1. Open
        2. Load project (this root directory)

## Native Development Instructions
Before Publishing to Expo (**steps in bold**) or Developing Native Apps for App Stores
Some native features require these steps too (like notifications, analytics)
1. Update App Identifiers:
    1. Setup:
        1. **get your expo org/slug path**
        2. Get your bundle/package identifiers:
            1. Android:
            2. iOS:
    2. **in app.json:** - both app.json.expo && app.json.native
        1. **name**
        2. **slug**
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
3. Open!
    1. XDE - must be running before building native versions of apps
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
4. Update Google Play Services:
    1. Higher versions of Google Play Services require a google-services.json file:
        https://developers.google.com/android/guides/google-services-plugin
    2. Once you add this file to your app/ directory, update google play services version:
        i. in app/build.gradle, update playServicesVersion number inside the ext {} (around line 18)
            latest version of this writing is 11.8.0
        ii. find google play services version info here: https://developers.google.com/android/guides/releases

## Upgrading Packages
* Android
    * Upgrade Google Play Services: see step 4 in *"Native Development Instructions"* above
* iOS
    * from ios/ directory, run 'pod install && pod update' 

## How to protect against native elements in expo development
Native Modules's potential lack of existence must be guarded against as follows:
```javascript
    if (NativeModules.MyModule != undefined) {
        let MyModule = NativeModules.MyModule;
        if (MyModule.myMethod != undefined) {
            MyModule.myMethod(myInputs);
        }
    }
```

## Other Notes
* iOS Permissions:
    * When using iOS permissions, you'll need to update Info.plist with the reason your app needs the requested permission

# Includes These Packages
* react
* react-native
* react-router-native
* react-redux
* redux
* redux-devtools
* expo
* styled-components
* axios

# Includes These Native Packages

# Native Packages To-Add
* react-native-onesignal
* react-native-fbsdk
* firebase?
* in-app-purchases

# Our Logic
See implementation of the following in the files inside defaultFiles
* App Theming:
    * /src/base/interface/theming/
    * AppStyles

* Strings:
    * src/base/logic/strings/

# Structure
/src/

contains all javascript source code beyond App.js

# To-Do's
* base native projects
* get working with Expo & native at same time
* react-router-redux??? https://github.com/reactjs/react-router-redux

* Expo-Project:
    * add expo-based notifications (maybe?)
    * live theme update from in-app 
    * language override
    * more elegant way to handle expo/native builds (different app.json files)