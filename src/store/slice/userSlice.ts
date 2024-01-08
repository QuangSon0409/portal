import { createSlice } from "@reduxjs/toolkit";

import axios from "../../service/instance"
import { dispatch } from "..";
export interface IUserState {
    sub: string;
    email_verified: boolean | null;
    name: string;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;
}

export interface InitialState {
    user: IUserState;
    error: string | null;
}

const initialState: InitialState = {
    user: {
        sub: "",
        email_verified: null,
        name: "",
        preferred_username: "",
        given_name: "",
        family_name: "",
        email: ""
    },
    error: null
}
const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        hasError(state, action) {
            state.error = action.payload
        },
        getUserSuccess(state, action) {
            state.user = action.payload
        }
    }
})

export default slice.reducer;

export const getUser = () => {
    return async () => {
        try {
            const response = await axios.get(`/realms/sonbq/protocol/openid-connect/userinfo`);

            console.log("response: ", response.data);
            dispatch(slice.actions.getUserSuccess(response.data))
        } catch (error) {
            dispatch(slice.actions.hasError(error))
        }

    }
}