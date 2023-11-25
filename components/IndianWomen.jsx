import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
const image = require('../assets/indian_women.png');

const IndianWomenImg = styled(Image)`
  width: ${CONSTANTS.INDIAN_WOMEN_SIZE.width}px; /* Задайте нужную ширину */
  height: ${CONSTANTS.INDIAN_WOMEN_SIZE.height}px; /* Максимальная высота изображения */
`;

const IndianWomen = () => {
  return <IndianWomenImg source={image}></IndianWomenImg>;
};

export default IndianWomen;
