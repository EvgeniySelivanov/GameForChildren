import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
const image = require('../assets/badFood2.png');

const IndianWomenImg = styled(Image)`
  width: ${CONSTANTS.SIZE.width}px;
  height: ${CONSTANTS.SIZE.height}px;
`;

const IndianWomen = () => {
  return <IndianWomenImg source={image}></IndianWomenImg>;
};

export default IndianWomen;
