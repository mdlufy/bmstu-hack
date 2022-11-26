import { combineReducers, configureStore } from "@reduxjs/toolkit"
import popoverReducer from "./slices/popover"

export default configureStore({
    reducer: combineReducers({
        popover: popoverReducer
    })
})
