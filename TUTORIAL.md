# TUTORIAL
Learn how to use all essential elements of this project by following our tutorial to add a location tracker. In this tutorial, you will learn how to:
1. Add a new Redux Store to your app
2. Effectively use this redux store
3. Create a new dumb component
4. Create a new container to connect your dumb view to the new redux store
5. Setup Location Services & Redux Store
6. Track Location On New Page

6. Create a new router & connect it to MainRouter.js
7. Bonus: create a new page
8. Add getting starting location to AppLaunch
9. use watchPosition()

Note: React-Native GeoLocation Docs can be found here: https://facebook.github.io/react-native/docs/geolocation.html

#### Before beginning the tutorial, go through "Project Setup Instructions" & "How to Use with Expo" from this project's README: https://github.com/charlesRmajor/base-expo-native-project/blob/master/README.md

# Add & use location gathering component
1. Expo makes gathering the device location super easy!
2. Let's make a new helper function to cover the backend logic. Let's make a new folder "location" under src/logic/ and then a locationServices.js file inside that.
3. Copy the following in to locationServices.js:
    ```javascript
        export const getCurrentLocation = (callback) => {
            navigator.geolocation.getCurrentPosition(
            (position) => {
                callback && callback({error: false; content: position});
            },
            (error) =>
                callback && callback({error: true; errorMessage: error});
            ,
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
            );
        }
    ```

