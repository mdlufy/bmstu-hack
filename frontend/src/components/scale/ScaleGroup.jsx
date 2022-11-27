import { Button } from "antd"
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
        dispatch(setScaleAction(scale + 0.2))
    }

    function decrease() {
        dispatch(setScaleAction(scale - 0.2))
    }

    return (
        <div className="scale">
            <span>
                <Button onClick={increase} style={{ marginRight: 10 }}>
                    +
                </Button>
                <Button onClick={decrease}>-</Button>
            </span>
        </div>
    )
}

export default ScaleGroup
