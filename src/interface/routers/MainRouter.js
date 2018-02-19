/*
  MainRouter.js
    CanonicalAppName
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component MainRouter.js
  Description:  main app controller
  Essentials:
          AppLaunchLogic.js   ->  runs in componentWillMount()
          MainRouter.js   ->  return in render()

  Inputs: N/A
  Outputs: N/A (your app on the screen!)
*/

// IMPORTS
// Import React Modules
import React from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

// Import Other Node Modules

// Import Core Project Modules
import {defaultInterfacePropsFrom, allStoreSections} from '../../../base/logic/store';
import {addPropsRequestFromStore} from '../../../base/logic/store/helpers';
import {getStoreSection,
    getRouterGoTo,
    getRouterGoBack,
    getRouterReducer,
    getFirstAvailableRoute,
    getCurrentView,
    getFirstAvailableKey,
    LogRoute
} from '../../../base/logic/store/RouterStoreHelper';

// Import App Logic
import {isObject} from '../../../base/logic/jsExtend/objectMerge';
import AppLaunch from '../../logic/AppLaunchLogic.js';
import {AppSubscribe, AppUnSubscribe} from '../../logic/AppSubscriptions.js';
import getPageStrings from '../../../base/logic/strings/getPageStrings';

// Import Other App UI Elements
// import BettermentLabsLandingPage from '../mainViews/BettermentLabsLandingPage';
import BettermentLabsLandingContainer from '../containers/BettermentLabsLandingContainer';

export const MainRoutes = {
    RoutesName: 'MainRoutes',
    Home: {
        view: BettermentLabsLandingContainer,
    }
}

class MainRouter extends React.Component {
    componentWillMount() {
        if (this.props.dispatch) {AppLaunch(this.props.dispatch)};
    }
  
    componentDidMount() {
        if (this.props.dispatch) {AppSubscribe(this.props.dispatch)};
    }
  
    componentWillUnmount() {
        if (this.props.dispatch) {AppUnSubscribe(this.props.dispatch)};
    }
    
    render() {
        const readyToRender = (this.props.loading == null || this.props.loading == undefined) ? false : (!isObject(this.props.loading.essentialState) ? this.props.loading.essentialState :
            (() => { var ready = true; for (const key in this.props.loading.essentialState) { if (!this.props.loading.essentialState[key]) {ready=false; return}} return ready })())
        
        const CurrentView = !readyToRender ? <View/>  :
            getCurrentView({
                view: this.props.router.location.view,
                routeProps: this.props});
        
        return(
            <View style={{height:'100%', width:'100%'}}>
                   <StatusBar barStyle="light-content" />
                   <View style={{height:'3%', backgroundColor: '#000000'}} />
                {CurrentView}
            </View>
        );
    }
}

const mapStateToProps = function(store) {
    MainRouterStoreSection
    const additionalSections = {
        loading: allStoreSections.loading,
        router: allStoreSections[getFirstAvailableKey(MainRouterStoreSection)]
    };
    return(addPropsRequestFromStore(
        defaultInterfacePropsFrom(store),
        additionalSections,
        store));
  }
  
export default connect(mapStateToProps)(MainRouter);

export const MainRouterGoBack = (dispatch) => {
    const goFunc = dispatch ? () => dispatch(getRouterGoBack(MainRoutes)) : null;
    return(goFunc)
};

export const getMainRouterGoToLocationView = (dispatch) => {
    const goFunc = dispatch ? () => dispatch(getRouterGoTo(MainRoutes)(MainRoutes.LocationView)) : null;
    return(goFunc)
};

export const MainRouterStoreSection = getStoreSection(MainRoutes);