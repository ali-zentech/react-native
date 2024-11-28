import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

function Row({ list, setDisplay }) {
  return (
    <View style={styles.rowChild}>
      {list.map((btn, index) => {
        return (
          <KeyPadButton
            key={`${btn.key}-${index}`}
            setDisplay={setDisplay}
            value={btn}
          />
        );
      })}
    </View>
  );
}

function KeyPadButton({ setDisplay, value }) {
  return (
    <TouchableOpacity
      style={[
        styles.btnStyle,
        ["C", "+/-", "%"].includes(value.key)
          ? { backgroundColor: "#666666" }
          : ["/", "*", "-", "+", "="].includes(value.key)
          ? { backgroundColor: "#f09a36" }
          : value.key == "0"
          ? { backgroundColor: "#333333", flex: 0, width: 170 }
          : { backgroundColor: "#333333" },
      ]}
      onPress={() => {
        setDisplay(value.key);
      }}
    >
      <Text style={styles.btnTextStyle}>{value.key}</Text>
    </TouchableOpacity>
  );
}
export default function Calculator() {
  const calculatorBtns = [
    [{ key: "C" }, { key: "+/-" }, { key: "%" }, { key: "/" }],
    [{ key: "7" }, { key: "8" }, { key: "9" }, { key: "*" }],
    [{ key: "4" }, { key: "5" }, { key: "6" }, { key: "-" }],
    [{ key: "1" }, { key: "2" }, { key: "3" }, { key: "+" }],
    [{ key: "0" }, { key: "." }, { key: "=" }],
  ];
  const [displayVal, setDisplayVal] = useState("");
  const [stack, setStack] = useState([]);

  function setDisplay(val) {
    let airthmaticOperands = ["/", "*", "-", "+"];
    if (val == "C") {
      setDisplayVal("");
      setStack([]);
    } else if (["+/-", "%", "="].includes(val)) {
      if (val == "+/-") {
      } else {
        try {
          let calc = eval(displayVal);
          if (val == "%") calc = calc / 100;
          setDisplayVal(eval(calc));
        } catch (error) {
          setDisplayVal("Error");
        }
      }
    } else if (displayVal != "" && airthmaticOperands.includes(val)) {
      setDisplayVal((prev) => {
        console.log();
        if (airthmaticOperands.includes(prev[prev.length - 1])) {
          let str = prev.substring(0, prev.length - 1) + val;
          console.log(str);
          return str;
        }
        return prev + val;
      });
    } else {
      setDisplayVal((prev) => prev + val);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.computed}>{displayVal}</Text>
        <View style={styles.keyPad}>
          {calculatorBtns.map((rowBtns, index) => {
            return (
              <Row key={index} list={rowBtns} setDisplay={setDisplay}></Row>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  display: {
    height: "40%",
    padding: 10,
    justifyContent: "flex-end",
  },
  keyPad: {
    height: "60%",
    padding: 10,
  },
  computed: {
    color: "#fff",
    fontSize: 100,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  rowChild: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnTextStyle: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "500",
  },
  btnStyle: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  dblBtn: {
    flex: 0,
    width: 170,
  },
});
