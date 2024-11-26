import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

function AddTask({ addTask, focus, setTask, addNewTask, editTask }) {
  return (
    <View style={styles.addTask}>
      <Text style={styles.heading}>Todo Task tracker</Text>
      <TextInput
        value={addTask}
        placeholder="Add Task Here"
        style={styles.Input}
        onChangeText={setTask}
      />

      {focus == null ? (
        <Pressable style={styles.PressableButton} onPress={addNewTask}>
          <Text style={styles.innerText}>Add Task</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.PressableButton} onPress={editTask}>
          <Text style={styles.innerText}>Edit Task</Text>
        </Pressable>
      )}
    </View>
  );
}

function SingleTask({
  item,
  index,
  focus,
  setFocus,
  deleteTask,
  editButtonCliced,
  CompleteTask,
}) {
  return (
    <TouchableWithoutFeedback onPress={() => setFocus(index)}>
      <View style={styles.task}>
        <View style={styles.inlineTask}>
          <Text style={styles.subHeading}>{item.name}</Text>
          {item.status ? <Text style={styles.subHeading}>☑️</Text> : <></>}
        </View>
        {focus == index ? (
          <View style={styles.overlayAction}>
            <Pressable
              style={styles.actionButton}
              onPress={() => deleteTask(index)}
            >
              <Text style={styles.innerText}>Delete</Text>
            </Pressable>
            <Pressable
              style={styles.actionButton}
              onPress={() => editButtonCliced(item, index)}
            >
              <Text style={styles.innerText}>Edit</Text>
            </Pressable>
            <Pressable
              style={styles.actionButton}
              onPress={() => CompleteTask(index)}
            >
              <Text style={styles.innerText}>Complete</Text>
            </Pressable>
          </View>
        ) : (
          <></>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function Todo() {
  const [addTask, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [focus, setFocus] = useState(null);

  function addNewTask() {
    if (addTask.trim() == "") return;
    setTaskList((prev) => [
      ...prev,
      {
        name: addTask,
        status: false,
        key: Math.random().toString(8).substring(2, 15),
      },
    ]);
    setTask("");
  }

  function deleteTask(indexId) {
    if (indexId < 0) return;
    setTaskList(taskList.filter((_, index) => index != indexId));
  }

  function editButtonCliced(item, index) {
    setTask(item.name);
    setFocus(index);
  }

  function editTask() {
    if (focus < 0) return;
    const tasks = [...taskList];
    tasks[focus].name = addTask;
    setTaskList(tasks);
    setFocus(null);
    setTask("");
  }

  function CompleteTask(indexId) {
    if (indexId < 0) return;
    const tasks = [...taskList];
    tasks[focus].status = !tasks[focus].status;
    setTaskList(tasks);
    setFocus(null);
  }

  return (
    <View style={styles.container}>
      <AddTask
        addTask={addTask}
        focus={focus}
        setTask={setTask}
        addNewTask={addNewTask}
        editTask={editTask}
      />
      <FlatList
        data={taskList}
        renderItem={({ item, index }) => {
          console.log({ item });

          return (
            <SingleTask
              item={item}
              index={index}
              focus={focus}
              setFocus={setFocus}
              deleteTask={deleteTask}
              editButtonCliced={editButtonCliced}
              CompleteTask={CompleteTask}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#878787",
    gap: 30,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  addTask: {
    gap: 10,
  },
  heading: {
    textAlign: "center",
    fontFamily: "Serif",
    fontWeight: "bold",
    fontSize: 24,
    width: "100%",
    padding: 20,
  },
  subHeading: {
    fontFamily: "Serif",
    fontWeight: "Bold",
    fontSize: 16,
    width: "90%",
  },
  Input: {
    width: "95%",
    padding: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderCurve: "circular",
    borderRadius: 10,
  },
  PressableButton: {
    width: "95%",
    padding: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderCurve: "circular",
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    borderRadius: 10,
  },
  task: {
    width: "95%",
    padding: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderCurve: "circular",
    backgroundColor: "#878782",
    color: "black",
    fontWeight: "bold",
    margin: 1,
    gap: 20,
    borderRadius: 10,
  },
  inlineTask: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  overlayAction: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButton: {
    width: "30%",
    backgroundColor: "black",
    borderCurve: "circular",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    borderRadius: 10,
  },

  innerText: {
    color: "white",
    textAlign: "center",
    shadowColor: "black",
  },
});
