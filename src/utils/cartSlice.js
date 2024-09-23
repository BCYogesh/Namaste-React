import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        // Name of the action and it has reducer function
        // reducer function has two parameters state and action
        addItem: (state, action) => {
            state.items.push(action.payload);
            console.log(current(state));
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
            // return { items: [] };
        },
    },
});

// I want to export my action and reducers

// Actions

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Reducers

export default cartSlice.reducer;
