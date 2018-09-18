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

// Import Other App UI Elements
import BRoundedButton from '../../../base/interface/components/BRoundedButton';
import InlineLoading from '../../../base/interface/dumbViews/InlineLoading';

// Import App Logic
import {cancelTransaction} from '../../../base/logic/store/marketplace';

const MainView = styled.View``;

const CardView = styled.View`height: 175px;
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

export default getMarketplaceItemCard = ({marketplaceItem, index, props}) => {

  const attemptedPurchase = props.marketplace.AttemptedTransactions.find(
    transaction => {
      return transaction.productID === marketplaceItem.identifier;
    }
  );

  const loadingPurchase =
    attemptedPurchase != undefined &&
    attemptedPurchase.productID === marketplaceItem.identifier ? (
      <InlineLoading
        {...props}
        cancelFunction={() =>
          props.dispatch(cancelTransaction(attemptedPurchase.productID))
        }
      />
    ) : null;

  return (
    <MainView key={index}>
      <CardView>
        <Header>title: {marketplaceItem.title}</Header>
        <GeneralText>identifier: {marketplaceItem.identifier}</GeneralText>
        <GeneralText>description: {marketplaceItem.description}</GeneralText>
        <GeneralText>priceString: {marketplaceItem.priceString}</GeneralText>
        <GeneralText>downloadable: {marketplaceItem.downloadable}</GeneralText>
        <ViewSpacer />
        <BRoundedButton
          title={'PURCHASE'}
          onPress={() => props.purchaseFunction({ productID: marketplaceItem.identifier })}
        />
        <ViewSpacer />
        {loadingPurchase}
      </CardView>
      <ViewSpacer />
    </MainView>
  );

}

/*
//  "description": String,
// "downloadable": String ("false" or "true"),
// "identifier": String,
// "priceString": String ("$0.99",)
// "title": String,
*/
