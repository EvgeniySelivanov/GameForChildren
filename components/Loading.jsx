import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7693e0',
        marginTop:25,
        marginBottom:24
      }}
    >
      <ActivityIndicator size="large" color="white" />
      <Text style={{ marginTop: 15, color: 'white',fontSize:30 }}>Loading....</Text>
    </View>
  );
};
