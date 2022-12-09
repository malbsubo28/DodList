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
        <View style={{marginTop: 20}}>
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
  }
})

export default App;
