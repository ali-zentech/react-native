import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  let [count, setCount] = useState(0); 
  let [title, setTitle] = useState('Counter'); 

  function addCount() {
    setCount(++count)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title The {title}</Text>
      <View style={styles.comp}>
        <Text style={styles.text}>my app counter {count}!</Text>
        <View style={styles.buttonStyle}> 
          <Button onPress={addCount} color="#219673" title='Add count'/>
        </View>
        <View style={styles.buttonStyle}> 
          <Button onPress={() => {setCount(0)}} color="#219673" title='Reset '/>
        </View>
      </View>
      <TextInput placeholder='Name Your Counter' onChangeText={(val)=> {setTitle(val)}}style={styles.textInput} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    padding: 20, 
  },
  comp: {
    flex: 1, 
    maxHeight: 160,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#2196f3',
    padding: 20, 
  },
  text: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Serif', 
    color: 'black', 
  }, 
  textInput: {
    borderWidth: 1,
    borderCurve: 'circular', 
    borderBlockColor: '777',
    
  }
 
});
