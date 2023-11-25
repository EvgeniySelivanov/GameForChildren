import { Dimensions } from 'react-native';
export const CONSTANTS = {
  SCREEN_HEIGHT: Dimensions.get('screen').height,
  SCREEN_WIDTH: Dimensions.get('screen').width,
  ARROW_POSITION: { x: 175, y: 490 },
  COIN_POSITION: { x: 15, y: -120 },
  INDIAN_POSITION: { x: 130, y: -190 },
  INDIAN_WOMEN_POSITION: { x: 80, y:-290 },
  SHAMAN_POSITION: { x: 200, y:-390 },
  INDIAN_SIZE: { width: 39, height: 100 },
  INDIAN_WOMEN_SIZE: { width: 34, height: 100 },
  SHAMAN_SIZE: { width: 75, height: 100 },
  ARROW_SIZE: { width: 12, height: 120 },
  COIN_SIZE:{width: 120, height: 120},
  INDIANS_QUANTITY: 1,
  GAME_VIBRO:false,
  GAME_SPEED:14000,
};
