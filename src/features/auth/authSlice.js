import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      AsyncStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      AsyncStorage.removeItem('user');
    },
    setUserFromStorage: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUserFromStorage } = authSlice.actions;
export default authSlice.reducer;

export const loadUserFromStorage = () => async (dispatch) => {
  const user = await AsyncStorage.getItem('user');
  if (user) {
    dispatch(setUserFromStorage(JSON.parse(user)));
  }
};
