import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../theme';
import { Button } from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';

export default function CustomButton({label, onPress, loading}) {
  const linearGradient = {
    // flex: 1,
    padding: 25,
    marginBottom: 25,
    borderRadius: 5,
  };

  return (
    // <LinearGradient
    //   colors={['#a0974288', '#e5d23f49', '#b7aa31']}
    //   style={linearGradient}>
    //   <TouchableOpacity
    //     style={{
    //       flex: 1,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}
    //     onPress={onPress}>
    //     {loading ? (
    //       <ActivityIndicator color={Color.white} />
    //     ) : (
    //       <Text style={{color: Color.white, fontFamily: Fonts.primaryBold}}>
    //         {label}
    //       </Text>
    //     )}
    //   </TouchableOpacity>
    // </LinearGradient>
    <Button
      onPress={onPress}
      loading={loading}
      mode="contained"
      dark
      contentStyle={{
        padding: 5,
      }}
      labelStyle={{
        fontFamily: Fonts.primaryBold,
        fontSize: 18,
        fontWeight: '800',
        color: Color.primary,
      }}
      style={{
        backgroundColor: Color.secondary,
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 15,
        elevation: 3,
      }}>
      {label}
    </Button>
  );
}

// style={{

//           }}
