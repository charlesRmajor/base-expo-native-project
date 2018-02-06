/*
  App.js
    CanonicalAppName
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

export Component App.js
  Description:  main app insertion point
  Essentials:

  Inputs: N/A
  Outputs: N/A (your app on the screen!)
*/

// IMPORTS
// Import React Modules
import React from 'react';

// Import Other Node Modules
import { Provider } from 'react-redux';

// Import Core Project Modules
import store from './src/logic/store';

// Import General Logic

// Import Other App UI Elements
import MainController from './src/interface/controllers/MainController';

// export default class App extends React.Component {
export default App = (props) => {
    return (
      <Provider store={store}>
        <MainController/>
    </Provider>
    );
}