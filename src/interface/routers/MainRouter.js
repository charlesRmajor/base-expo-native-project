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
import { View } from 'react-native';
import { connect } from 'react-redux';

// Import Other Node Modules

// Import Core Project Modules
import BController from '../../../base/interface/routers/BRouter';
import BRoute from '../../../base/interface/routers/BRoute';
import {defaultInterfacePropsFrom, allStoreSections} from '../../../base/logic/store';
import {addPropsRequestFromStore} from '../../../base/logic/store/helpers';

// Import App Logic
import {isObject} from '../../../base/logic/jsExtend/objectMerge';
import AppLaunch from '../../logic/AppLaunchLogic.js';
import {AppSubscribe, AppUnSubscribe} from '../../logic/AppSubscriptions.js';

// Import Other App UI Elements
// import BettermentLabsLandingPage from '../mainViews/BettermentLabsLandingPage';
import BettermentLabsLandingContainer from '../containers/BettermentLabsLandingContainer';

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
        // console.log("MainRouter this.props");
        // console.log(this.props);
        const ViewRouter =
        (<BController
            {...this.props}
            >
            <BettermentLabsLandingContainer {...this.props} />
        </BController>)

            // readyToRender returns true if all store ... loading.essentialState items are true
        const readyToRender = (this.props.loading == null || this.props.loading == undefined) ? false : (!isObject(this.props.loading.essentialState) ? this.props.loading.essentialState :
            (() => { var ready = true; for (const key in this.props.loading.essentialState) { if (!this.props.loading.essentialState[key]) {ready=false; return}} return ready })())
        
        return (!readyToRender ? <View/> : ViewRouter);
    }
}

const mapStateToProps = function(store) {
    // get stores from defaults
    const defaultPropsReturn = defaultInterfacePropsFrom(store);
    const stateToPropsReturn = addPropsRequestFromStore(defaultPropsReturn, {loading: allStoreSections.loading}, store);
    return(stateToPropsReturn);
  }
  
export default connect(mapStateToProps)(MainRouter);