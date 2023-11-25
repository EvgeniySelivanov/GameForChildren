import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
const image = require('../assets/badObject.png');

const ShamanImg = styled(Image)`
 width: ${CONSTANTS.SIZE.width}px;
  height: ${CONSTANTS.SIZE.height}px;
`;

const Shaman = () => {
  return <ShamanImg source={image}></ShamanImg>;
};

export default Shaman;
