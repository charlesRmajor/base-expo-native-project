# built by Betterment Labs
www.bettermentlabs.com

# base-expo-native-project
Betterment Labs's starter project with expo / native dual development

# Version Info
This was built with
* Expo: 
* React-Native: 
* React: 

Note: When updating these essential packages for Betterment Labs projects, this base project should be updated & then the project code should be copied into the new base project. This should just be files in src/ and the app.json.* files (unless you have modified other files, in which case you are on your own).

## Updates to this Base Project
If you find yourself wanting to change any files outside of src/ or the app.json.* files, ask yourself if you **REALLY** need to. If you do, it's likely something that should be changed about this base project — please put in a pull request for the change, or open an issue, or send me a note about the change.

# How To Use This File
* Note: First follow "Project Setup Instructions" below.
    * If you (personally) are only using Expo, you only need to follow these instructions.
* If you are going to publish to Expo, you also need to follow the bolded instructions in "Native Development Instructions"

## Use with Expo
* Before using with Expo, follow "Project Setup Instructions" below
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
Only the person on your project responsible for native code development needs to worry about this section. Once your project has been setup by using these instructions once, you should be good to go!

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

# Notes On Adding Additional Native Code/Modules
[SECTION NEEDS TO BE WRITTEN]

## Other Notes
* iOS Permissions:
    * When using iOS permissions, you'll need to update Info.plist with the reason your app needs the requested permission

# Project Structure
* base/ — contains essential Betterment Labs code for theming, strings, redux store management, and native modules integration
* src/ — this is where your app lives. 
    * src/interface/controllers/MainController.js is the main app insertion point
    * MainController also gives an example of how BController can be used to create new controllers

When building new pages, I recommend you copy src/interface/mainViews/baseMainView.js and go from there -- just make sure to change the name of the view component & file!!!

### Theming
* app theme is set in src/interface/theming: ThemeColors.js & ThemeFont.js. See these examples for how to use. And src/interface/mainViews/BettermentLabsLandingPage.js for implementation.

### Styled Components
* see src/interface/mainViews/BettermentLabsLandingPage.js for example of using styled components with our app themes.

### Strings
* Strings (for localization) are handled on a page (or mainView) level.
* See src/logic/strings for use:
    * make new strings files for each page
    * these then need to be registered in appStringsFiles.js to be used by your pages
    * our router (BRoute) automatically calls the strings page registered by appStringsFiles.js (name must match page component name that is put in BRoute)
    * see BettermentLabsLandingPage for example of how to use these strings

### Redux Store
* manage app state
    * automatically uses redux store to manage app theme & strings
* see src/logic/store/appStoreSections.js && .../setUserInfo.js for template on how to add new stores and src/logic/loading/asyncStorage.js for how to use this implementation

### asyncStorage
* see src/logic/loading/asyncStorage.js for a template on how to use asyncStorage with Redux Store

# This Base Project Includes These Packages
* react
* react-native
* react-router-native
* react-redux
* redux
* redux-devtools
* expo
* styled-components
* axios

# Other Packages To Add?
* redux-thunk

# Native Still To Be Added
## Packages
* react-native-onesignal
* react-native-fbsdk
* react-native-firebase??? — couldn't get this working with Android before

## Our Code
* device contacts?
* in-app-purchases (or can I get the packages I based it on working?)

# To-Do's
* base native projects
* should essential logic of MainController be abstracted away from app insertion point?
* get working with Expo & native at same time
* react-router-redux??? https://github.com/reactjs/react-router-redux

* Expo-Project:
    * add expo-based notifications (maybe?)
    * live theme update from in-app 
    * language override
    * more elegant way to handle expo/native builds (different app.json files)

## Freeform Notes on Incorporating into Already Existing Projects:
* should hopefully be able to largely drop your code into src/
* and use src/interface/controllers/MainController.js as the main app insertion point
* kind of what App.js or index.js might have been before … but already has the controller bit and a really basic template for a router
* so page navigation stuff may need to be updated. You probably can just drop it in as is. But we’ll need to use my BRoute for analytics, strings, and themes