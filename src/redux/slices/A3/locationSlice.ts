import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from '@A3/data/location.json';
export type Location = {
    id: string;
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    description: string;
    rating: number;
};

type initialStateLocation = {
    isLoading: boolean;
    isError: boolean;
    filteredData: Location[];
};
const initialState: initialStateLocation = {
    isLoading: false,
    isError: false,
    filteredData: [],
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        getFilteredData: (state, action: PayloadAction<{ search: string; sortOrder: string }>) => {
            const { search, sortOrder } = action.payload;
            state.filteredData = data
                .filter((loc) => loc.name.toLowerCase().includes(search.toLowerCase()))
                .sort((a, b) => (sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating));
        },
    },
});
export const { getFilteredData } = locationSlice.actions;
export default locationSlice.reducer;
