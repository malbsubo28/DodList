import React, {
} from 'react';
import {
  View,
  Text,
  Image,
  useColorScheme
} from 'react-native';
import trashWhite from '../assets/icons/trashWhite.png';
import trashBlack from '../assets/icons/trashBlack.png';
import checkWhite from '../assets/icons/checkWhite.png';
import checkBlack from '../assets/icons/checkBlack.png';

const Task = ({children, time}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <View style={{
      backgroundColor: isDarkMode ? '#000505' : '#ececed',
      padding: 10,
      margin: 7,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'relative'
    }}>
      <View>
        <Image source={isDarkMode ? checkBlack : checkWhite} style={{
          width:26,
          height:26,
          position: 'absolute',
          left: 0,
          top: 2
        }}></Image>
        <Text style={{
          color : isDarkMode ? '#eee8d5' : '#000000',
          fontSize: 17,
          flexWrap: 'wrap',
          marginRight: 35,
          marginLeft: 35
        }}>{children}</Text>
        <Text style={{
          color : '#93a1a1',
          fontSize: 13,
          fontWeight: '350',
          marginLeft: 35
        }}>{time}</Text>
      </View>
      <View style={{
        backgroundColor: isDarkMode ? '#000505' : '#ececed',
      }}>
        <Image source={isDarkMode ? trashBlack : trashWhite} style={{
          width:23,
          height:23,
          position: 'absolute',
          right: 0,
          top: 3
        }}></Image>
      </View>
    </View>
  );
}

export default Task;
