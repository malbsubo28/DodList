import React from 'react';
import{
  Text,
  View,
  ScrollView,
  StyleSheet,
  useColorScheme
} from 'react-native';
import Task from './src/components/tasks'

const AppHeader = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <View>
      <View style={styles.appHeaderBox}>
        <View style={{
          backgroundColor: '#002b36',
          marginTop: 5,
          width: 40,
          height: 40,
          borderRadius: 50,
        }}></View>
        <Text style={{
          fontSize: 20,
          marginLeft: 10,
          fontWeight: '750',
          color: isDarkMode ? '#eee8d5' : '#000000',
        }}>DodList</Text>
        <View style={{
          backgroundColor: '#002b36',
          marginTop: 5,
          width: 40,
          height: 40,
          borderRadius: 50,
        }}></View>
      </View>
      <View style={styles.appHeaderInfo}>
        <View style={{position: 'relative'}}>
          <Text style={{
            fontSize: 15,
            fontWeight: '600',
          }}>Today tasks </Text>
        </View>
        <View style={styles.notifyWrapper}>
          <Text style={styles.taskNotify}>10</Text>
        </View>
        <View style={styles.addTaskIcon}>
          <Text style={styles.taskNotify}>10</Text>
        </View>
      </View>
    </View>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColorMode = {
    backgroundColor: isDarkMode ? '#000000' : '#eee8d5',
  };
  return(
    <ScrollView 
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundColorMode}>
      <View>
        <AppHeader/>
        <View>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appHeaderBox:{
    flexDirection: 'row',
    height: 45,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appHeaderInfo:{
    backgroundColor: '#93a1a1',
    height: 30,
    padding: 5,
    flexDirection: 'row',
    position: 'relative'
  },
  taskNotify: {
    fontSize: 13,
    fontWeight: '700'
  },
  notifyWrapper: {
    backgroundColor: '#3258a0',
    width: 25,
    height: 25,
    borderRadius: 50,
    alignItems: 'center'
  },
  addTaskIcon:{
    backgroundColor: '#3258a0',
    width: 25,
    height: 25,
    borderRadius: 50,
    alignItems: 'center',
    position: 'relative',
    top: 0,
    right: 0
  }
})

export default App;
