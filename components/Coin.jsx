import React, { useContext } from 'react';
import { View, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
import { AppStateContext } from '../screens/AppStateContext';
import { useAssets } from 'expo-asset';

const CoinImg = styled(ImageBackground)`
 width: ${CONSTANTS.SIZE.width}px;
  height: ${CONSTANTS.SIZE.height}px;
`;
const Coin = ({index}) => {
  const contextValue = useContext(AppStateContext);
  const { isDog } = contextValue;

  const [assets, error] = useAssets([
    require('../assets/dogFood.png'),
    require('../assets/dogFood2.png'),
    require('../assets/dogFood3.png'),
    require('../assets/sharedFood.png'),
    require('../assets/sharedFood2.png'),
    require('../assets/sharedFood3.png'),
  ]);
  const [assets2, error2] = useAssets([
    require('../assets/catFood.png'),
    require('../assets/catFood2.png'),
    require('../assets/catFood3.png'),
    require('../assets/sharedFood.png'),
    require('../assets/sharedFood2.png'),
    require('../assets/sharedFood3.png'),
  ]);

  return isDog ? (
    assets ?<CoinImg source={assets[index]}></CoinImg>:null
  ) : (
    assets2?<CoinImg source={assets2[index]}></CoinImg>:null
  );
};

export default Coin;
