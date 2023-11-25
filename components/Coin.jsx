import React, { useContext } from 'react';
import { View, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
import { AppStateContext } from '../screens/AppStateContext';

const CoinImg = styled(ImageBackground)`
 width: ${CONSTANTS.SIZE.width}px;
  height: ${CONSTANTS.SIZE.height}px;
`;
const Coin = () => {
  const contextValue = useContext(AppStateContext);
  const { isDog } = contextValue;

  const imageDog = require('../assets/dogFood.png');
  const imageCat = require('../assets/catFood.png');

  return isDog ? (
    <CoinImg source={imageDog}></CoinImg>
  ) : (
    <CoinImg source={imageCat}></CoinImg>
  );
};

export default Coin;
