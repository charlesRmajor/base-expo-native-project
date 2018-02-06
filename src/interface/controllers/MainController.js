/*
  MainController.js
    CanonicalAppName
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component MainController.js
  Description:  main app controller
  Essentials:
          AppLaunchLogic.js   ->  runs in componentWillMount()
          MainController.js   ->  return in render()

  Inputs: N/A
  Outputs: N/A (your app on the screen!)
*/

// IMPORTS
// Import React Modules
import React from 'react';
import { connect } from 'react-redux';

// Import Other Node Modules

// Import Core Project Modules
// import BController, {defaultPropsFromStore} from './BController';
import BController, {defaultPropsFromStore} from './BController';
import BRoute from './BRoute';

// Import App Logic
import {isObject} from '../../logic/jsExtend/objectMerge';
import {AppLaunch} from '../../logic/AppLaunchLogic.js';
import {AppSubscribe, AppUnSubscribe} from '../../logic/AppSubscriptions.js';

// Import Other App UI Elements
import BettermentLabsLandingPage from '../containers/BettermentLabsLandingPage';
import BView from '../components/BView';

class MainController extends React.Component {
    componentWillMount() {
        if (this.props.dispatch) {AppLaunch(this.props.dispatch)};
    }
  
    componentDidMount() {
    //   AppSubscribe(this.props.dispatch);
    }
  
    componentWillUnmount() {
    //   AppUnSubscribe(this.props.dispatch);
    }
    
    render() {
        // console.log(this.props);
        const ViewRouter =
        (<BController>
            <BRoute
                exact
                path="/"
                view={BettermentLabsLandingPage}
                {...this.props}
                />            
        </BController>)

        const readyToRender = !isObject(this.props.loading.essentialState) ? this.props.loading.essentialState :
            (() => { var ready = true; for (const key in this.props.loading.essentialState) { if (!this.props.loading.essentialState[key]) {ready=false; return}} return ready })();
        
        return (!readyToRender ? <BView/> : ViewRouter);
    }
}

const mapStateToProps = function(store) {
    // get stores from defaults set in BController
    const stateToPropsReturn = {};
    for (key in defaultPropsFromStore) { const storeKey = key+'State'; if (store[storeKey]) { stateToPropsReturn[key] = store[storeKey] } }

    // set any custom stores you want to subscribe to here
    stateToPropsReturn.loading = store.loadingState;
    return(stateToPropsReturn);
  }
  
  export default connect(mapStateToProps)(MainController);
