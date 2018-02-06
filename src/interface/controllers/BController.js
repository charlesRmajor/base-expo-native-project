/*
  BController.js
    CanonicalAppName
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BController.js
  Description:  base controller to componentize
*/
// IMPORTS
// Import React Modules
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { NativeRouter, Switch, AndroidBackButton } from 'react-router-native';

// Import App Logic
import {objectMerge} from '../../logic/jsExtend/objectMerge';

export const defaultPropsFromStore = {
    // loading: 'loadingState',
    styles: 'styleState',
    images: 'imageState',
    strings: 'stringsState',
}

export default BController = (props) => {
    // const childrenWithProps = (!(props && props.children && props.children.map)) ? null : props.children.map( (child) => {
    //     if (React.isValidElement(child)) {
    //         return React.cloneElement(child, objectMerge((child.props ? child.props : {}), props))
    //     } else {return child}
    // });

    // console.log("BController props");
    // console.log(props.children ? props.children : 'none');

    return (
        (<NativeRouter>
            <AndroidBackButton>
                <Switch>
                    {props.children}
                </Switch>
            </AndroidBackButton>
        </NativeRouter>)
    )
}

// const mapStateToProps = function(store) {
//     // console.log("defaultPropsWithStoreRef");
//     // console.log(defaultPropsWithStoreRef);
//     // console.log("store");
//     // console.log(store);
//     // if (defaultPropsWithStoreRef == null || defaultPropsWithStoreRef == undefined) {return}
//     // return {}
//     // const storeLoadingObject =
//     // return(defaultPropsWithStoreRef.map( (storeSection, storeRef) => {return {storeSection: store[storeRef]} }));
//     // return (storeLoadingObject);
//     const stateToPropsReturn = {};
//     for (key in defaultPropsFromStore) {
//         // console.log(key);
//         if (store[key]) {
//             // console.log(store[key]);
//             stateToPropsReturn[key] = store[key]
//         }
//     }

//     return {
//         loading: store.loadingState,
//         styles: store.styleState,
//         images: store.imageState,
//         strings: store.stringsState,
//         language: store.languageState
//     };
//   }
  
//   export default connect(mapStateToProps)(BController);