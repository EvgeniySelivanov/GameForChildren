import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
import { useAssets } from 'expo-asset';

const IndianWomenImg = styled(Image)`
  width: ${CONSTANTS.SIZE.width}px;
  height: ${CONSTANTS.SIZE.height}px;
`;

const IndianWomen = ({ index }) => {
  const [assets, error] = useAssets([
    require('../assets/badFood2.png'),
    require('../assets/bf8.png'),
    require('../assets/bf9.png'),
  ]);
  return assets ? (
    <IndianWomenImg source={assets[index]}></IndianWomenImg>
  ) : null;
};

export default IndianWomen;
