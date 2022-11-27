import { createSlice } from "@reduxjs/toolkit"

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favorites: []
    },
    reducers: {
        addFavorite(state, { payload }) {
            state.favorites.push(payload)
        },
        removeFavorite(state, { payload }) {}
    }
})

export const selectFavorites= (state) => state.favorite.favorites

export const { addFavorite: addFavoriteAction, removeFavorite: removeFavoriteAction } =
    favoriteSlice.actions

export default favoriteSlice.reducer
