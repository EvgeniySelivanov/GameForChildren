import React, { useState, useContext } from 'react';
import { View, StyleSheet, PanResponder, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
import { AppStateContext } from '../screens/AppStateContext';

const dog = require('../assets/dog.png');
const cat = require('../assets/cat.png');

const ArrowImg = styled(ImageBackground)`
  width: ${CONSTANTS.HERO_SIZE.width}px;
  height: ${CONSTANTS.HERO_SIZE.height}px;
`;
const Arrow = ({ arrowValueChange }) => {
  const contextValue = useContext(AppStateContext);
  const { isDog } = contextValue;
  const [position, setPosition] = useState(CONSTANTS.ARROW_POSITION);
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      arrowValueChange(gesture.moveX);
      if (gesture.moveX >= 0 && gesture.moveX <= 330)
        setPosition({
          x: gesture.moveX,
        });
    },
  });

  return (
    <View
      style={[
        styles.draggable,
        { left: position.x, top: CONSTANTS.ARROW_POSITION.y },
      ]}
      {...panResponder.panHandlers}
    >
      {isDog ? (
        <ArrowImg source={dog}></ArrowImg>
      ) : (
        <ArrowImg source={cat}></ArrowImg>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  draggable: {
    position: 'absolute',
    width: 80,
    height: 80,
    zIndex: 10,
  },
});
export default Arrow;
