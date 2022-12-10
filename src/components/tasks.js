import React, {
} from 'react';
import {
  View,
  Text,
  Image,
  useColorScheme
} from 'react-native';
import trashWhite from '../images/trash_white.png';
import trashBlack from '../images/trash_black.png';


const Task = ({children, time}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <View style={{
      backgroundColor: isDarkMode ? '#000505' : '#ececed',
      margin: 5,
      padding: 5,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <View>
        <Text style={{
          color : isDarkMode ? '#eee8d5' : '#000000',
          fontSize: 18,
          flexWrap: 'wrap'
        }}>{children}</Text>
        <Text style={{
          color : '#93a1a1',
          fontSize: 15,
          fontWeight: '350'
        }}>{time}</Text>
      </View>
      <View style={{
        backgroundColor: isDarkMode ? '#000505' : '#ececed',
      }}>
        <Image source={isDarkMode ? trashBlack : trashWhite} style={{
          width:25,
          height:25,
        }}></Image>
      </View>
    </View>
  );
}

export default Task;
