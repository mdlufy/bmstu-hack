import { combineReducers, configureStore } from "@reduxjs/toolkit"
import bmstuReducer from "./slices/bmstu"
import popoverReducer from "./slices/popover"

export default configureStore({
    reducer: combineReducers({
        popover: popoverReducer,
        bmstu: bmstuReducer
    })
})
