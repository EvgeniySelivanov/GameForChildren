import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
const image = require('../assets/indian.png');

const IndianImg = styled(Image)`
  width: ${CONSTANTS.INDIAN_SIZE.width}px; /* Задайте нужную ширину */
  height: ${CONSTANTS.INDIAN_SIZE.height}px; /* Максимальная высота изображения */
`;

const Indian = () => {
  return <IndianImg source={image}></IndianImg>;
};

export default Indian;
