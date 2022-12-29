import React, { useEffect, useState } from 'react';
import{
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  TouchableOpacity
} from 'react-native';
import Task from './components/Task';
import addIcon from './assets/icons/addIcon.png'

const AppHeader = (props) => {
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <View style={{
      backgroundColor: isDarkMode ? '#000505' : '#ececed'
    }}>
      <View style={styles.appHeaderBox}>
        <View style={{
          flexDirection: 'row',
          height: 30,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          position: 'relative'
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: isDarkMode ? '#eee8d5' : '#000000',
          }}>DodList</Text>
          <Text style={{
            fontSize: 13,
            marginLeft: 10,
            fontWeight: '400',
            color: '#93a1a1',
          }}>Do the List !!!</Text>
        </View>
      </View>
      <View style={styles.appHeaderInfo}>
        <View style={{position: 'relative'}}>
          <Text style={{
            fontSize: 17,
            fontWeight: '750',
            color: isDarkMode ? '#eee8d5' : '#000000',
          }}>Tasks </Text>
        </View>
        <View style={styles.notifyWrapper}>
          <Text style={{
            fontSize: 14,
            fontWeight: '700',
            color: '#eee8d5'
          }}>{props.jobs}</Text>
        </View>
        <TouchableOpacity onPress={props.addPress} style={styles.addTaskIcon}>
          <Image source={addIcon} style={{
            width: 60,
            height: 25,
            borderRadius: 10
          }}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const App = () => {
  const [taskSum, setTaskSum] = useState(0);
  const [isAvailable, setAvailable] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000505' : '#ececed'
  };

  useEffect(() => {
    setAvailable(taskSum === 0 ? false : true);
    console.log("===> isAvailable = ", isAvailable);
    console.log("===> tasks =", taskSum);
    return(
      console.log("===> components update")
    );
  }, [taskSum])

  const tasks = {
    title : [
      'Workout pagi 1 Jam',
      'Baca buku 30 menit',
      'Workout malam 1 Jam',
      'Meeting project ...',
      'Nyicil project ...',
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    ],
    time : [
      '06.00',
      '08.00',
      '12.00',
      '03.00',
      '19.00',
      '19.00',
      '19.00'
    ]
  }

  return(
    <SafeAreaView style={{backgroundColor: isDarkMode ? '#000000' : '#ffffff', flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppHeader addPress={() => {setTaskSum(taskSum + 1)}} jobs={taskSum}/>
      {isAvailable && <ScrollView 
        contentInsetAdjustmentBehavior='automatic'
        style={{backgroundColor: isDarkMode ? '#000000' : '#ffffff'
      }}>
        <View style={{padding: 10}}>
          {tasks.title.map((title, index) => (
            <Task time={tasks.time[index]} title={title} key={index}/>
          ))}
        </View>
      </ScrollView>}
      {!isAvailable && <View style={{
        alignItems: 'center',
        paddingTop: 250
      }}>
        <Text style={{
          fontSize: 17,
          color: '#586e75'
        }}>There is no task to do !</Text>
      </View>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appHeaderBox:{
    flexDirection: 'row',
    height: 30,
    padding: 15,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5
  },
  appHeaderInfo:{
    height: 50,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  notifyWrapper: {
    backgroundColor: '#c04660',
    width: 25,
    height: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addTaskIcon:{
    position: 'absolute',
    alignItems: 'center',
    right: 0
  }
})

export default App;
