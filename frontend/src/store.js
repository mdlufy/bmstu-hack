import { combineReducers, configureStore } from "@reduxjs/toolkit"
import bmstuReducer from "./slices/bmstu"
import popoverReducer from "./slices/popover"
import userReducer from "./slices/user"
import favoriteReducer from "./slices/favorites"
import roomReducer from "./slices/rooms"

export default configureStore({
    reducer: combineReducers({
        popover: popoverReducer,
        bmstu: bmstuReducer,
        user: userReducer,
        favorite: favoriteReducer,
        room: roomReducer
    })
})
