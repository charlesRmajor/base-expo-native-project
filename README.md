# built by Betterment Labs
www.bettermentlabs.com

# base-expo-native-project
Betterment Labs's starter project with expo / native dual development

# TUTORIAL
Learn how to use all essential elements of this project by following our tutorial to add a location tracker. In this tutorial, you will learn how to:
1. Add a new Redux Store to your app
2. Effectively use this redux store
3. Create a new dumb component & dumb view
4. Create a new container to connect your dumb view to the new redux store
5. Create a new router & connect it to MainRouter.js

#### Before beginning the tutorial, go through "Project Setup Instructions" & "How to Use with Expo" below
Find tutorial files in /Tutorials/LocationServices/. The /src/ folder has the final files from finishing the tutorial. Replace the /src/ directory in the root project folder to see final product.
### Tutorial Link: https://github.com/charlesRmajor/base-expo-native-project/tree/master/Tutorials/LocationServices

# Overview
## This README:
1. Essential Glossary
2. Base Project Use
3. Project Structure - how this project is organized
4. Project Setup Instructions - essential setup before doing anything else. Enough to use Expo for project development.
5. Native Development Setup Instructions - needed before developing any new native code or building native apps or publishing to Expo
6. Upgrading Packages - instructions for updating yarn/npm packages
7. Add Additional Native Code/Modules - how to add new native code/modules
8. Troubleshooting
9. Detailed Documentation
10. TO-DO's: what we're still working on for this project

##### NOTE: if you want to use this base project with a project that already exists, see "Freeform Notes on Incorporating into Already Existing Projects" section at bottom of this README for some guidance.

### 1. Essential Glossary:
* dumb component: contains only styling, no logic. Another component or container must tell it what it's displaying/doing.
* container: (like a controller or viewController in a MVC model) connects dumb view components to data structures & logic

# 2. Base Project Use

## Interface:
### Building a New Router - see Tutorial from link above
### Building a New Dumb View - see Tutorial from link above
### Building a New Smart (connected) Container - see Tutorial from link above

### Theming
* app theme is set in src/interface/theming: ThemeColors.js & ThemeFont.js. See these examples for how to use. And src/interface/mainViews/BettermentLabsLandingPage.js for implementation.

### Styled Components
* see src/interface/mainViews/BettermentLabsLandingPage.js for example of using styled components with our app themes.

