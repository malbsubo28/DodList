import React, { useState } from 'react';
import {Image, TouchableOpacity, useColorScheme} from 'react-native';
import checkBoxBlack from '../assets/icons/checkBoxBlack.png';
import checkBoxWhite from '../assets/icons/checkBoxWhite.png';
import checkBlack from '../assets/icons/checkBlack.png';
import checkWhite from '../assets/icons/checkWhite.png';

class checkSource {
  static checkMode=checkBoxBlack;
  static checkState=false;
}

const CheckBox = (props) => {
  const [isChecked, setChecked] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

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
  checkSource.checkState=isChecked;

  return(
    <TouchableOpacity onPress={() => {props.onPressCheck; setChecked(isChecked ? false : true)}}>
      <Image source={checkSource.checkMode} style={{
        width:23,
        height:23,
        position: 'absolute',
        left: 0,
        top: 2
      }}></Image>
    </TouchableOpacity>
  );
}

export const isChecked = checkSource.checkState;
export default CheckBox;
