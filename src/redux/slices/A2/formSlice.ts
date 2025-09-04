import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type Form = {
    fullName: string;
    email: string;
    phone: string;
    city: string;
    country: string;
    school: string;
    major: string;
};
type initialStateForm = {
    isLoading: boolean;
    isError: boolean;
    form: Form;
};
const initialState: initialStateForm = {
    isLoading: false,
    isError: false,
    form: {
        fullName: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        school: '',
        major: '',
    },
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateSubmitForm: (state, action: PayloadAction<Form>) => {
            const form = action.payload;
            state.form = form;
        },
        resetSubmitForm: (state) => {
            const form = {
                fullName: '',
                email: '',
                phone: '',
                city: '',
                country: '',
                school: '',
                major: '',
            };
            state.form = form;
        },
    },
});
export const { updateSubmitForm, resetSubmitForm } = formSlice.actions;
export default formSlice.reducer;
