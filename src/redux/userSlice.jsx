import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        register: (state, action) => {
            state.username = action.payload;
        }
    }
})