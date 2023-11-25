import React from 'react';
import {View, ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
const image = require('../assets/coin.png');
const CoinImg = styled(ImageBackground)`
  width: ${CONSTANTS.COIN_SIZE.width}px;
  height: ${CONSTANTS.COIN_SIZE.height}px;
`;
const Coin = () => {
  return (
    <CoinImg source={image}></CoinImg>
  );
}

export default Coin;
