import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/A2/formSlice';
import locationReducer from './slices/A3/locationSlice';
export const store = configureStore({
    reducer: {
        form: formReducer,
        location: locationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