### Strings
* Strings (for localization) are handled on a page (or mainView) level.
* See src/logic/strings for use:
    * make new strings files for each page (format: strings_PageName.js)
    * these then need to be registered in appStringsFiles.js to be used by your pages (PageName: require('./strings_PageName')
    * our router (BRoute) automatically calls the strings page registered by appStringsFiles.js (name must match page component name that is put in BRoute)
    * see BettermentLabsLandingPage for example of how to use these strings

### Redux Store
* manage app state
    * automatically uses redux store to manage app theme & strings
* see src/logic/store/appStoreSections.js && .../setUserInfo.js for template on how to add new stores and src/logic/loading/asyncStorage.js for how to use this implementation

### asyncStorage
* see src/logic/loading/asyncStorage.js for a template on how to use asyncStorage with Redux Store

## 3. Project Structure
###### see full project structure for detailed notes: https://github.com/charlesRmajor/base-expo-native-project/blob/master/FullProjectDirectoryStructure.md
* base/ & src/ folders contain all project javascript & react-native code (beyond App.js as the app launcher — don't use app.js)
    * #### base/ — contains essential Betterment Labs code for theming, strings, redux store management, and native modules integration
        * src/AppAssets.js - this is where path info about static app assets (images, videos, audio files, etc -- not fonts) goes
    * #### src/ — this is where your app lives.
    * ### both base/ & src/ folders have the following structure:
        * #### interface/ has all user interface (UX) code
            * ##### components: for simple dumb components (like buttons)
            * ##### containers: connect dumb view components to data structures & logic 
            * ##### dumbViews: full views (views that could conceivably be an entire page) - dumb, with no logic
            * ##### routers: components that keep track of the full page views and navigation
            * ##### theming: code related to theming
                * ###### fontSets: see ChivoFontSet.js for example on how to add new font sets
            * src/.../ColorPalette.js - example app color palette. Don't change. Make a new one with same format & link to ThemeColors.js
            * src/.../ThemeColors.js - tells theme how to use the ColorPalette
            * src/.../ThemeFont.js - set the current Theme's font
        * #### logic/ has all non-interface app logic
            * ##### jsExtend: javascript-only functions (don't use any react/react-native)
            * ##### loading: functions that assist with loading the app (setting up redux store, app themes, fonts, etc)
            * ##### nativeBridge: functions that link to the native code (see full directory structure doc linked above for details on native code)
            * ##### permissions: functions that assist with getting permisison from user for using app features
            * ##### store: redux store functions
            * ##### strings: functions for loading & setting app strings
            * base/.../AppLaunchLogic.js - add any additional initial app launch loading that is needed
            * base/.../AppSubscriptions.js - add (and remove) any subscriptions needed by the whole app (such as app notifications)
        * src/interface/routers/MainRouter.js is the main app insertion point
        * MainRouter also gives an example of how BRouter can be used to create new routers

When building new pages, I recommend you copy src/interface/mainViews/baseMainView.js and go from there -- just make sure to change the name of the view component & file!!!

### Updates to this Base Project
If you find yourself wanting to change any files outside of src/ or the app.json.* files, ask yourself if you **REALLY** need to. If you do, it's likely something that should be changed about this base project — please put in a pull request for the change, or open an issue, or send me a note about the change.

## 4. Project Setup Instructions
1. Download
2. files in src/ are basic templates for you to use to build your app on. Pay attention to the (few) times they directly call base/ code. It's important.
3. Get Packages
    1. from home directory, run 'yarn'
4. setup for Expo or Native use (see sections below -- if you are developing for Native, you also need to follow directions under "Native Development Setup Instructions" below)
5. Open!
    1. XDE
        1. Open
        2. Load project (this root directory)

### How to Use with Expo
* Before using with Expo, follow "Project Setup Instructions" below
* Copy "app.json.expo" and rename to "app.json" (if you already have an app.json, it can be deleted)

### How to Use with Native Builds
* Before using with Native Builds, follow "Native Development Instructions" below
* Copy "app.json.native" and rename to "app.json" (if you already have an app.json, it can be deleted)

## 5. Native Development Setup Instructions
Only the person on your project responsible for native code development needs to worry about this section. Once your project has been setup by using these instructions once, you should be good to go!

Before Publishing to Expo (**steps in bold**) or Developing Native Apps for App Stores
Some native features require these steps too (like notifications, analytics)
1. Update App Identifiers:
    1. Setup:
        1. **get your expo org/slug path**
        2. Get your bundle/package identifiers:
            * This project assumes that you use the form ```com.OrganizationID.CanonicalAppID``` & expo url will be of form ```exp://exp.host/@OrganizationID/CanonicalAppID```. OrganizationID & CanonicalAppID will have to be entered separately.
            1. Android:
            2. iOS:
            3. Facebook:
                * Get these:
                    * FacebookAppID: 
                    * FacebookDisplayName:
                * From Step 1 of Getting Started Guide: https://developers.facebook.com/docs/ios/getting-started
            4. OneSignal App ID: 
                * run setup for Apple & Android platforms
                * Apple:
                    * included p12 password: ixrrxffalj 
    2. **in app.json:** - both app.json.expo && app.json.native
        1. **name**
        2. **slug**
        3. ios.bundleIdentifier: ```com.OrganizationID.CanonicalAppID```
        4. android.package: ```com.OrganizationID.CanonicalAppID```
    3. for iOS/Xcode Project:
        1. from ios/ directory, run 'pod install && pod update'
        2. Supporting/EXShell.plist ... manifestURL updated with your Expo org/slug path: ```exp://exp.host/@OrganizationID/CanonicalAppID```
        3. project build settings (click on project name in file navigator)
            1. Under "Targets" (project name) & "General"
            2. Update "bundle identifier" to ```com.OrganizationID.CanonicalAppID```
            3. Update version info as you choose. NOTE: "Build" numbers uploaded to iTunes store must be unique for the bundle identifer
            4. Update OneSignalID: 
                * AppDelegate.m — ```NSString *OneSignal_AppID = @"OneSignal_AppID";```
                * OneSignalNotificationServiceExtension:
                    * this allows for notifications with full formatting & media included
                    * you can delete it if not needed (not recommended)
                    * bundle ID needs to be updated to match your ```com.OrganizationID.CanonicalAppID```
            5. Update Facebook App Info:
                * open ./Supporting/Info.plist
                * update these:
                    * FacebookAppID: {your-app-id}
                    * FacebookDisplayName: {your-app-name}
                    * replace numbers after "fb" with your app id! here: ```URL types -> Item 0 -> URL Schemes -> Item 0 -> fb{your-app-id}```
    4. for Android Project:
        1. in android/build.gradle,update: 
            * the fields below
            ```java
            ext {
                ...
                OneSignal_AppID = ''
                Google_Project_Number = ''
                CanonicalAppID = 'CanonicalAppID'
                OrganizationID = 'OrganizationID'
                appVersionCode = 1
                appVersionName = '0.1.0'
            }
                ```
            * NOTE: appVersionCode uploaded to play store must be unique for this com.OrganizationID.CanonicalAppID
        2. If your expo link DOES NOT fit the form "exp://exp.host/@OrganizationID/CanonicalAppID", then you must update this:
            * in "...MainActivity.java", update expo org/slug path
                ```public String publishedUrl() { return "exp://exp.host/@OrganizationID/CanonicalAppID"; }```
        4. If you don't want to force Portrait device, orientation remove or change (to "landscape") this line in AndroidManifest.xml:
        ```xml android:screenOrientation="portrait"```
        5. When you run gradle sync, you'll probably get a bunch of errors for the modules the project depends on. Follow the prompts to update the build SDK settings to match the project's current build SDK version. You'll have to do this everytime after running yarn. (coming up with a more elegant solution is a to-do for this proejct)
2. Open!
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
3. For Google Play Services, including Firebase & Android Notifications, you need to update Google Play Services (see section in *Upgrading Packages* below)

## 6. Upgrading Packages
* Android
    * Update Google Play Services:
        1. Higher versions of Google Play Services require a google-services.json file: https://developers.google.com/android/guides/google-services-plugin
        2. Once you add this file to your app/ directory, update google play services version:
            1. in android/build.gradle, update playServicesVersion number inside the ext {} (around line 3). latest version of this writing is 11.8.0
            2. find google play services version info here: https://developers.google.com/android/guides/releases
* iOS
    * from ios/ directory, run 'pod install && pod update' 

# 7. Add Additional Native Code/Modules
[SECTION NEEDS TO BE WRITTEN]

## NOTE: How to protect against native elements in expo development
Native Modules's potential lack of existence must be guarded against. When calling Native Modules, use the following check to fail gracefully.
```javascript
    if (NativeModules.MyModule != undefined) {
        let MyModule = NativeModules.MyModule;
        if (MyModule.myMethod != undefined) {
            MyModule.myMethod(myInputs);
        } else {
            [... what to do if myMethod is not found ...]
        }
        [... what to do if MyModule is not found ...]
    }
```

For using packages that require native code integration, consult /base/logic/nativeBridge/OneSignal/*
and where this package is used: /base/logic/notifications/OneSignalSupport.js


## iOS Permissions:
    * When using iOS permissions, you'll need to update Info.plist with the reason your app needs the requested permission

# 8. Troubleshooting
## iOS/XCode
* If XCode can't find the "Pods" project:
    1. make sure you opened the *.xcworkspace file
    2. if you did, close it, try opening the *.xcodeproj file. Ignore all the errors. But let XCode do any syncing it needs to do.
    3. Then close and open the *.xcworkspace  file again.
* General Troubleshooting Suggestions:
    * clean project (get instructions from past build instructions file)

# 9. Detailed Documentation
#### Callbacks:
###### This code uses the following callback structure for function foo();
```javascript
const myCallback = (result) => {... do something with result};
foo(myCallback);

----------------------
result is an object with the structure:
{   error: bool,
    errorMessage: string,
    content: {type depends on function}
}
```

### Version Info
This was built with
* Expo: 25.0.0
* React-Native: 25.0.0
* React: 16.2.0
* Redux: 3.7.2
* React-Redux: 5.0.6
* Redux-DevTools: 3.4.1
* react-native-onesignal: 3.0.9
* Styled-Components: 3.1.6
* Axios: 0.17.1

Note: When updating these essential packages for Betterment Labs projects (especially Expo, React, & React-Native), this base project should be updated & then the project code should be copied into the new base project. This should just be files in src/ and the app.json.* files (unless you have modified other files, in which case you are on your own).

# 10. To-Do's
### BETTER ORGANIZE THIS TO-DO LIST
* base native projects:
    * react-native-onesignal
        * test android
    * react-native-fbsdk
        * Android
        * RN integration
        * test (setup?)
* Betterment Labs Code:
    * getting device contacts
        * Android native module still needed
    * in app purchases? (can we use the packages this was based on before?)
        * iOS: 
            * Working
        * Android:
            * 
* publish to expo with screen that says it needs to be updated to whatever the person wants!!!
* Setup Router types:
    * swipeable tutorial/wizard style
    * nested hierarchies
    * standardize passing navigation links (redux state)
* change theme in app:
    * add other themes
    * fix app icon
    * language override
* add permissions tracking to redux/OneSignal/FB Analytics
* fix app icons -- and add instructions for updating icons (XCode & Android Studio)
* android back button hooked up to router
* should essential logic of MainRouter be abstracted away from app insertion point?
* support additional default store sections from app

### Other Packages To Add?
* redux-thunk
* react-native-firebase

* use Google Firebase (or other) to store basic retrievable app info such as:
    * current available in-app-purchases
    * what version(s) of app are "dead"
    * others?

* get working with Expo & native at same time
* react-router-redux??? https://github.com/reactjs/react-router-redux
* app store signing:
    * Android: https://developer.android.com/studio/build/build-variants.html
        * https://medium.com/react-native-training/fastlane-for-react-native-ios-android-app-devops-8ca85bee614e
        * probably needs to be more careful about securely storing passwords???
    * General: 
* android studio: override module dependencies gradle/sdk version info:
    * script to do so automatically after running yarn?
    * alias to project files except our custom build.gradle?
        * simple OSX Finder "create alias" of those files didn't work
    * does Android Studio have some way to do this?
    * can we get CanonicalAppID, OrganizationID, appVersionName from app.json into gradle?
* XCode:
    * can we get CanonicalAppID, OrganizationID, appVersionName from app.json into iOS build settings?
* can app.json have a CanonicalAppID & OrganizationID and then automatically update bundle & package identifiers to match?
* add general update build instructions to this readme
* other instructions/troubleshooting notes from my build docs?
* separate out iOS/Android studio instructions above
* add table of contents to this readme -- improve Readme & Tutorial formatting
* add instructions for cloning this repo, getting cocoapods, more detail using yarn, etc.
    * using your own in app purchases
    * stripping out un-needed code
* add default fallbacks for styled components
                
* In App Purchases:
    * RN: get IAP purchase options dynamically:
        * iOS: must load product IDs from server to query App Store

* process of testing after setup to make sure everything is working correctly:
    * in app purchases:
        * purchase
        * subscription
        * restore

* animated transitions: https://github.com/Traviskn/react-router-native-stack

# Questions:
* does this part of AndroidManifest.xml need to be updated for a new project?
        ```xml <data android:scheme="exp0eb95a6a4750409ebfe07d5095542b14"/>```
* do strings need to be managed by our redux store at all or is handling them through the router sufficient?

## Freeform Notes on Incorporating into Already Existing Projects:
* should hopefully be able to largely drop your code into src/
* and use src/interface/controllers/MainController.js as the main app insertion point
* kind of what App.js or index.js might have been before … but already has the controller bit and a really basic template for a router
* so page navigation stuff may need to be updated. You probably can just drop it in as is. But we’ll need to use my BRoute for analytics, strings, and themes

## Troubleshooting
#### iOS In-App-Purchases:
https://stackoverflow.com/questions/7947805/ios-in-app-purchase-no-products-received/11707704#11707704