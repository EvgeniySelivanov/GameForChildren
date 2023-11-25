import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuBtn from './Btns/MenuBtn';
const Header = ({ gameOver }) => {
  const navigation = useNavigation();
  const goToSetting = () => {
    gameOver();
    navigation.navigate('Setting');
  };
  
  return (
    <View style={styles.bg}>
      <MenuBtn onPress={goToSetting}/>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: 5,
    height: 40,
    width: '100%',
    backgroundColor: 'rgba(55, 255, 192, 0.4)',
    textAlign: 'center',
    zIndex: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    zIndex: 50,
  },
});

export default Header;
