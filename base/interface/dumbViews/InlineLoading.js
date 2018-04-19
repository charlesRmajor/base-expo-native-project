/*
	InlineLoading.js
	BettermentLabs

    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component InlineLoading.js
  Description:
*/
// IMPORTS
// Import React Modules
import React from 'react';

// Import Other Node Modules
import styled from 'styled-components';

// Import App Logic
import hex2rgb from '../../logic/jsExtend/hex2rgb';

// Import Other App UI Elements
import BLoadingCircle from '../components/BLoadingCircle';
import BRoundedButton from '../components/BRoundedButton';

const MainView = styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => {
        const rgbColor = theme.backgroundColor ?
            hex2rgb(backgroundColor) :
            hex2rgb(theme.color ? theme.color.background ? theme.color.background : '#000000' : '#000000');
        return('rgba('+rgbColor.r+', '+rgbColor.g+', '+rgbColor.b+', '+(theme.opacity ? theme.opacity : '0.75')+')')}};
`

const PageLoadingCircleView = styled.View`
    width: 50%;
`

export default InlineLoading = (props) => {

  const cancelFunction =
    props.cancelFunction != undefined
      ? props.cancelFunction
      : () => console.log('no cancel function provided');

    const circColor= props.loadingCircColor ? props.loadingCircColor :
        (props.styles ? props.styles.color ? props.styles.color.highlight ? props.styles.color.highlight : null : null : null);

    return(
        <MainView>
            <PageLoadingCircleView>
              <BRoundedButton
                title={'CANCEL'}
                onPress={cancelFunction}
              />
              <BLoadingCircle
                isAnimating={true}
                circStrokeWidth={'25'}
                circColor={circColor}
              />
            </PageLoadingCircleView>
        </MainView>)
}
