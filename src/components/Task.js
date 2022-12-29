import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import trashWhite from '../assets/icons/trashWhite.png';
import trashBlack from '../assets/icons/trashBlack.png';
import checkBoxBlack from '../assets/icons/checkBoxBlack.png';
import checkBoxWhite from '../assets/icons/checkBoxWhite.png';
import checkBlack from '../assets/icons/checkBlack.png';
import checkWhite from '../assets/icons/checkWhite.png';

class checkSource {
  static checkMode=checkBoxBlack;
}

const Task = ({children, time}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isChecked, setChecked] = useState(false);
  const textColor = {
    color: isDarkMode ? '#eee8d5' : '#000000',
  }

  if(isChecked){
    if(isDarkMode){
      checkSource.checkMode=checkBlack;
    }else{
      checkSource.checkMode=checkWhite;
    }
  }else{
    if(isDarkMode){
      checkSource.checkMode=checkBoxBlack;
    }else{
      checkSource.checkMode=checkBoxWhite;
    }
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
        <TouchableOpacity onPress={() => setChecked(isChecked ? false : true)}>
          <Image source={checkSource.checkMode} style={{
            width:23,
            height:23,
            position: 'absolute',
            left: 0,
            top: 2
          }}></Image>
        </TouchableOpacity>
        <View style={{
            backgroundColor: isDarkMode ? '#000505' : '#ececed',
            marginRight: 30,
            marginLeft: 33,
            flex: 1
        }}>
          <Text style={{
            fontSize: 17,
            textDecorationLine: isChecked ? 'line-through' : 'none',
            color: isChecked ?  '#586e75' : textColor.color,
            flexWrap: 'wrap'
          }}>{children}</Text>
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
