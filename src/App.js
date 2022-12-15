import React from 'react';
import{
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native';
import Task from './components/Task';
import appImage from './assets/images/appImage.png';

const AppHeader = ({jobs}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <View style={{
      backgroundColor: isDarkMode ? '#000505' : '#ececed'
    }}>
      <View style={styles.appHeaderBox}>
        <Image source={appImage} style={{
          marginTop: 10,
          width: 40,
          height: 40,
          borderRadius: 50
        }}></Image>
        <View style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          position: 'relative'
        }}>
          <Text style={{
            fontSize: 20,
            marginLeft: 10,
            fontWeight: '750',
            color: isDarkMode ? '#eee8d5' : '#000000',
          }}>DodList</Text>
          <Text style={{
            fontSize: 13,
            marginLeft: 10,
            fontWeight: '400',
            color: '#93a1a1',
          }}>Do the List for today !!!</Text>
        </View>
      </View>
      <View style={styles.appHeaderInfo}>
        <View style={{position: 'relative'}}>
          <Text style={{
            fontSize: 17,
            fontWeight: '750',
            color: isDarkMode ? '#eee8d5' : '#000000',
          }}>Today tasks </Text>
        </View>
        <View style={styles.notifyWrapper}>
          <Text style={{
            fontSize: 13,
            fontWeight: '700',
            color: '#eee8d5'
          }}>{jobs}</Text>
        </View>
        <View style={styles.addTaskIcon}>
          <Text style={{
            fontSize: 20,
            fontWeight: '400',
            color: '#eee8d5'
          }}>+</Text>
        </View>
      </View>
    </View>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000505' : '#ececed'
  };
  return(
    <SafeAreaView style={{backgroundColor: isDarkMode ? '#000000' : '#ffffff', flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppHeader jobs={15}/>
      <ScrollView 
        contentInsetAdjustmentBehavior='automatic'
        style={{
          backgroundColor: isDarkMode ? '#000000' : '#ffffff'
        }}>
        <View style={{padding: 10}}>
          <Task time="07.00">Workout pagi 1 Jam</Task>
          <Task time="09.00">Baca buku 30 menit</Task>
          <Task time="12.00">Meeting ...</Task>
          <Task time="15.00">Nyicil project</Task>
          <Task time="20.00">Workout malam 1 Jam</Task>
          <Task time="20.00">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Task>
          <Task time="20.00">Task 7</Task>
          <Task time="20.00">Task 8</Task>
          <Task time="20.00">Task 9</Task>
          <Task time="20.00">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</Task>
          <Task time="20.00">Task 11</Task>
          <Task time="20.00">Task 12</Task>
          <Task time="20.00">Task 13</Task>
          <Task time="20.00">Task 14</Task>
          <Task time="20.00">Task 15</Task>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appHeaderBox:{
    flexDirection: 'row',
    height: 45,
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
    width: 23,
    height: 23,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addTaskIcon:{
    backgroundColor: '#3258a0',
    width: 33,
    height: 33,
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
