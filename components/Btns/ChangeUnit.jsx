import React,{useContext} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import styled from 'styled-components/native';
import { AppStateContext } from '../../screens/AppStateContext';
import { FontAwesome5 } from '@expo/vector-icons';

const Span = styled.Text`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  padding: 7px;
`;
const ChangeUnit = ({ onPress, text, quantity }) => {
  const contextValue = useContext(AppStateContext);
  const { isDog } = contextValue;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
      <Span>{quantity}</Span>

      {isDog ? (
        <FontAwesome5 name="dog" size={30} color="white" />
      ) : (
        <FontAwesome5 name="cat" size={30} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default ChangeUnit;
