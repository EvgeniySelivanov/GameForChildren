import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {styles} from './styles';
const SoundBtn = ({ onPress, music ,text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
       <Text style={styles.buttonText}>{text}</Text>
      {music ? (
        <Entypo name="sound" size={24} color="green" />
      ) : (
        <Entypo name="sound-mute" size={24} color="red" />
      )}
     
    </TouchableOpacity>
  );
};

export default SoundBtn;
