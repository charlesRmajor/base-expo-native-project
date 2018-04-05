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
import {ThemeProvider} from 'styled-components';

// Import Core Project Modules
import {defaultInterfacePropsFrom, allStoreSections} from '../../../base/logic/store';
import {addPropsRequestFromStore} from '../../../base/logic/store/helpers';
import {getStoreSection,
    getRouterGoTo,
    getRouterGoBack,
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
import {defaultAppStyles} from '../../../base/interface/theming/AppStyles';
import SwipeableRouter from '../../../base/interface/routers/SwipeableRouter';
import getSimplePageView from '../../../base/interface/dumbViews/getSimplePageView';
import FullScreenLoading from '../../../base/interface/dumbViews/FullScreenLoading';
import BettermentLabsLandingContainer from '../containers/BettermentLabsLandingContainer';

const SwipeableRouterExampleRoutes = () => {
    var Routes = [];
    for (i = 0; i < 10; i++) { 
        Routes.push({view: getSimplePageView(i)})
    }
    return Routes;
}

const SwipeableRouterExample = {
    routerName: 'SwipeableRouterExample',
    routesArray: SwipeableRouterExampleRoutes()
}

export const MainRoutes = {
    routerName: 'MainRoutes',
    Home: {
        view: BettermentLabsLandingContainer,
    },
    SwipeableRouterExample: {
        view: SwipeableRouterExample
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
        // console.log(this.props);
        const styles = this.props.styles || defaultAppStyles;

        // next line checks if we're ready to render & should probably be exported to a separate file
        const readyToRender = (this.props.loading == null || this.props.loading == undefined) ? false : (!isObject(this.props.loading.essentialState) ? this.props.loading.essentialState :
            (() => { var ready = true; for (const key in this.props.loading.essentialState.areLoaded) { if (!this.props.loading.essentialState.areLoaded[key]) {ready=false; return}} return ready })())
        
        const FullScreenLoadingOverlay = null;//<FullScreenLoading {...this.props} />;

        const CurrentView = !readyToRender ? <FullScreenLoading {...this.props} /> :
            getCurrentView({
                view: this.props.router.location.view,
                routeProps: this.props});
        
        return(
            <ThemeProvider theme={styles}>
                <View style={{height:'100%', width:'100%'}}>
                    <StatusBar barStyle="light-content" />
                    <View style={{height:'3%', backgroundColor: '#000000'}} />
                    {CurrentView}
                    {FullScreenLoadingOverlay}
                </View>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = function(store) {
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

export const MainRouterGoBack = ({dispatch}) => {
    const goFunc = dispatch ? () => dispatch(getRouterGoBack(MainRoutes)) : null;
    return(goFunc)
};

export const getMainRouterGoToLocationView = ({dispatch}) => {
    const goFunc = dispatch ? () => dispatch(getRouterGoTo(MainRoutes)(MainRoutes.LocationView)) : null;
    return(goFunc)
};

export const getMainRouterGoToSwipeableExample = ({dispatch}) => {
    const goFunc = dispatch ? () => dispatch(getRouterGoTo(MainRoutes)(MainRoutes.SwipeableRouterExample)) : null;
    return(goFunc)
};

export const MainRouterStoreSection = getStoreSection(MainRoutes);
export const SwipeableRouterExampleStoreSection = getStoreSection(SwipeableRouterExample);
