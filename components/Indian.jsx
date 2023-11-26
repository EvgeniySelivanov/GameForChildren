import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';


const IndianImg = styled(Image)`
 width: ${CONSTANTS.SIZE.width}px;
  height: ${CONSTANTS.SIZE.height}px;
`;

const Indian = () => {
  const image = require('../assets/badFood1.png');

  return <IndianImg source={image}></IndianImg>;
};

export default Indian;
