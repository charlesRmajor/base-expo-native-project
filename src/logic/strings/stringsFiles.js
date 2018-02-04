/* 
  stringsFiles.js
  Betterment Labs
  Created by Charles Major on 02/03/18. 
  Copyright © Betterment Labs 2018. All rights reserved.
*/

const stringsFiles = {
    BettermentLabsLandingPage: require('./strings_BettermentLabsLandingPage'),
    VersionInfo: require('./strings_VersionInfo')
}

export default getPageStrings = (pageName) => {
    const thisPagesStrings = stringsFiles[pageName] ? stringsFiles[pageName] : null;
    return(thisPagesStrings.default)
}