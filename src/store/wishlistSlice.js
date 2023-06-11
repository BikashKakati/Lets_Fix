import {createSlice} from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: "wishList",
    initialState: {
        wishList : [],
    },
    reducers : {
        favoriteMovies : (state, action) =>{
           state.wishList = action.payload;
        },
        add : (state,action) => {
         state.wishList.push(action.payload);
        },
        remove : (state,action) => {
            const {id} = action.payload;
            state.wishList = state.wishList.filter((item) => item.id !== id);
        },
    },
    
})

export const {add,remove,favoriteMovies} = wishlistSlice.actions;
export default wishlistSlice.reducer;