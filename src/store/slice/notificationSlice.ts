import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { dispatch } from '../index';

// const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:3010'; 

export interface NotificationState {
    error: string | null;
    totalItems: number | null;
    data: any[];
}

const initialState: NotificationState = {
    error: null,
    data: [],
    totalItems: null,
};

const slice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        hasError(state, action) {
            state.error = action.payload;
        },
        getNotificationSuccess(state, action) {
            state.data = action.payload.data;
            state.totalItems = action.payload.paging.totalItems;
        },
    },
});

export default slice.reducer;

export const getAllNotification = () => {
    return async () => {
        try {
            const index = 0;
            const size = 0;
            // const token = localStorage.getItem('serviceToken');

            //   if (!token) { 
            //     throw new Error('serviceToken not found'); 
            //   } 
            const token = JSON.parse(localStorage.getItem("serviceToken") as string);

            const response = await axios.get(`${import.meta.env.VITE_APP_SOCKET}/logs?read=false&index=${index}&size=${size}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });

            console.log('response', response.data);
            dispatch(slice.actions.getNotificationSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
};
