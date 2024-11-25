// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import {  StyleSheet, Text, View, ScrollView, FlatList, Touchable } from 'react-native';

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: "ali", key: "1" },
//     { name: "hur", key: "2" },
//     { name: "zain", key: "3" },
//     { name: "sara", key: "4" },
//     { name: "john", key: "5" },
//     { name: "alice", key: "6" },
//     { name: "mario", key: "7" },
//     { name: "ali", key: "8" },
//     { name: "hur", key: "9" },
//     { name: "zain", key: "10" },
//     { name: "sara", key: "11" },
//     { name: "john", key: "12" },
//     { name: "alice", key: "13" },
//     { name: "mario", key: "14" },
//   ]);

//   function pressHnadler(id) {
//     setPeople( (prevPeople) =>{return prevPeople.filter(val => val !== id)})
//   }

//   // return (
//   //   <View style={styles.container}>
//   //     <ScrollView >
//   //        {people.map( (item) => {
//   //        return <Text key={item.key} style={styles.text}> {item.name}</Text> 
//   //       })};
//   //     </ScrollView>
//   //   </View>
//   // );

//   // return (
//   //   <View style={styles.container}>
//   //     <ScrollView >
//   //     {people.map( ({item}) => (
//   //       <View key={item.key} >
//   //        <Text style={styles.text}>{item.name}</Text> 
//   //        </View>
//   //       )) };

//   //     </ScrollView>
//   //   </View>
//   // );

//   return (
//     <View style={styles.container}>
//       <FlatList
//       data={people}
//       numColumns={3}
//       renderItem={({item}) => (
//         <Touchable onPress={pressHnadler(item.id)}>
//           <Text style={styles.text} onPress={pressHnadler(item.id)}> {item.name}</Text>
//         </Touchable>
//       )}
        
//         />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: 'column',
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 50,
//     // gap: 30,
//     // padding: 20, 
//   },
  
//   text: {
//     fontWeight: 'bold',  
//     fontFamily: 'Serif', 
//     color: 'black', 
//     padding: 20, 
//     marginHorizontal: 20, 
//     marginVertical: 20,
//     backgroundColor: 'pink'
//   }, 
 
// });
