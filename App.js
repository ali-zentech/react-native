import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

export default function App() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#878787",
    gap: 30,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
});
