/*
  BButton.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BButton.js
  Description:  
  Inputs: 
  Outputs: 
*/

// IMPORTS
// Import React Modules
import React from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';

// Import Other Node Modules
import styled from 'styled-components';

const ButtonView = styled.View`flex:${({flex}) => flex || 1};
    align-self: center;
    justify-content: center;
    width: ${({width}) => width || '80%'};
    borderColor: ${({theme}) => theme.color.highlight};
    borderWidth: 2px;
    borderRadius: 15px;
    backgroundColor: ${({theme}) => theme.color.title};`

const ButtonText = styled.Text`
    text-align: center;
    fontFamily: ${({theme}) => theme.fontStyles.bold};
    color: ${({theme}) => theme.color.highlight};
    fontSize: ${({theme}) => theme.fontSizes.base}`

export default BButton = (props) => {
    return(
        <TouchableWithoutFeedback
            onPress={props.onPress ? props.onPress : () => console.log('no onPress provided')}>
            <ButtonView flex={props.flex || null} width={props.width || null}>
                <ButtonText>
                    {props.text}
                </ButtonText>
            </ButtonView>
        </TouchableWithoutFeedback>
    )
}