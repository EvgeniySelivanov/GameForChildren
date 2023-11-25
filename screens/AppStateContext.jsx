import React, { createContext, useContext, useState } from 'react';
import { CONSTANTS } from '../constants';
export const AppStateContext = createContext();
export const AppStateProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(CONSTANTS.INDIANS_QUANTITY);
  const [vibration, setVibration] = useState(CONSTANTS.GAME_VIBRO);
  const [sound, setSound] = useState();
  const [music, setMusic] = useState(false);
  const [isDog,setIsDog]=useState(true);

  const updateQuantity = (newData) => {
    setQuantity(newData);
  };
  const changeUnit = (newData) => {
    setIsDog(newData);
  };
  const updateVibration = (newData) => {
    setVibration(newData);
  };
  const updateMusic = (newData) => {
    setMusic(newData);
  };
  const updateSound = (newData) => {
    setSound(newData);
  };
  const contextValue = {
    quantity: quantity,
    vibration:vibration,
    music:music,
    sound:sound,
    isDog:isDog,
    updateQuantity: updateQuantity,
    updateVibration:updateVibration,
    updateMusic:updateMusic,
    updateSound:updateSound,
    changeUnit:changeUnit,
  };

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
};
