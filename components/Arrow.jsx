import React, { useState } from 'react';
import { View,StyleSheet,PanResponder, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';


const image = require('../assets/arrow.png');
const ArrowImg = styled(ImageBackground)`
  width: ${CONSTANTS.ARROW_SIZE.width}px;
  height: ${CONSTANTS.ARROW_SIZE.height}px;
`;
const Arrow = ({ arrowValueChange }) => {
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
      <ArrowImg source={image}></ArrowImg>
    </View>
  );
};
const styles = StyleSheet.create({
  draggable: {
    position: 'absolute',
    width: 18,
    height: 120,
    zIndex: 10,
  },
});
export default Arrow;