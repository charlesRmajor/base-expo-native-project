/*
  getMarketplaceItemCard.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component getMarketplaceItemCard.js
  Description:  
  Inputs: 
  Outputs: 
*/
// IMPORTS
// Import React Modules
import React from 'react';

// Import Other Node Modules
import styled from 'styled-components';

const MainView = styled.View``;

const CardView = styled.View`height: 100px;
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

export default getMarketplaceItemCard = ({marketplaceItem, index}) => {
    return(
            <MainView key={index}>
                <CardView>
                    <Header>Title: {marketplaceItem.title}</Header>
                    <GeneralText>Description: {marketplaceItem.description}</GeneralText>
                    <GeneralText>Price String: {marketplaceItem.priceString}</GeneralText>
                    <GeneralText>Downloadable: {marketplaceItem.downloadable}</GeneralText>
                </CardView>
                <ViewSpacer/>
            </MainView>            
    )
}

/*
//  "description": String,
// "downloadable": String ("false" or "true"),
// "identifier": String,
// "priceString": String ("$0.99",)
// "title": String,
*/