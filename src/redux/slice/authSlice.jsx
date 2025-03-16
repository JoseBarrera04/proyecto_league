import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: "",
    isLogged: false,
};

const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.isLogged = true;
        },

        logout: (state) => {
            state.username = "";
            state.password = "";
            state.isLogged = false;
        },
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;