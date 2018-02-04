/* 
	VersionInfo.js
	  Betterment Labs
	  Created by Charles Major on 10/19/17. 
	  Copyright © 2017 Betterment Labs. All rights reserved.
*/
// Import React Modules

// Import App Logic
import getPageStrings from '../logic/strings/stringsFiles';

const thisAppJSON = require('../../app.json');

export const getAlertWithVersionInfoContent = () => {
    const versionStrings = getPageStrings('VersionInfo');
    const versionInfoStringArray = VersionInfoAsStringArray();
    var messageBody = '';
    versionInfoStringArray.map((line) => {messageBody = messageBody.concat((line+'\n'))})
    return(versionStrings.alertTitle, messageBody)
}

export const logVersionInfo = () => {
    console.log(VersionInfoAsStringArray());
}

const VersionInfoAsStringArray = () => {
    const versionInfo = VersionInfo();
    var versionInfoString = [];
    for (const key in versionInfo) {
        versionInfoString.push((versionInfo[key].fieldName || "No Field Name Found: ")+": "+(versionInfo[key].value || "No Value Found"));
    }
    return(versionInfoString)
}

export default VersionInfo = () => {
    const versionStrings = getPageStrings('VersionInfo');
    const versionInfo = {appName: {fieldName: versionStrings.fieldAppName, value: thisAppJSON.expo.name},
        appDescription: {fieldName: versionStrings.fieldAppDescription, value: thisAppJSON.expo.description},
        expoSlug: {fieldName: versionStrings.fieldExpoSlug, value: thisAppJSON.expo.slug},
        privacy: {fieldName: versionStrings.fieldPrivacy, value: thisAppJSON.expo.privacy},
        sdkVersion: {fieldName: versionStrings.fieldSdkVersion, value: thisAppJSON.expo.sdkVersion},
        platforms: {fieldName: versionStrings.fieldPlatforms, value: thisAppJSON.expo.platforms},
        version:  {fieldName: versionStrings.fieldVersion, value: thisAppJSON.expo.version},
        devBuild: {fieldName: versionStrings.fieldDevBuild, value: __DEV__},
        defaultAppLanguage: {fieldName: versionStrings.fieldDefaultAppLanguage, value: thisAppJSON.expo.defaultAppLanguage}
    }
    return versionInfo
}

