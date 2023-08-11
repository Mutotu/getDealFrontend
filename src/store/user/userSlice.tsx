import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: number;
  name: string;
  email: string;
  photo: string;
  token: string;
  cart: any[];
  tempCartIds: any[];
}

const initialState = {
  id: null,
  name: "",
  email: "",
  photo: "",
  token: "",
  cart: [],
  tempCartIds: [],
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateState: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.token = action.payload.token;
      state.cart = action.payload.cart;
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    refreshState: () => initialState,
    updateTepmCardIds: (state, action) => {
      state.tempCartIds = action.payload;
    },
    clearTepmCardIds: (state) => {
      state.tempCartIds = [];
    },
  },
});

export const {
  updateState,
  refreshState,
  updateTepmCardIds,
  updateCart,
  clearTepmCardIds,
} = userSlice.actions;
export const selectData = (state: { userInput: typeof initialState }) =>
  state.userInput;
export default userSlice.reducer;
