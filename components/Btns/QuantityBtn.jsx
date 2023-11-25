import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {  MaterialCommunityIcons } from '@expo/vector-icons';  
import {styles} from './styles';
import styled from 'styled-components/native';
const Span = styled.Text`
  
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  padding: 7px;
`;
const QuantityBtn = ({ onPress, text,quantity }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
      <Span>{quantity}</Span>
      <MaterialCommunityIcons name="alarm-light" size={30} color="red" />
    </TouchableOpacity>
  );
};

export default QuantityBtn;