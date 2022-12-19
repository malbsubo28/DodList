import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  useColorScheme,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import trashWhite from '../assets/icons/trashWhite.png';
import trashBlack from '../assets/icons/trashBlack.png';
import CheckBox, {isChecked} from './CheckBox';

const Task = ({children, time}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = {
    color: isDarkMode ? '#eee8d5' : '#000000',
  }

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
        <CheckBox/>
        <View style={{
            backgroundColor: isDarkMode ? '#000505' : '#ececed',
            marginRight: 35,
            marginLeft: 33,
            height: 28,
        }}>
          <ScrollView horizontal>
            <Text style={{
              fontSize: 17,
              textDecorationLine: isChecked ? 'line-through' : 'none',
              color: isChecked ?  '#93a1a1' : textColor
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
      <TouchableOpacity onPress={() => alert("Are you sure ?")}>
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
      </TouchableOpacity>
    </View>
  );
}

export default Task;
