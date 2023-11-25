import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
const MenuBtn = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Ionicons name="options" size={24} color="white" />
    </TouchableOpacity>
  );
};
const styles = {
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#376eef',
    padding: 3,
    borderRadius: 5,
  },
  buttonText: {
    color: 'blue',
    fontSize: 18,
    marginLeft: 10,
  },
};
export default MenuBtn;