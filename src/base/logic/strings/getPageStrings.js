/* 
  getPageStrings.js
  Betterment Labs
  Created by Charles Major on 02/03/18. 
  Copyright © Betterment Labs 2018. All rights reserved.
*/
import allAppStringsFiles from './baseStringsFiles';

export default getPageStrings = (pageName) => {
  const thisPagesStrings = allAppStringsFiles ? (allAppStringsFiles[pageName] ? allAppStringsFiles[pageName] : null) : null;
  return(thisPagesStrings.default)
}