import React from 'react'
import{
  Text,
  View,
  ScrollView,
  StyleSheet,
  useColorScheme
} from 'react-native'

const AppHeader = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <View style={{height: 100, backgroundColor: isDarkMode ? '#000505' : '#eee8d5'}}>
      <Text style={{fontSize: 25, fontWidth: '600', paddingTop: 5}}>DodList</Text>
      <Text>Daily todo-list</Text>
    </View>
  );
}

const Date = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <View>
      <Text style={{fontSize: 18}}>Date: </Text>
    </View>
  );
}

const Task = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <View style={{height: 50, backgroundColor: isDarkMode ? '#073642' : '#93aeae'}}>
      <Text style={{fontSize: 18}}>Task1</Text>
      <Date/>
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
        <Task/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
});

export default App;
