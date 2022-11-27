import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const roomSlice = createSlice({
    name: "room",
    initialState: {
        rooms: [],
        level: 2
    },
    reducers: {
        setRooms(state, { payload }) {
            state.rooms = payload
        },
        setLevel(state, { payload }) {
            state.level = payload
        }
    }
})

export const useRooms = () => useSelector((state) => state.room.rooms)
export const useLevel = () => useSelector((state) => state.room.level)

export const { setRooms: setRoomsAction, setLevel: setLevelAction } =
    roomSlice.actions

export default roomSlice.reducer
