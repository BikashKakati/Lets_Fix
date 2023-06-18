import { createSlice } from '@reduxjs/toolkit';

const cardsList = !!localStorage.getItem("favoriteCard") ? JSON.parse(localStorage.getItem("favoriteCard")) : []

const wishlistSlice = createSlice({
    name: "wishList",
    initialState: {
        wishList: cardsList,
    },
    reducers: {

        add: (state, action) => {
            state.wishList.push(action.payload);
            localStorage.setItem("favoriteCard", JSON.stringify(state.wishList))
        },
        remove: (state, action) => {
            const { id } = action.payload;
            state.wishList = state.wishList.filter((item) => item.id !== id);
            localStorage.setItem("favoriteCard", JSON.stringify(state.wishList))
        },
    },

})

export const { add, remove } = wishlistSlice.actions;
export default wishlistSlice.reducer;