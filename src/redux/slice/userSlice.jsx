import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    nombreInvocador: "",
    imagenPerfil: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.nombreInvocador = action.payload.nombreInvocador;
            state.imagenPerfil = action.payload.imagenPerfil;
        },

        logout: (state) => {
            state.nombreInvocador = "";
            state.imagenPerfil = null;
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;