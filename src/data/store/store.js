import {configureStore} from "@reduxjs/toolkit";
import estateReducer from "./estateReducer";
import reviewsReducer from "./reviewsReducer";

let store = configureStore({
    reducer:{
        estate:estateReducer,
        reviews:reviewsReducer
    }
})

export default store;