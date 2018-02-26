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
import BButton, {ButtonView} from '../../../base/interface/components/BButton';
import getContactCard from '../components/getContactCard';
import getMarketplaceItemCard from '../components/getMarketplaceItemCard';

// Interface Styling
const ButtonEnclosingView = styled.View`flex:2`;

const MainView = styled.View`flex:1;
    flex-direction: column;
    background: ${({theme}) => (theme.color.background)};
    justify-content: flex-end`;

const ScrollView = styled.ScrollView`
    height:100%;`;

const ViewSpacer = styled.View`height: 20px`;

const MarketplaceHeader = BHeader.extend`
    font-size: ${({theme}) => theme.fontSizes.base};`;

const StoreItemButtonView = ButtonView.extend`
    width: 100%
`
const ScrollViewBottomSpacer = styled.View`height: 200px`;

const ImageView = styled.View`height:25%;
    position: absolute;
    background: rgba(52, 52, 52, 0);
    justify-content: flex-end;
    align-self: flex-end;
    marginRight: -5%;
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
                    title={buttonObject.title || ''}
                    onPress={buttonObject.onPress || null}
                />
            </ButtonEnclosingView>
        )
        JSXButtons.push(JSXButton);
    })
    return(JSXButtons);
}

const StoreList = (productsArray) => {
// text: item.title+" "+strings.for+" "+item.priceString+strings.perYear, 
console.log("StoreList productsArray");
console.log(productsArray);
    var JSXButtons = [];
    productsArray.map((buttonObject, index) => {
        console.log("buttonObject");
        console.log(buttonObject);
        const JSXButton = (
            <ButtonEnclosingView
                key={index}
            >
                <ViewSpacer/>
                <BButton
                    ButtonView={StoreItemButtonView}
                    title={buttonObject.title || ''}
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
    const imageLogo = images ? images.logoTextWhiteBlueMountains || false : false;
    const contacts = props.contacts ?
        props.contacts.map((contact, index) => getContactCard({contact: contact, index: index, removeContactFromPhonesPhoneBook: props.removeContactFromPhonesPhoneBook || null}))
        : null;

    const logoImage =  (<ImageView>{imageLogo && (<ImageWithAspect source={imageLogo} />)}</ImageView>);

    const Buttons = props.buttons ? PageButtons(props.buttons) : null;
    const ProductsButtons = (props.marketplace && props.marketplace.products) ?
        props.marketplace.products.map((marketplaceItem, index) => getMarketplaceItemCard({marketplaceItem: marketplaceItem, index: index}))
        : null;
    // (props.marketplace && props.marketplace.products) ? StoreList(props.marketplace.products) : null;

    const mainView =
        (<ThemeProvider theme={style}>
            <MainView>
                <ScrollView>
                    <BHeader>{strings.title}</BHeader>
                    <ViewSpacer/>
                    {Buttons}
                    <ViewSpacer/>
                    {contacts}
                    <ViewSpacer/>
                    <MarketplaceHeader>{strings.storeHeaderTitle}</MarketplaceHeader>
                    {ProductsButtons}
                    <ScrollViewBottomSpacer/>
                </ScrollView>
                {logoImage}
            </MainView>
        </ThemeProvider>)
    return ( mainView)
  }