import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalsList = (props) => {
    function deleteGoal(id) {
        props.setGoalList((prev) => (
            [...props.goalList.filter((item) => item.id != id)]
        ))
    }
  return (
     <View style={styles.listContainer}>
        <Text style={styles.listHeading}>List of your Goals !</Text>
        <View>
            <FlatList
                data={props.goalList}
                renderItem={({item,index}) => (
                    <View style={styles.listItem}>
                        <Text> {`${index}. ${item.text}`} </Text>
                        <Pressable
                          onPress={() => deleteGoal(item.id)}
                        >
                            <Text> X </Text>
                        </Pressable>
                    </View>
                )}
                keyExtractor={(item) =>  item?.id?.toString()}

             />
        </View>
      </View>
  )
}

export default GoalsList

const styles = StyleSheet.create({
  listContainer: {
    flex: 9,
  },
  listHeading: {
    fontSize: 20,
    alignItems: 'center',
    marginBottom: 10
  },
  listItem: {
    width: '100%',
    backgroundColor: '#F0F8FF',
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  }
})