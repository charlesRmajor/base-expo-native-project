/*
  BettermentLabsLandingPage.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BettermentLabsLandingPage.js
  Description:  landing page
*/

// IMPORTS
// Import React Modules
import React from 'react';

// Import Other Node Modules
import styled, {ThemeProvider} from 'styled-components';

// Import Core Project Modules

// Import Other App UI Elements
import {BHeader} from '../../../base/interface/components/BText';
import ImageWithAspect from '../../../base/interface/components/ImageWithAspect';
import {defaultAppStyles} from '../../../base/interface/theming/AppStyles';
import BRoundedButton from '../../../base/interface/components/BRoundedButton';
import getContactCard from '../components/getContactCard';

// Interface Styling
const ButtonEnclosingView = styled.View`flex:2`;

const MainView = styled.View`flex:1;
    flex-direction: column;
    background: ${({theme}) => (theme.color.background)};
    justify-content: flex-end`;

const ScrollView = styled.ScrollView`flex:15;`;

const ViewSpacer = styled.View`height: 20px`;

const ImageView = styled.View`flex:5;
    justify-content: flex-end;
    marginBottom: -2%`

const PageButtons = (PageButtonArray) => {
    var JSXButtons = [];
    PageButtonArray.map((buttonObject, index) => {
        const JSXButton = (
            <ButtonEnclosingView
                key={index}
            >
                <ViewSpacer/>
                <BRoundedButton
                    text={buttonObject.title || ''}
                    onPress={buttonObject.onPress || null}
                />
            </ButtonEnclosingView>
        )
        JSXButtons.push(JSXButton);
    })
    return(JSXButtons);
}
    
export default BettermentLabsLandingPage = (props) => {
    // console.log(props);
    const style = props.styles || defaultAppStyles;
    const strings = props.strings || null;
    const images = props.images || null;
    const imageLogo = images ? images.logoTextWhite || false : false;
    const contacts = props.contacts || null;

    const logoImage =  (<ImageView>{imageLogo && (<ImageWithAspect source={imageLogo} />)}</ImageView>);

    const Buttons = props.buttons ? PageButtons(props.buttons) : null;
    const mainView =
        (<ThemeProvider theme={style}>
            <MainView>
                <ScrollView>
                    <ViewSpacer/>
                    <BHeader>{strings.title}</BHeader>
                    <ViewSpacer/>
                    {Buttons}
                    <ViewSpacer/>
                    {contacts.map((contact, index) => getContactCard({contact: contact, index: index, removeContactFromPhonesPhoneBook: props.removeContactFromPhonesPhoneBook || null}))}
                    <ViewSpacer/>
                </ScrollView>
                {logoImage}
            </MainView>
        </ThemeProvider>)
    return ( mainView)
  }