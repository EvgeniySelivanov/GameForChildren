import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
import { useAssets } from 'expo-asset';

const ShamanImg = styled(Image)`
  width: ${CONSTANTS.SIZE.width}px;
  height: ${CONSTANTS.SIZE.height}px;
`;

const Shaman = ({ index }) => {
  const [assets, error] = useAssets([
    require('../assets/badObject.png'),
    require('../assets/bf4.png'),
    require('../assets/bf5.png'),
  ]);
  return assets ? <ShamanImg source={assets[index]}></ShamanImg> : null;
};

export default Shaman;
