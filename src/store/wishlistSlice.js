import {createSlice} from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: "wishList",
    initialState: {
        wishList : [],
    },
    reducers : {
        add : (state,action) => {
            state.wishList.push(action.payload);
        },
        remove : (state,action) => {
            state.wishList = state.wishList.filter((item) => item.id !== action.payload);
        },
    },
    
})

export const {add,remove} = wishlistSlice.actions;
export default wishlistSlice.reducer;