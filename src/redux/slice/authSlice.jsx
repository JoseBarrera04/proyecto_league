import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    username: "",
    password: "",
    isLogged: false,
    puuid: "",
    riotId: "",
    tag: "",
};

const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.isLogged = true;
            state.puuid = action.payload.puuid;
            state.riotId = action.payload.riotId;
            state.tag = action.payload.tag;
        },

        logout: (state) => {
            state.id = "",
            state.username = "";
            state.password = "";
            state.isLogged = false;
            state.puuid = "";
            state.riotId = "";
            state.tag = "";
        },
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;