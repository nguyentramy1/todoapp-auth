import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './todosSlice';
import Icon from 'react-native-vector-icons/Ionicons'; 

export const AddTodo = () => {
  const [text, setText] = useState('');
  const [datetime, setDatetime] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const datetimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;

  function handleSubmit() {
    if (!user) {
      Alert.alert('Warning', 'Please log in to add a todo item');
      return;
    }

    if (!text.trim() || !datetime.trim()) {
      Alert.alert('Warning', 'Please enter both a todo item and a date-time');
      return;
    }

    if (!datetimeRegex.test(datetime)) {
      Alert.alert('Warning', 'Please enter a valid date-time in YYYY-MM-DD HH:MM format');
      return;
    }

    dispatch(addTodo({ text, datetime }));
    setText('');
    setDatetime('');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Todo" 
        placeholderTextColor="gray"
        value={text} 
        onChangeText={setText} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Date-Time (YYYY-MM-DD HH:MM)" 
        placeholderTextColor="gray"
        value={datetime} 
        onChangeText={setDatetime} 
        style={styles.input} 
        keyboardType="default" 
      />
      <View style={styles.buttonContainer}>
        <Icon 
          name="add" 
          size={24} 
          color="#fff" 
          onPress={handleSubmit} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'ghostwhite',
    marginRight: 8,
    marginBottom: 8,
    padding: 8,
    height: 40,
    flex: 1,
  },
  buttonContainer: {
    width: 40, 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#007bff', 
    borderRadius: 10, 
  },
});
