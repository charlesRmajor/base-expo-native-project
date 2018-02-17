/* 
  baseStringsFiles.js
  Betterment Labs
  Created by Charles Major on 02/03/18. 
  Copyright © Betterment Labs 2018. All rights reserved.

  define app's needed string files here
*/
import stringsFiles from '../../../src/logic/strings/appStringsFiles';

const baseStringsFiles = {
    VersionInfo: require('./strings_VersionInfo'),
    BasicNavStrings: require('./strings_BasicNavStrings')
}

export default allAppStringsFiles = Object.assign({}, stringsFiles || {}, baseStringsFiles);