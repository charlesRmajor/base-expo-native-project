/*
  BButton.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BButton.js
  Description: Displays basic themed button

  Inputs: object 'props'
    includes all typical React & base project props
    onPress: function that pressing on button calls (should be redux store action)

  Outputs: 
    renders button per description above
*/

// IMPORTS
// Import React Modules
import React from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';

// Import Other Node Modules
import styled from 'styled-components';

// Import Other App UI Elements
import BText from './BText';

export const ButtonView = styled.View`flex:${({flex}) => flex || 1};
    align-self: center;
    justify-content: center;
    width: ${({width}) => width || '80%'};
    borderColor: ${({theme}) => theme.color.highlight};
    backgroundColor: ${({theme}) => theme.color.title};`

export const ButtonText = BText.extend`
    text-align: center;`

export default BButton = (props) => {
    const TextForButtonText = props.text ? props.text : '';
    const ThisButtonView = (props.ButtonView == null || props.ButtonView == undefined) ? ButtonView : props.ButtonView;
    const ThisButtonText = (props.ButtonText == null || props.ButtonText == undefined) ? ButtonText : props.ButtonText;
    return(
        <TouchableWithoutFeedback
            onPress={props.onPress ? props.onPress : () => console.log('no onPress provided')}>
            <ThisButtonView flex={props.flex || null} width={props.width || null}>
                <ThisButtonText>
                    {TextForButtonText}
                </ThisButtonText>
            </ThisButtonView>
        </TouchableWithoutFeedback>
    )
}