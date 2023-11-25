import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { CONSTANTS } from '../constants';
//for dynamic changes require, otherwise does not work
const images = {
  image8: require('../assets/bgGame.png'),
};
const Decoration = ({ speed, positionY, positionX, imageName }) => {
  const [translateY, setTranslateY] = useState(new Animated.Value(0));  
  const link = images[imageName];
  useEffect(() => {
    animateBackground();
  }, []);

  const animateBackground = () => {
    Animated.loop(
      Animated.timing(translateY, {
        toValue: CONSTANTS.SCREEN_HEIGHT / 2.4, 
        duration: speed, 
        useNativeDriver: false,
      })
    ).start();
  };

  return (
    <Animated.Image
      source={link} 
      style={{
        position: 'absolute',
        width:"100%",
        top: positionY,
        left: positionX,
        zIndex:0,
        transform: [{ translateY }],
      }}
    />
  );
};

export default Decoration;
