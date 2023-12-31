import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Animated,
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  Easing,
} from 'react-native';
import { CONSTANTS } from '../constants';
import { AppStateContext } from './AppStateContext';
import { Audio } from 'expo-av';
import styled from 'styled-components/native';
import StartMessage from '../components/StartMessage';
import Header from '../components/Header';
import Decoration from '../components/Decoration';
import Arrow from '../components/Arrow';
import Coin from '../components/Coin';
import GoodObject from '../components/GoodObject';
import Indian from '../components/Indian';
import IndianWomen from '../components/IndianWomen';
import Shaman from '../components/Shaman';
import * as Haptics from 'expo-haptics';

const bgImage = require('../assets/bgGame.png');
const Space = styled(ImageBackground)`
  flex: 1;
  margin-top: 25px;
  margin-bottom: 25px;
  overflow: hidden;
`;
const ScoreText = styled.Text`
  position: absolute;
  top: 43px;
  left: 110px;
  color: #ffffff;
  font-size: 50px;
  font-weight: 700;
`;

const Game = () => {
  const contextValue = useContext(AppStateContext);
  const { quantity, updateQuantity, vibration } = contextValue;
  let arrowPosition = {
    x: CONSTANTS.ARROW_POSITION.x,
    y: CONSTANTS.ARROW_POSITION.y,
  };
  const arrowValueChange = (xPosition) => {
    arrowPosition.x = xPosition;
  };
  const [speed, setSpeed] = useState(CONSTANTS.GAME_SPEED);
  const route = useRoute();
  const [isGameRun, setIsGameRun] = useState(false);
  const [goodObject, setGoodObject] = useState({ quant: 0, visibility: true });
  const [coin, setCoin] = useState({ quant: 0, visibility: true });

  //position obtacles
  const coinPosition = useRef(
    new Animated.ValueXY(CONSTANTS.COIN_POSITION)
  ).current;
  const goodObjectPosition = useRef(
    new Animated.ValueXY(CONSTANTS.GOOD_OBJECT_POSITION)
  ).current;
  const indianPosition = useRef(new Animated.ValueXY(0)).current;
  const indianWomenPosition = useRef(new Animated.ValueXY(0)).current;
  const shamanPosition = useRef(new Animated.ValueXY(0)).current;

  const getRandom = () => {
    let random = Math.floor(Math.random() * (300 - 1 + 1)) + 1;
    return random;
  };

  //animation
  moveCoin = () => {
    if (isGameRun) {
      Animated.timing(coinPosition, {
        toValue: { x: getRandom(), y: CONSTANTS.SCREEN_HEIGHT + 550 },
        duration: speed, // Длительность анимации в миллисекундах
        useNativeDriver: false, // Используем JavaScript анимацию
        easing: Easing.linear,
      }).start();
    }
  };

  moveIndian = () => {
    if (isGameRun) {
      Animated.timing(indianPosition, {
        toValue: { x: getRandom(), y: CONSTANTS.SCREEN_HEIGHT + 550 },
        duration: speed, // Длительность анимации в миллисекундах
        useNativeDriver: false, // Используем JavaScript анимацию
        easing: Easing.linear,
      }).start(() => {
        indianPosition.setValue({
          x: getRandom(),
          y: CONSTANTS.INDIAN_POSITION.y,
        });
        if (quantity === 2 && speed >= 2000) {
          coinPosition.setValue({
            x: getRandom(),
            y: CONSTANTS.COIN_POSITION.y,
          });
          setCoin((coin) => ({
            ...coin,
            visibility: true,
          }));
          setSpeed((speed) => speed - 600);
          moveCoin();
          moveIndian();
        } else if (quantity === 2 && speed <= 2000) {
          coinPosition.setValue({
            x: getRandom(),
            y: CONSTANTS.COIN_POSITION.y,
          });
          setCoin((coin) => ({
            ...coin,
            visibility: true,
          }));
          moveCoin();
          moveIndian();
        }
      });
    }
  };

  moveIndianWomen = () => {
    if (isGameRun) {
      Animated.timing(indianWomenPosition, {
        toValue: { x: getRandom(), y: CONSTANTS.SCREEN_HEIGHT + 550 },
        duration: speed, // Длительность анимации в миллисекундах
        useNativeDriver: false, // Используем JavaScript анимацию
        easing: Easing.linear,
      }).start(() => {
        console.log(isGameRun);
        indianWomenPosition.setValue({
          x: getRandom(),
          y: CONSTANTS.INDIAN_WOMEN_POSITION.y,
        });
        if (quantity === 3 && speed >= 2000 && isGameRun != false) {
          coinPosition.setValue({
            x: getRandom(),
            y: CONSTANTS.COIN_POSITION.y,
          });
          setCoin((coin) => ({
            ...coin,
            visibility: true,
          }));
          setGoodObject((goodObject) => ({
            ...goodObject,
            visibility: true,
          }));
          setSpeed((speed) => speed - 600);
          moveCoin();
          moveIndian();
          moveIndianWomen();
        } else if (quantity === 3 && speed <= 2000 && isGameRun != false) {
          coinPosition.setValue({
            x: getRandom(),
            y: CONSTANTS.COIN_POSITION.y,
          });
          setCoin((coin) => ({
            ...coin,
            visibility: true,
          }));
          setGoodObject((goodObject) => ({
            ...goodObject,
            visibility: true,
          }));
          moveCoin();
          moveIndian();
          moveIndianWomen();
        }
      });
    }
  };

  moveGoodObject = () => {
    if (isGameRun) {
      Animated.timing(goodObjectPosition, {
        toValue: { x: getRandom(), y: CONSTANTS.SCREEN_HEIGHT + 550 },
        duration: speed, // Длительность анимации в миллисекундах
        useNativeDriver: false, // Используем JavaScript анимацию
        easing: Easing.linear,
      }).start(() => { 

        console.log(isGameRun);
        goodObjectPosition.setValue({
          x: getRandom(),
          y: CONSTANTS.GOOD_OBJECT_POSITION.y,
        });       
        if (quantity === 4 && speed >= 2000 && isGameRun != false) {
          coinPosition.setValue({
            x: getRandom(),
            y: CONSTANTS.COIN_POSITION.y,
          });
          setCoin((coin) => ({
            ...coin,
            visibility: true,
          }));      
          setSpeed((speed) => speed - 600);
          moveCoin();
          moveIndian();
          moveIndianWomen();
          moveGoodObject();
        } else if (quantity === 4 && speed <= 2000 && isGameRun != false) {
          coinPosition.setValue({
            x: getRandom(),
            y: CONSTANTS.COIN_POSITION.y,
          });
          setCoin((coin) => ({
            ...coin,
            visibility: true,
          }));       
          moveCoin();
          moveIndian();
          moveIndianWomen();
          moveGoodObject();
        }
      });
    }
  };

  moveShaman = () => {
    if (isGameRun) {
      Animated.timing(shamanPosition, {
        toValue: { x: 210, y: CONSTANTS.SCREEN_HEIGHT + 550 },
        duration: speed, // Длительность анимации в миллисекундах
        useNativeDriver: false, // Используем JavaScript анимацию
        easing: Easing.linear,
      }).start(() => {
        shamanPosition.setValue({
          x: getRandom(),
          y: CONSTANTS.SHAMAN_POSITION.y,
        });
        if (quantity === 5 && (speed >= 2000) & (isGameRun != false)) {
          coinPosition.setValue({
            x: getRandom(),
            y: CONSTANTS.COIN_POSITION.y,
          });
          setCoin((coin) => ({
            ...coin,
            visibility: true,
          }));
          setGoodObject((goodObject) => ({
            ...goodObject,
            visibility: true,
          }));
          setSpeed((speed) => speed - 600);
          moveCoin();
          moveIndian();
          moveIndianWomen();
          moveGoodObject();
          moveShaman();
        } else if (quantity === 5 && (speed <= 2000) & (isGameRun != false)) {
          coinPosition.setValue({
            x: getRandom(),
            y: CONSTANTS.COIN_POSITION.y,
          });
          setCoin((coin) => ({
            ...coin,
            visibility: true,
          }));
          setGoodObject((goodObject) => ({
            ...goodObject,
            visibility: true,
          }));
          moveCoin();
          moveIndian();
          moveIndianWomen();
          moveGoodObject();
          moveShaman();
        }
      });
    }
  };
  //check coins bonus
  useEffect(() => {
    if (isGameRun) {
      coinPosition.addListener((value) => {
        const xPosition = value.x;
        const yPosition = value.y;
        if (
          xPosition >= arrowPosition.x &&
          xPosition <= arrowPosition.x + CONSTANTS.HERO_SIZE.width &&
          arrowPosition.y <= yPosition &&
          arrowPosition.y + CONSTANTS.HERO_SIZE.height >= yPosition
        ) {
          Animated.timing(coinPosition).stop();
          if (vibration) {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
          }
          setCoin((coin) => ({
            ...coin,
            quant: coin.quant + 1,
            visibility: false,
          }));
        }
      });
      return () => {
        coinPosition.removeAllListeners();
      };
    }
  }, [coinPosition, arrowPosition]);

  useEffect(() => {
    if (isGameRun) {
      goodObjectPosition.addListener((value) => {
        const xPosition = value.x;
        const yPosition = value.y;
        if (
          xPosition >= arrowPosition.x &&
          xPosition <= arrowPosition.x + CONSTANTS.HERO_SIZE.width &&
          arrowPosition.y <= yPosition - 390 &&
          arrowPosition.y + CONSTANTS.HERO_SIZE.height >= yPosition - 390
        ) {
          Animated.timing(goodObjectPosition).stop();
          if (vibration) {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
          }
          setCoin((coin) => ({
            ...coin,
            quant: coin.quant + 1,
          }));
          setGoodObject((goodObject) => ({
            ...goodObject,
            visibility: false,
          }));
        }
      });
      return () => {
        goodObjectPosition.removeAllListeners();
      };
    }
  }, [goodObjectPosition, arrowPosition]);

  //check colisions
  useEffect(() => {
    if (isGameRun) {
      indianPosition.addListener((value) => {
        const xPosition = value.x;
        const yPosition = value.y;
        if (
          xPosition >= arrowPosition.x &&
          xPosition <= arrowPosition.x + CONSTANTS.HERO_SIZE.width &&
          arrowPosition.y <= yPosition - 190 &&
          arrowPosition.y + CONSTANTS.HERO_SIZE.height >= yPosition - 190
        ) {
          gameOver();
        }
      });
      return () => {
        indianPosition.removeAllListeners();
      };
    }
  }, [indianPosition, arrowPosition]);
  useEffect(() => {
    if (isGameRun) {
      indianWomenPosition.addListener((value) => {
        const xPosition = value.x;
        const yPosition = value.y;
        if (
          xPosition >= arrowPosition.x &&
          xPosition <= arrowPosition.x + CONSTANTS.HERO_SIZE.width &&
          arrowPosition.y <= yPosition - 290 &&
          arrowPosition.y + CONSTANTS.HERO_SIZE.height >= yPosition - 290
        ) {
          gameOver();
        }
      });
      return () => {
        indianWomenPosition.removeAllListeners();
      };
    }
  }, [indianWomenPosition, arrowPosition]);
  useEffect(() => {
    if (isGameRun) {
      shamanPosition.addListener((value) => {
        const xPosition = value.x;
        const yPosition = value.y;
        if (
          xPosition >= arrowPosition.x &&
          xPosition <= arrowPosition.x + CONSTANTS.HERO_SIZE.width &&
          arrowPosition.y <= yPosition - 490 &&
          arrowPosition.y + CONSTANTS.HERO_SIZE.height >= yPosition - 490
        ) {
          gameOver();
        }
      });
      return () => {
        shamanPosition.removeAllListeners();
      };
    }
  }, [shamanPosition, arrowPosition]);
  ////////////////////
  const gameOver = async () => {
    if (vibration) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
    await setIsGameRun(false);
    await Animated.timing(indianWomenPosition).stop();
    await Animated.timing(shamanPosition).stop();
    await Animated.timing(indianPosition).stop();
    await Animated.timing(coinPosition).stop();
    await Animated.timing(goodObjectPosition).stop();
    await indianPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.INDIAN_POSITION.y,
    });
    await indianWomenPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.INDIAN_WOMEN_POSITION.y,
    });
    await goodObjectPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.INDIAN_POSITION.y,
    });
    await shamanPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.SHAMAN_POSITION.y,
    });
    await setCoin((coin) => ({
      ...coin,
      quant: 0,
    }));
    await setSpeed(14000);
    console.log('game stop');
  };

  ///////////////////
  const startGame = async () => {
    await setIsGameRun(true);
    await indianPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.INDIAN_POSITION.y,
    });
    await indianWomenPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.INDIAN_WOMEN_POSITION.y,
    });
    await shamanPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.SHAMAN_POSITION.y,
    });
    await goodObjectPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.GOOD_OBJECT_POSITION.y,
    });
     setGoodObject((goodObject) => ({
      ...goodObject,
      visibility: true,
    }));
    coinPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.COIN_POSITION.y,
    });
    setCoin((coin) => ({
      ...coin,
      visibility: true,
    }));
   
    
    if (quantity === 2) {
      moveCoin();
      moveIndian();
    } else if (quantity === 3) {
      moveCoin();
      moveIndian();
      moveIndianWomen();
    } else if (quantity === 4) {
      moveCoin();
      moveIndian();
      moveIndianWomen();
      moveGoodObject();
    } else if (quantity === 5) {
      moveCoin();
      moveIndian();
      moveIndianWomen();
      moveGoodObject();
      moveShaman();
    }
    console.log('game start');
  };

  return (
    <TouchableWithoutFeedback onPress={startGame}>
      <Space source={bgImage}>
        <Header gameOver={gameOver} />
        {isGameRun && (
          <View>
            <Decoration
              speed={speed}
              imageName="image8"
              positionY={-396}
              positionX={0}
            />
            <Decoration
              speed={speed}
              imageName="image8"
              positionY={400}
              positionX={0}
            />
          </View>
        )}
        <Animated.View
          style={[
            { position: 'absolute' },
            { transform: coinPosition.getTranslateTransform() },
          ]}
        >
          {coin.visibility && <Coin index={Math.floor(Math.random() * 6)} />}
        </Animated.View>

        <Animated.View
          style={[
            { position: 'absolute', top: CONSTANTS.GOOD_OBJECT_POSITION.y },
            { transform: goodObjectPosition.getTranslateTransform() },
          ]}
        >
          {goodObject.visibility && (
            <GoodObject index={Math.floor(Math.random() * 6)} />
          )}
        </Animated.View>
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: CONSTANTS.INDIAN_POSITION.y,
            },
            { transform: indianPosition.getTranslateTransform() },
          ]}
        >
          <Indian index={Math.floor(Math.random() * 3)} />
        </Animated.View>
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: CONSTANTS.INDIAN_WOMEN_POSITION.y,
            },
            { transform: indianWomenPosition.getTranslateTransform() },
          ]}
          ref={indianWomenPosition}
        >
          <IndianWomen index={Math.floor(Math.random() * 3)} />
        </Animated.View>
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: CONSTANTS.SHAMAN_POSITION.y,
            },
            { transform: shamanPosition.getTranslateTransform() },
          ]}
          ref={shamanPosition}
        >
          <Shaman index={Math.floor(Math.random() * 3)} />
        </Animated.View>
        <ScoreText>
          Бали:{isGameRun ? coin.quant : 0}
          <MaterialCommunityIcons
            name="star-four-points"
            size={42}
            color="white"
          />
        </ScoreText>
        <StartMessage isGameRun={isGameRun} />
        <Arrow arrowValueChange={arrowValueChange} />
      </Space>
    </TouchableWithoutFeedback>
  );
};
export default Game;
