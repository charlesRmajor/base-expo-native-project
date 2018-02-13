/*
  getContactCard.js
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
import {TouchableWithoutFeedback} from 'react-native';

// Import Other Node Modules
import styled from 'styled-components';

const MainView = styled.View``;

const CardView = styled.View`height: 75px;
    background: ${({theme}) => (theme.color.title)};
`
const ViewSpacer = styled.View`height: 5px`;

const Header = styled.Text`height: 30px;
    text-align: center;
    fontFamily: ${({theme}) => theme.fontStyles.bold};
    color: ${({theme}) => theme.color.highlight};
    fontSize: ${({theme}) => theme.fontSizes.base}`

const GeneralText = styled.Text`height: 20px;
    text-align: center;
    fontFamily: ${({theme}) => theme.fontStyles.light};
    color: ${({theme}) => theme.color.highlight};
    fontSize: ${({theme}) => theme.fontSizes.small}`

export default getContactCard = ({contact, index, removeContactFromPhonesPhoneBook}) => {
    console.log("getContactCard contact "+contact);
    return(
        <TouchableWithoutFeedback
            key={index}
            onPress={removeContactFromPhonesPhoneBook ? removeContactFromPhonesPhoneBook(index) : () => console.log('no removeContactFromPhonesPhoneBook provided')}>
            <MainView>
                <CardView>
                    <Header>{contact.contactName}</Header>
                    <GeneralText>{contact.contactNumber}</GeneralText>
                    <GeneralText>{contact.numberLabel}</GeneralText>
                </CardView>
                <ViewSpacer/>
            </MainView>            
        </TouchableWithoutFeedback>
    )
}