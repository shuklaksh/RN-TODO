import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalsInput from './components/GoalsInput';
import GoalsList from './components/GoalsList';

export default function App() {
 
  const [goalList, setGoalList] = useState([]);

  

  return (
    <View style={styles.container}>
      <GoalsInput
        setGoalList={setGoalList}
       />
       <GoalsList 
        goalList={goalList}
        setGoalList={setGoalList}
       />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingTop: 40,
   paddingHorizontal: 20
  },
  
});
