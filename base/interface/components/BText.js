/*
  BText.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BText.js
  Description: Displays basic themed text

  Inputs: object 'props'
    includes all typical React & base project props

  Outputs: 
    renders button per description above
*/

// IMPORTS
// Import Other Node Modules
import styled from 'styled-components';

export default BText = styled.Text`
    fontFamily: ${({theme}) => theme.fontStyles.bold};
    color: ${({theme}) => theme.color.bodyText};
    font-size: ${({theme}) => theme.fontSizes.base}`

export const BHeader = BText.extend`
    text-align: center;
    font-size: ${({theme}) => theme.fontSizes.large}`