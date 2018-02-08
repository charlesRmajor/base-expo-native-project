/*
  getThemeFontSet.js
  Betterment Labs Base Expo-Native Project
  Created by Charles Major on 02/01/18. 
  Copyright © 2018 Betterment Labs, LLC. All rights reserved.

  Use :
*/

export default getThemeFontSet = (fontSet) => {
    return({
      needsLoading: (fontSet.needsLoading == null || fontSet.needsLoading == undefined) ? true : fontSet.needsLoading,
      regular: fontSet.regular.name,
      black: fontSet.black.name,
      blackItalic: fontSet.blackItalic.name,
      bold: fontSet.bold.name,
      boldItalic: fontSet.boldItalic.name,
      italic: fontSet.italic.name,
      light: fontSet.light.name,
      lightItalic: fontSet.lightItalic.name,
      })
  }
  