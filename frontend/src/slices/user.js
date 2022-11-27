import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getFavorites = createAsyncThunk(
    "getFavorites",
    async (roomId, { dispatch, getState }) => {
        const state = getState()
        const token = selectToken(state)
        const rooms = state.room.rooms

        axios("/favorites", {
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then(({ data }) => {
                const favorites = data.map((favorite) => ({
                    roomId: favorite.id_object,
                    favoriteId: favorite.Id_favorite
                }))
                const resFavorites = []

                for (const favorite of favorites) {
                    const room = rooms.find(
                        (room) => favorite.roomId == room.id
                    )

                    if (room) {
                        resFavorites.push({
                            ...room,
                            favoriteId: favorite.favoriteId
                        })
                    }
                }

                dispatch(setFavoritesAction(resFavorites))
            })
            .catch(console.error)
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {},
        token: null,
        favorites: []
    },
    reducers: {
        setUserInfo(state, { payload }) {
            state.userInfo = payload
        },
        setToken(state, { payload }) {
            state.token = payload
        },
        setFavorites(state, { payload }) {
            state.favorites = payload
        }
    }
})

export const selectUserInfo = (state) => state.user.userInfo
export const selectToken = (state) => state.user.token
export const selectFavorites = (state) => state.user.favorites

export const {
    setToken: setTokenAction,
    setUserInfo: setUserInfoAction,
    setFavorites: setFavoritesAction
} = userSlice.actions

export default userSlice.reducer
