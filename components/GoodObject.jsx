import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
import { AppStateContext } from '../screens/AppStateContext';
import { useAssets } from 'expo-asset';


const CoinImg = styled(Image)`
 width: ${CONSTANTS.SIZE.width}px;
  height: ${CONSTANTS.SIZE.height}px;
`;
const GoodObject = ({ index }) => {
  const [assets, error] = useAssets([
    require('../assets/dogFood.png'),
  ]);
  const [assets2, error2] = useAssets([
    require('../assets/catFood.png'),
  ]);


  const contextValue = useContext(AppStateContext);
  const { isDog } = contextValue;

  return isDog ? (
    assets ?<CoinImg source={assets[index]}></CoinImg>:null
  ) : (
    assets2?<CoinImg source={assets2[index]}></CoinImg>:null
  );
};

export default GoodObject;
