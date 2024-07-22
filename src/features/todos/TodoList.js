import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './todosSlice';

export function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.todoItem}>
          <TouchableOpacity onPress={() => dispatch(toggleTodo(todo.id))}>
            <View>
              <Text style={todo.completed ? styles.completed : styles.text}>
                {todo.text}
              </Text>
              <Text style={styles.datetime}>
                {todo.datetime}
              </Text>
            </View>
          </TouchableOpacity>
          <Button
            title="Delete"
            onPress={() => dispatch(deleteTodo(todo.id))}
            color="#ff5c5c"
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    width: '100%',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
  },
  completed: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  datetime: {
    fontSize: 14,
    color: 'gray',
  }
});
