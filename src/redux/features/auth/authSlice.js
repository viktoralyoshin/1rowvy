import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utills/axios";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, username, password }) => {
    try {
      const { data } = await axios.post("/auth/register", {
        email,
        username,
        password,
      });
      if(data.token){
        window.localStorage.setItem('token', data.token)
      }
      return data
    } catch (error) {
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true
      state.status = null
    }),
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.status = action.payload.message
      state.user = action.payload.user
      state.token = action.payload.token
    }),
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = action.payload.message
      state.isLoading = false
    })
  }
});

export default authSlice.reducer;
