import React, {
} from 'react';
import {
  View,
  Text,
  Image,
  useColorScheme,
  ScrollView,
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
          width:23,
          height:23,
          position: 'absolute',
          left: 0,
          top: 2
        }}></Image>
        <View style={{
            backgroundColor: isDarkMode ? '#000505' : '#ececed',
            marginRight: 35,
            marginLeft: 33,
            height: 28,
        }}>
          <ScrollView horizontal>
            <Text style={{
              color : isDarkMode ? '#eee8d5' : '#000000',
              fontSize: 17
            }}>{children}</Text>
          </ScrollView>
        </View>
        <Text style={{
          color : '#93a1a1',
          fontSize: 13,
          fontWeight: '350',
          marginLeft: 33
        }}>{time}</Text>
      </View>
      <View style={{
        backgroundColor: isDarkMode ? '#000505' : '#ececed',
      }}>
        <Image source={isDarkMode ? trashBlack : trashWhite} style={{
          width:20,
          height:20,
          position: 'absolute',
          right: 0,
          top: 3
        }}></Image>
      </View>
    </View>
  );
}

export default Task;
