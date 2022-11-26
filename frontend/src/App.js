import "./App.css"
import ScaleGroup from "./components/scale/ScaleGroup"
import ClickPopover from "./components/ClickPopover"
import BmstuFundament from "./components/BmstuFundament"
import { useEffect, useState } from "react"
import bmstu, { setTranslateAction, useBmstuEl } from "./slices/bmstu"
import { useDispatch } from "react-redux"

function App() {
    const dispatch = useDispatch()
    const [isGrab, setIsGrab] = useState(false)
    const [isMove, setIsMove] = useState(false)

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.code === "Space") {
                setIsGrab(true)

                document.documentElement.style.cursor = "grab"
            }
        })

        window.addEventListener("keyup", (e) => {
            if (e.code === "Space") {
                mouseup()
                setIsGrab(false)
                setIsMove(false)

                document.documentElement.style.cursor = ""
            }
        })
    })

    const mousedown = (e) => {
        if (!isGrab) return

        const bmstuFundament = document.querySelector(".bmstu-fundament")
        bmstuFundament.baseLeft = e.clientX
        bmstuFundament.baseTop = e.clientY
        bmstuFundament.style.transition = "0s"
        setIsMove(true)
    }

    const mousemove = (e) => {
        if (!isMove) return

        const bmstuFundament = document.querySelector(".bmstu-fundament")
        const diffLeft = bmstuFundament.baseLeft - e.clientX
        const diffTop = bmstuFundament.baseTop - e.clientY
        const left =
            parseFloat(bmstuFundament.style.left) ||
            parseFloat(getComputedStyle(bmstuFundament).left)
        const top =
            parseFloat(bmstuFundament.style.top) ||
            parseFloat(getComputedStyle(bmstuFundament).top)

        bmstuFundament.style.left = left - diffLeft + "px"
        bmstuFundament.style.top = top - diffTop + "px"

        bmstuFundament.baseLeft = e.clientX
        bmstuFundament.baseTop = e.clientY
    }

    const mouseup = () => {
        if (!isGrab) return

        const bmstuFundament = document.querySelector(".bmstu-fundament")

        if (!bmstuFundament.style.left) return

        console.log("up")
        bmstuFundament.style.transition = ""
        console.log(bmstuFundament.style.left)

        dispatch(
            setTranslateAction({
                x:
                    parseFloat(bmstuFundament.style.left) ||
                    parseFloat(getComputedStyle(bmstuFundament)).left,
                y:
                    parseFloat(bmstuFundament.style.top) ||
                    parseFloat(getComputedStyle(bmstuFundament)).top
            })
        )

        bmstuFundament.style.left = ""
        bmstuFundament.style.top = ""

        setIsMove(false)
    }

    return (
        <div
            className="App"
            onMouseMove={mousemove}
            onMouseDown={mousedown}
            onMouseUp={mouseup}
        >
            <ClickPopover />
            <BmstuFundament />
            <ScaleGroup />
        </div>
    )
}

export default App
