import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './authSlice';
import Icon from 'react-native-vector-icons/Ionicons'; 
const { height, width } = Dimensions.get('window'); // Lấy chiều cao và chiều rộng màn hình

export const ProfileComponent = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  if (!user) {
    return <Text style={styles.message}>Please log in</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Welcome, {user.username}!</Text>
      <TouchableOpacity onPress={() => dispatch(logout())} style={styles.buttonContainer}>
        <Icon name="log-out-outline" size={24} color="#ffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: -20,
    height: height * 0.05,
    width: width, 
    padding: 16,
    position: 'relative', 
  },
  message: {
    fontSize: 18,
    position: 'absolute',
    top: 16,
    left: 16,
  },
  buttonContainer: {
    position: 'absolute',
    right: 16,
    width: 40,
    height: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 20,
  },
});
