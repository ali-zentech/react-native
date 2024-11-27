import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Demo() {
  const [display, setDisplay] = useState("");
  const [counter, setCounter] = useState(0);

  const [timer, setTimer] = useState(null);

  useEffect(() => {
    let time = [];
    time[0] = Math.floor(counter / 3600);
    time[1] = Math.floor((counter % 36000) / 60);
    time[2] = Math.floor((counter % 3600) % 60);
    time.forEach((val, index) => {
      if (val <= 9) {
        time[index] = "0" + val;
      }
    });
    setDisplay(time.join(" : "));
  }, [counter]);

  function startFunc() {
    setTimer(
      setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000)
    );
  }
  function pauseFunc() {
    clearInterval(timer);
    setTimer(null);
  }
  function resetFunc() {
    clearInterval(timer);
    setCounter(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{display}</Text>
      <View>
        {timer ? (
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#bbb" }]}
            onPress={() => pauseFunc()}
          >
            <Text>Pause</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.btn]} onPress={() => startFunc()}>
            <Text>Start</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.btn} onPress={() => resetFunc()}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 150,
    backgroundColor: "#fff",
    padding: 20,
    alignContent: "center",
    alignItems: "center",
    fontWeight: 500,
    margin: 10,
  },
  text: {
    fontSize: 40,
    color: "#fff",
    padding: 20,
  },
});