# 1. Add a new Redux Store to your app
    1. Create & setup new store file:
        1. in src/logic/store/, create your file: "userLocation.js"
        2. use userInfo.js as a template for this file
        3. create comment header
        4. NOTE: user's location consists of two properties: latitude and longitude
        5. You'll need action definitions like the following:
        ```javascript
            export const setUserLongitudeTo = (longitude) => {return({type:'SET_USER_LONGITUDE_TO', longitude: longitude})};
            export const setUserLatitudeTo = (latitude) => {return({type:'SET_USER_LATITUDE_TO', latitude: latitude})};
        ```
        6. since this part of our redux store has definite properties, we will want to declare their default values (in this case, null - we have no location meaning without getting some location from the user's device):
        ```javascript
            const defaultLocationState = {longitude: null, latitude: null};
        ```
        7. then you'll use these actions to create your reducer function (note use of default state):
        ```javascript
            const userLocationReducer = (state = defaultLocationState, action) => {
            switch (action.type) {
                case setUserLongitudeTo().type:
                    return Object.assign({}, state, {longitude: action.longitude})
                case setUserLatitudeTo().type:
                    return Object.assign({}, state, {latitude: action.latitude})
                }
            return state
            }
        ```
        8. This part of the store now needs to be exported in this project's format to be added to the store correctly:
        ```javascript
            // export default props to be loaded for all views
            export const userLocation = {name: 'userLocationState', reducer: userLocationReducer};

            export default userLocationSection = {
                userLocation: userLocation
            }
        ```
        9. Save your userLocation.js!
    2. Import your new store file into your app:
        1. in src/logic/store/, open appStoreSections.js
        2. Use the format there to import your userLocation store
        3. When you are finished, your appStoreSections.js file should look like this (not including comment header):
        ```javascript
            // Import Store Files
            import setUserInfoSection from './userInfo';
            import setAppPhonebookSection from './appPhonebook';
            import userLocationSection from './userLocation';

            export default appStoreSections = Object.assign({}, setUserInfoSection, setAppPhonebookSection, userLocationSection);
        ```

# 2. Effectively use this redux store


# 3. Create a new dumb component
1. Our app will start by simply displaying the user's location instead of the current banner
    1. So let's create a new component that will display this nicely. We'll want it to look something like:
    ```
        Latitude: 10.435
        Longitude: 123.235
    ```
    2. We can pseudocode our JSX to something like:
    ```html
        <Label>Latitude</Label><Value>{props.location.lat}</Value>
        <Label>Longitude</Label><Value>{props.location.lon}</Value>
    ```
2. Now let's add the strings we need.
    1. Create file "strings_LocationTextDisplay.js" in src/logic/strings/
    2. Using "strings_BettermentLabsLandingPage.js" as your template, we'll get a file that looks something like:
    ```javascript
        /* 
        strings_LocationTextDisplay.js
        Betterment Labs
        Created by Charles Major on 02/15/18. 
        Copyright © Betterment Labs 2018. All rights reserved.
        */

        import BLocalization from '../../../base/logic/strings/BLocalization';

        export default Strings = new BLocalization( {
            en: {
                labelLatitude: "Latitude",
                labelLongitude: "Latitude",
            },
            es: {
                labelLatitude: "NEEDS EN: Latitude",
                labelLongitude: "NEEDS EN: Latitude",
            }
        })
    ```
    3. And register this strings file with your string organizer (src/logic/interface/appStringsFiles.js), which after registering your new strings file will look like:
    ```javascript
        /* 
        appStringsFiles.js
        Betterment Labs
        Created by Charles Major on 02/03/18. 
        Copyright © Betterment Labs 2018. All rights reserved.
        */

    export default stringsFiles = {
        BettermentLabsLandingPage: require('./strings_BettermentLabsLandingPage'),
        LocationTextDisplay: require('./strings_LocationTextDisplay')
    }
    ```
    * ##### IMPORTANT NOTE:
        * the property name (LocationTextDisplay) in the stringsFiles must match the file export name of the page view (LocationTextDisplay)
    and save!
3. Create this new component (LocationTextDisplay.js) in src/interface/components/
    1. Use BButton.js as a template example for our new component.
    2. Create comment header and import the essentials: 
    ```javascript
        /*
        LocationTextDisplay.js
            Betterment Labs
            Created by BettermentLabs. 
            Copyright © 2018 Betterment Labs, LLC. All rights reserved.

        Component LocationTextDisplay.js
        Description: Displays text form of a location, e.g.:
                Latitude: 10.435
                Longitude: 123.235

        Inputs: object 'props'
            includes all typical React & base project props
            location:
                lat:    latitude value
                lon:    longitude value
        Outputs: 
            renders text per description above
        */
       // IMPORTS
        // Import React Modules
        import React from 'react';

        // Import Other Node Modules
        import styled from 'styled-components';
        // Import Other App Logic
        import getPageStrings from '../../logic/strings/getPageStrings';

        // Import Other App UI Elements
        import BText from '../../../base/interface/components/BText';
    ```
    3. Now create our starter component with filler values and first guesses at what we want:
    ```javascript
    const LocationView = styled.View`flex:${({flex}) => flex || 1};
        align-self: center;
        justify-content: center;
        width: ${({width}) => width || '80%'};`
    ```
    5. We will now create our two sub-components as styled components.:
    ```javascript
        // Import Other App UI Elements
        import BText from '../../../base/interface/components/BText';

        const LocationView = styled.View`flex:${({flex}) => flex || 1};
            align-self: center;
            justify-content: center;
            width: ${({width}) => width || '80%'};`

        const Label = BText.extend`
            text-align: right;`

        const ValueLabel = BText.extend`
            text-align: left;`

        export default LocationTextDisplay = (props) => {
            return(
                <LocationView flex={props.flex || null} width={props.width || null}>
            <RowSection><Label>{viewStrings.labelLatitude}:</Label><ValueLabel>10.213</ValueLabel></RowSection>
            <RowSection><Label>{viewStrings.labelLatitude}:</Label><ValueLabel>120.123</ValueLabel></RowSection>
                </LocationView>
            )
        }
    ```
    6. Let's then plug this component back into our launch screen:
        1. Open "src/interface/dumbViews/BettermentLabsLandingPage.js"
        2. Replace
            ```javascript
            import {BHeader} from '../../../base/interface/components/BText';
            ```
            with
            ```javascript
            import LocationTextDisplay from '../../../src/interface/components/LocationTextDisplay';
            ```
            and the ```<BHeader>``` inside the mainView declaration below with ```<LocationTextDisplay/>```
        3. Save, Reload, and see how it looks! [1.png]
        4. We've got our text showing but not looking anything like we want! Using flex layout, we'll update our LocationTextDisplay  by adding a new styled component:
        ```javascript
        const RowSection = styled.View`flex: 1;
            flex-direction: row;
            justify-content: center;`
        ```
        and replace our location text below with:
        ```javascript
            <RowSection><Label>Latitude:</Label><ValueLabel>10.213</ValueLabel></RowSection>
            <RowSection><Label>Longitude:</Label><ValueLabel>120.123</ValueLabel></RowSection>
        ```

# 4. Create a new container to connect your dumb view to the new redux store
    1. Now we have to think about how we're going to wire up our dumb component to the location information saved in our store.
        * the way to approach this is to ask what the highest level that needs access to this data is (is it only a single component? Or will several components on the page need access to it?)
        * for our location-info header, only that header itself needs to access the location info
        * the temptation, then, is to add the link to the store into the LocationTextDisplay component
        * but remember! this a *dumb* component
        * so what do we do if all we need is a dumb component wired directly up to our data source? . . . 
    2. We will create a container LocationTextDisplayContainer around our dumb component.
    3. Check out src/interface/containers/BettermentLabsLandingContainer.js for an example on how to do this.
        * note that this container also includes the BRoute info (this is because it contains an entire view that will be directly accessed by a router) -- this will not be needed for our LocationTextDisplayContainer
    4. Let's make this new container with our basic starting comment header, imports (w/ dumb component), and function declaration. To start with, this won't look like we've done much at all!
        ```javascript
            /*
            LocationTextDisplayContainer.js
                Betterment Labs
                Created by BettermentLabs. 
                Copyright © 2018 Betterment Labs, LLC. All rights reserved.

            Component LocationTextDisplayContainer.js
            Description:
            */
            // IMPORTS
            // Import React Modules
            import React from 'react';

            // Import App Logic

            // Import Other App UI Elements
            import LocationTextDisplay from '../components/LocationTextDisplay';

            export default LocationTextDisplayContainer = (props) => {
                return(
                    <LocationTextDisplay />
                )
            }
        ```
    5. Back in BettermentLabsLandingPage, change the references from LocationTextDisplay to LocationTextDisplayContainer. This page should refresh error-free in your simulator. [1.png]
    6. Now we'll want to send the location (latitude & longitude) info from the container to the dumb component. In our container, then, change ```<LocationTextDisplay />``` to ```<LocationTextDisplay lat={props.lat} lon={props.lon} />```
        * and back in the dumb component, update the text inside the ValueLabel tags to match these (props.lon & props.lat)
        * when you refresh now, you'll see the numbers after the "Latitude: " & "Longitude: " labels are gone. This is because we're not yet passing any values down, so they're null and there's nothing to render. You can try sending a test value from the Container to make sure it's working okay.
    7. Wire up the redux side of our container:
        1. Add these redux imports to the container:
        ```javascript
            // Import React Modules
            ...
            import { connect } from 'react-redux';
            // Import App Logic
            import {allStoreSections} from '../../../base/logic/store';
        ```
        2. change our container declaration to: ```export const LocationTextDisplayContainer = (props) => {```
        3. add mapStateToProps function & export the connect:
        ```javascript
            const mapStateToProps = function(store) {
                return({location: store[allStoreSections.userLocation.name]}) // as set in src/logic/store/userLocation.js
            }
            
            export default connect(mapStateToProps)(LocationTextDisplayContainer);
        ```
        4. If you haven't wired up the "getting location" side of things, you can test this integration by changing your default location in src/logic/store/userLocation.js and verifying that the values you give show up!

# 5. Setup Location Services & Redux Store
    1. Add button string to strings_BettermentLabsLandingPage
    2. Helper function & redux integration. Open src/logic/store/userLocation.js
        1. We will now set the store option of "deviceIsGettingLocation". This will make sure we only call our location getter if it's not currently running. This structure is an excellent use of redux to ensure that async functions don't pile up.
        2. Add the following action definitions:
        ```javascript
            export const setDeviceIsFetchingLocation = ({type:'SET_DEVICE_IS_FETCHING_LOCATION'});
            export const setDeviceIsNotFetchingLocation = ({type:'SET_DEVICE_IS_NOT_FETCHING_LOCATION'});
        ```
        3. And the following reducer possibilities:
        ```javascript
            case setDeviceIsFetchingLocation.type:
            return Object.assign({}, state, {deviceIsGettingLocation: true})
            case setDeviceIsNotFetchingLocation.type:
            return Object.assign({}, state, {deviceIsGettingLocation: false})
        ```
    3. Get device's location (Expo has made this super easy!!!) and setup actions to update redux store as appropriate. Here's the commented code:
        ```javascript
            /* 
                locationServices.js
                Betterment Labs
                Updated by Charles Major on 2/1/18. 
                Copyright © 2018 Betterment Labs. All rights reserved.
            */
            // Import App Logic
            import {setUserLongitudeTo,
                    setUserLatitudeTo,
                    setDeviceIsFetchingLocation,
                    setDeviceIsNotFetchingLocation} from '../store/userLocation';

            const getCurrentLocation = (callback) => {
                console.log("getCurrentLocation");
                navigator.geolocation.getCurrentPosition(
                    // position is an object with property coords: {latitude: #, longitude: #}
                (position) => {
                    callback && callback({error: false, content: position})
                },
                (error) =>
                    callback && callback({error: true, errorMessage: error})
                ,
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
                );
            }

            // this function takes a redux store dispatcher as its input
            export const updateStoreWithCurrentLocation = (dispatch) => {
                // first we'll tell the store we're going to try to update the location
                dispatch && dispatch(setDeviceIsFetchingLocation);
                // then we'll make our callback funtions
                const callbackFunc = (result) => {
                    if (result.error) {
                        console.log("Failed to get device location with error: "+result.errorMessage);
                    } else {
                        const content = result.content;
                        // get redux actions to set longitude & latitude
                        const setUserLongitudeToAction = setUserLongitudeTo(content.coords.longitude);
                        const setUserLatitudeToAction = setUserLatitudeTo(content.coords.latitude);
                        dispatch && dispatch(setUserLongitudeToAction);
                        dispatch && dispatch(setUserLatitudeToAction);
                        // and we need to tell our store that we're no longer checking for the location
                        dispatch && dispatch(setDeviceIsNotFetchingLocation);            
                    }
                };
                // and call!
                getCurrentLocation(callbackFunc);
            }

            // function to get the function with dispatch needed to update the store (for passing to dumb components)
            export const getUpdateStoreWithCurrentLocationFunc = (dispatch) => {
                return(
                    () => updateStoreWithCurrentLocation(dispatch)
                )
            }
        ```
    3. In BettermentLabsLandingContainer.js (remember how to get there yet?), add a new function import:
        ```javascript
            // Import App Logic
            ...
            import {getUpdateStoreWithCurrentLocationFunc} from '../../logic/location/locationServices';
        ```
        the following function-with-dispatch-included before the return()
        ```javascript
            const thisUpdateStoreWithCurrentLocation = props.dispatch ? getUpdateStoreWithCurrentLocationFunc(props.dispatch) : null;
        ```
        and the follow prop to the BRoute:
        ```javascript
            <BRoute ...
                updateStoreWithCurrentLocation={thisUpdateStoreWithCurrentLocation}
                {...props}
                />
        ```
    4. In BettermentLabsLandingPage.js, add the button:
        ```javascript
            <ViewSpacer/>
            <BButton
                flex={2}
                text={strings.getLocationButton}
                onPress={props.updateStoreWithCurrentLocation}
            />
        ```
        You should be able to see your new button [2.png] and clicking on it should update the location in the header! [3.png]

# 6. Track Location On New Page


### Questions:
-should latitude & longitude be handled together or separately?




    ```javascript

    ```
    ```javascript

    ```
    ```javascript

    ```
