import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
import { useAssets } from 'expo-asset';

const IndianImg = styled(Image)`
  width: ${CONSTANTS.SIZE.width}px;
  height: ${CONSTANTS.SIZE.height}px;
`;

const Indian = ({ index }) => {
  const [assets, error] = useAssets([
    require('../assets/badFood1.png'),
    require('../assets/bf6.png'),
    require('../assets/bf7.png'),
  ]);

  return assets ? <IndianImg source={assets[index]}></IndianImg> : null;
};

export default Indian;
