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
import ImageWithAspect from '../../../base/interface/components/ImageWithAspect';
import {defaultAppStyles} from '../../../base/interface/theming/AppStyles';
import BButton from '../components/BButton';
import getContactCard from '../components/getContactCard';

// Interface Styling
const MainView = styled.View`flex:1;
    flex-direction: column;
    background: ${({theme}) => (theme.color.background)};
    justify-content: flex-end`;

const ScrollView = styled.ScrollView`flex:15;`;

const ViewSpacer = styled.View`height: 20px`;

const Header = styled.Text`height: 200px;
    fontFamily: ${({theme}) => theme.fontStyles.bold};
    color: ${({theme}) => theme.color.highlight};
    fontSize: ${({theme}) => theme.fontSizes.large}`

const ImageView = styled.View`flex:5;
    justify-content: flex-end;
    marginBottom: -2%`
    
export default BettermentLabsLandingPage = (props) => {
    // console.log(props);
    const style = props.styles || defaultAppStyles;
    const strings = props.strings || null;
    const images = props.images || null;
    const imageLogo = images ? images.logoTextWhite || false : false;
    const contacts = props.contacts || null;

    const logoImage =  (<ImageView>{imageLogo && (<ImageWithAspect source={imageLogo} />)}</ImageView>);

    const mainView =
        (<ThemeProvider theme={style}>
            <MainView>
                <ScrollView>
                    <ViewSpacer/>
                    <Header>{strings.title}</Header>
                    <ViewSpacer/>
                    <BButton
                        flex={2}
                        text={strings.notificationsRequestButton}
                        onPress={props.requestNotifications}
                    />
                    <ViewSpacer/>
                    <BButton
                        flex={2}
                        text={strings.getContactButton}
                        onPress={props.saveContactFromPhonesPhoneBook}
                    />
                    <ViewSpacer/>
                    {contacts.map((contact, index) => getContactCard({contact: contact, index: index, removeContactFromPhonesPhoneBook: props.removeContactFromPhonesPhoneBook || null}))}
                </ScrollView>
                {logoImage}
            </MainView>
        </ThemeProvider>)
    return ( mainView)
  }