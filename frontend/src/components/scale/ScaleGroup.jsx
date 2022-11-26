import React from "react"
import { useDispatch } from "react-redux"
import Bmstu from "../../objects/bmstu"
import { setScaleAction, useBmstuScale } from "../../slices/bmstu"
import canvas from "../MainCanvas/MainCanvas"
import "./styles.css"

function ScaleGroup() {
    const dispatch = useDispatch()
    const scale = useBmstuScale()

    function increase() {
        dispatch(setScaleAction(scale + 0.1))
    }

    function decrease() {
        dispatch(setScaleAction(scale - 0.1))
    }

    return (
        <div className="scale">
            <span>
                <button className="increase" onClick={() => increase()}>
                    +
                </button>
                <button className="decrease" onClick={() => decrease()}>
                    -
                </button>
            </span>
        </div>
    )
}

export default ScaleGroup
