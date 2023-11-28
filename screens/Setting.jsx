import React, { useContext, useState, useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { CONSTANTS } from '../constants';
import { AppStateContext } from './AppStateContext';
import ResetBtn from '../components/Btns/ResetBtn';
import QuantityBtn from '../components/Btns/QuantityBtn';
import VibroBtn from '../components/Btns/VibroBtn';
import ChangeUnitBtn from '../components/Btns/ChangeUnit';
import * as Haptics from 'expo-haptics';

const bgImage = require('../assets/bgMenu.png');
const Space = styled(ImageBackground)`
  flex: 1;
  margin-top: 25px;
  margin-bottom: 25px;
  overflow: hidden;
  justify-content: center;
  align: center;
`;
const StyledSetting = styled.Text`
  margin-top: 10px;
  color: #ffffff;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  padding: 7px;
`;
const Setting = () => {
  const contextValue = useContext(AppStateContext);
  const {
    isDog,
    quantity,
    vibration,
    updateQuantity,
    updateVibration,
    changeUnit,
  } = contextValue;

  const changeDog = () => {
    if (isDog) {
      changeUnit(false);
    } else {
      changeUnit(true);
    }
  };

  const changeVibro = () => {
    if (vibration) {
      updateVibration(false);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      updateVibration(true);
    }
  };
  const changeQuantity = () => {
    if (quantity ===5) {
      updateQuantity((quantity) => quantity - 2);
    } else if (quantity === 3) {
      updateQuantity((quantity) => quantity - 1);
    }
  };
  const defaultOption = () => {
    updateVibration(false);
    updateQuantity(CONSTANTS.INDIANS_QUANTITY);
  };

  return (
    <Space source={bgImage}>
      <StyledSetting>Налаштування</StyledSetting>
      <QuantityBtn
        onPress={changeQuantity}
        text={'Перешкоди :'}
        quantity={quantity}
      />
      <ChangeUnitBtn onPress={changeDog} text={'Зміна героя'} />
      <VibroBtn onPress={changeVibro} vibro={vibration} text={'Вібрація'} />
      <ResetBtn onPress={defaultOption} text={'За замовчуванням'} />
    </Space>
  );
};

export default Setting;
