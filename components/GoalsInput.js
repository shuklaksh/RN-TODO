import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
let a = 1;
const GoalsInput = (props) => {
  const [inputValue, setInputValue] = useState("");
const [modalVisible, setModalVisible] = useState(false);

  function handleInputChange (text) {
    setInputValue(text)
  }

  function addGoal () {
    props.setGoalList((prev) => [
        ...prev,
        {id: a++, text: inputValue}
    ]);
    setModalVisible(false);
    setInputValue("");
   
  }
  return (
    <View style={styles.inputContainer}>
        <Button title='add goals' onPress={() => setModalVisible(true)} />
        <Modal
        animationType='slide'
        visible={modalVisible}
       
        >
            <View  style={styles.modalContainer}>
                <TextInput 
                style={styles.textInput}
                placeholder='Enter Your Goals..'
                value={inputValue}
                onChangeText={handleInputChange}
                />
                <Button 
                title='Add Goal!'
                onPress={addGoal}
                />
            </View>
        </Modal>
       
      </View>
  )
}

export default GoalsInput

const styles = StyleSheet.create({
    modalContainer :{
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 5,
    paddingHorizontal: 10,
    width: '80%',
  },
})