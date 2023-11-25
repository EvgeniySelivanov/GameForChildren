import React from 'react';
import { View, Text, ImageBackground,BackHandler} from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { CONSTANTS } from '../constants';
import { AppStateContext } from './AppStateContext';
import PlayBtn from '../components/Btns/PlayBtn';
import SettingBtn from '../components/Btns/SettingBtn';
import ExitBtn from '../components/Btns/ExitBtn';
const bgImage = require('../assets/bgMenu.png');
const Space = styled(ImageBackground)`
  flex: 1;
  margin-top: 25px;
  margin-bottom: 25px;
  overflow: hidden;
  justify-content: center;
  align: center;
`;

const StyledText = styled.Text`
  margin-top: 10px;
  color: #d9ff00;
  font-size: 30px;
  font-weight: 700;
  border: 2px #5105f5 solid;
  padding: 7px;
  border-radius: 5px;
`;
const StyledMenu = styled.Text`
  margin-top: 10px;
  color: #ffffff;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  padding: 7px;
`;

const Menu = () => {
  const navigation = useNavigation();
  const play = () => {
    navigation.navigate('SportSprint');
  };
  const setting = () => {
    navigation.navigate('Setting');
  };
  const backAction=()=>{
    BackHandler.exitApp();
  }

  return (
    <Space source={bgImage}>
      <StyledMenu>Меню</StyledMenu>
      <PlayBtn onPress={play} text={'Грати'} />
      <SettingBtn onPress={setting} text={'Налаштування'} />
      <ExitBtn onPress={backAction} text={'Вийти'}/>
    </Space>
  );
};

export default Menu;
