import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    isLoginDialogOpen: false,
}

export const userSlice = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            openLoginDialog: (state) => {
                state.isLoginDialogOpen = true;
            },
            closeLoginDialog: (state) => {
                state.isLoginDialogOpen = false;
            },
            login: (state, action) => {
                if (action.payload.password === 'admin') {
                    state.isLoggedIn = true;
                    state.isLoginDialogOpen = false;
                }
            },
            logout: (state) => {
                state.isLoggedIn = false;
            },
        }
    }
)

export const {
    openLoginDialog,
    logout,
    login,
    closeLoginDialog
} = userSlice.actions;

export function selectIsLoginDialogOpen(state) {
    return state.user.isLoginDialogOpen
}

export const selectIsLoggedIn = state => state.user.isLoggedIn
