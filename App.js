import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Pressable, FlatList} from 'react-native';

export default function Counter() {
  const [addTask, setTask] = useState("");
  const [taskList, setTaskList] = useState([])

  function addNewTask() {
    setTaskList(prev => [...prev, {name: addTask, key: Math.random().toString(8).substring(2, 15)}]);
    setTask("")
  }

  return (
    <View style={styles.container}>
        <View style={styles.addTask}>
            <Text style={styles.heading}>Todo Task tracker</Text>
            <TextInput value={addTask} placeholder='Add Task Here' style={styles.Input} onChangeText={setTask}/>
            <Pressable  style={styles.PressableButton} onPress={addNewTask}><Text style={{color: 'white', textAlign: 'center'}}>Add Task</Text></Pressable>
        </View>
        <View style={styles.taskList}>
          <FlatList 
            data={taskList}
            renderItem={({item}) => (
              <View style={styles.taskList}>
                <Text style={styles.task}>{item.name}</Text>
              </View>
            )}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#788787',
    gap: 30,
    paddingHorizontal: 20, 
    paddingTop: 50
  },
  addTask: {
    gap: 10,
  }, 
  heading: {
    textAlign: 'center', 
    fontFamily: 'Serif', 
    fontWeight: 'Bold',
    fontSize: 24,
    width: '100%',
    padding: 20
  }, 
  Input: {
    width: '95%',
    padding: 20, 
    marginHorizontal: 10,
    borderWidth: 1, 
    borderCurve: 'circular', 
  }, 
  PressableButton: {
    width: '95%',
    padding: 20, 
    marginHorizontal: 10,
    borderWidth: 1, 
    borderCurve: 'circular',
    backgroundColor: "black", 
    color: "white", 
    fontWeight: 'bold'
  },
  task: {
    width: '95%',
    padding: 20, 
    marginHorizontal: 10,
    borderWidth: 1, 
    borderCurve: 'circular',
    backgroundColor: "#789797", 
    color: "black", 
    fontWeight: 'bold',
    margin:1
  }
});
