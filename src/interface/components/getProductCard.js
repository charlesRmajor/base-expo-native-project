/*
  getProductCard.js
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component getProductCard.js
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

const CardView = styled.View`
    height: ${({height}) => (height || '120px')};
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

export default getProductCard = ({productState, product, index, productButton}) => {
    return(
            <MainView key={index}>
                <CardView
                    height={productButton ? '170px' : null}
                >
                    <Header>productID: {product.productID}</Header>
                    {product.transactionID && <GeneralText>transactionID: {product.transactionID}</GeneralText>}
                    {product.dateTime && product.dateTime.attempted && <GeneralText>dateTime.attempted: {product.dateTime.attempted}</GeneralText>}
                    {product.dateTime && product.dateTime.failed && <GeneralText>dateTime.failed: {product.dateTime.failed}</GeneralText>}
                    {product.dateTime && product.dateTime.purchased && <GeneralText>dateTime.purchased: {product.dateTime.purchased}</GeneralText>}
                    {product.dateTime && product.dateTime.consumed && <GeneralText>dateTime.consumed: {product.dateTime.consumed}</GeneralText>}
                    <ViewSpacer/>
                    {productButton && productButton}
                    <ViewSpacer/>
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