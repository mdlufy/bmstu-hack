import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const bmstuSlice = createSlice({
    name: "bmstu",
    initialState: {
        bmstuEl: null,
        scale: 1,
        translate: { x: 0, y: 0 },
        origin: { x: 0, y: 0 }
    },
    reducers: {
        setBmstuEl(state, { payload }) {
            state.bmstuEl = payload
        },
        setScale(state, { payload }) {
            state.scale = payload
        },
        setTranslate(state, { payload }) {
            state.translate = payload
        },
        setOrigin(state, { payload }) {
            state.origin = payload
        }
    }
})

export const useBmstuEl = () => useSelector((state) => state.bmstu.bmstuEl)
export const useBmstuScale = () => useSelector((state) => state.bmstu.scale)
export const useBmstuTranslate = () =>
    useSelector((state) => state.bmstu.translate)
export const useBmstuOrigin = () => useSelector((state) => state.bmstu.origin)

export const {
    setBmstuEl: setBmstuElAction,
    setScale: setScaleAction,
    setTranslate: setTranslateAction,
    setOrigin: setOriginAction
} = bmstuSlice.actions

export default bmstuSlice.reducer
