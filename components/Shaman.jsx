import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
const image = require('../assets/shaman.png');

const ShamanImg = styled(Image)`
  width: ${CONSTANTS.SHAMAN_SIZE.width}px; 
  height: ${CONSTANTS.SHAMAN_SIZE.height}px;
`;

const Shaman = () => {
  return <ShamanImg source={image}></ShamanImg>;
};

export default Shaman;
