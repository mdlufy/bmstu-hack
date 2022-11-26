import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const popoverSlice = createSlice({
    name: "popover",
    initialState: {
        clickPopover: {
            isOpen: false,
            content: "",
            coords: null
        },
        hoverPopover: {
            isOpen: false,
            content: "",
            coords: null
        }
    },
    reducers: {
        setOpen(state, { payload }) {
            state[payload.name].isOpen = payload.open
        },
        setContent(state, { payload }) {
            state[payload.name].content = payload.content
        },
        setCoords(state, { payload }) {
            state[payload.name].coords = payload.coords
        }
    }
})

export const useClickPopover = () =>
    useSelector((state) => state.popover.clickPopover)
export const useHoverPopover = () =>
    useSelector((state) => state.popover.hoverPopover)

export const {
    setOpen: setOpenAction,
    setContent: setContentAction,
    setCoords: setCoordsAction
} = popoverSlice.actions

export default popoverSlice.reducer
