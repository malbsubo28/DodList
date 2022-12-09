import React, {
  Component
} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Date extends Component{
  render(){
    return(
      <Text style={styles.taskDate}>Date :</Text>
    );
  }
}

const Task = () => {
  return(
    <View style={styles.taskBox}>
      <Text style={styles.taskText}>
        Task 1
      </Text>
      <Date/>
    </View>
  );
}

const styles = StyleSheet.create({
  taskBox:{
    backgroundColor: '#22303c',
    margin: 5,
    borderRadius: 10,
    position: 'relative'
  },
  taskText:{
    color : '#eee8d5',
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
    flexWrap: 'wrap'
  },
  taskDate:{
    color : '#eee8d5',
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 3,
    fontWeight: '350'
  },
});

export default Task;
