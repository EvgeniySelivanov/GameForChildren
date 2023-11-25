import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
const StartMessage = ({isGameRun}) => {
  return (
 
        <View>
          {isGameRun ? (
            <Text></Text>
          ) : (
            <Text style={styles.buttonGameOver}>
              Доторкнись до екрану.
            </Text>
          )}
        </View>
     
  );
}
const styles = StyleSheet.create({ 
  buttonGameOver: {
    top:280,
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 47,
    color: 'rgb(55, 11, 127)',
    backgroundColor: 'rgba(55, 255, 192, 0.4)',

  },
});
export default StartMessage;
