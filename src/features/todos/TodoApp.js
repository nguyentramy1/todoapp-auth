import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

export const TodoApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <AddTodo />
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    padding: 40, 
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
