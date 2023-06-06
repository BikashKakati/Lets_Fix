import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
    reducer:{
        wishList: wishlistSlice,
    },
})
export default store;