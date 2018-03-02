/*
  getSimplePageView.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component getSimplePageView.js
  Description:  main app controller
  Essentials:

  Inputs: N/A
  Outputs: N/A (your app on the screen!)
*/
// IMPORTS
// Import React Modules
import React from 'react';

// Import Other App UI Elements
import baseMainView from './baseMainView';
import BHeader from '../components/BText';

export default getSimplePageView = (pageNumber = null) => {
    return(
        <baseMainView>
            <BHeader>
                {pageNumber}
            </BHeader>
        </baseMainView>
    )
}