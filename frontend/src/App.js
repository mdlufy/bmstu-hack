import "./App.css"
import ScaleGroup from "./components/scale/ScaleGroup"
import ClickPopover from "./components/ClickPopover"
import BmstuFundament from "./components/BmstuFundament"
import { useEffect, useState } from "react"
import bmstu, { setTranslateAction, useBmstuEl } from "./slices/bmstu"
import { useDispatch } from "react-redux"
import BmstuMenu from "./components/BmstuMenu"
import { setRoomsAction } from "./slices/rooms"
import axios from "axios"
import BmstuFeedback from "./components/BmstuFeedback"
import Signin from "./components/Signin";

const roomsFallback = JSON.parse(
    '[{"id":2,"number":"201","floor":2,"description":"Кафедра БМТ-1. Учебно-нвучная лаборатория методов автоматизированного распознавания биомедицинских изображений и сигналов",' +
    '"typeId":1,"left":10,"top":112,"width":30,"height":20},{"id":4,"number":"203","floor":2,"description":"Учебная аудитория","typeId":1,"left":1,"top":1,"width":30,"height":20},{"id":6,"number":"205","floor":2,"description":"Кафедра РК-9 Секция: Системы и методы управления жизненным циклом","typeId":1,"left":1,"top":1,"width":30,"height":20},{"id":8,"number":"207","floor":2,"description":"Кафедра МТ-1","typeId":1,"left":1,"top":1,"width":30,"height":20},{"id":10,"number":"209","floor":2,"description":"Учебная аудитория","typeId":1,"left":1,"top":1,"width":30,"height":20},{"id":14,"number":"214","floor":2,"description":"Библиотека. Отдел технической обработки","typeId":1,"left":1,"top":1,"width":30,"height":20},{"id":15,"number":"313","floor":2,"description":"Читальный зал и абонемент научной литературы. Читальный зал старших курсов","typeId":1,"left":1,"top":1,"width":30,"height":20},{"id":16,"number":"215","floor":2,"description":"Неизвестная аудитория","typeId":1,"left":1,"top":1,"width":30,"height":20},{"id":13,"number":"212","floor":2,"description":"Отдел Компьютерных технологий. Дисплейный класс","typeId":1,"left":10,"top":168,"width":25,"height":12},{"id":1,"number":"200","floor":2,"description":"Кафедра БМТ-1","typeId":1,"left":10,"top":70,"width":25,"height":12},{"id":11,"number":"210а","floor":2,"description":"Компьютерная лаборатория №5. Компьютерный класс №501","typeId":1,"left":10,"top":140,"width":25,"height":12},{"id":3,"number":"202","floor":2,"description":"НОЦ. Фотоника и ИК-техника","typeId":1,"left":10,"top":84,"width":25,"height":12},{"id":7,"number":"206","floor":2,"description":"Учебная Аудитория","typeId":1,"left":10,"top":112,"width":25,"height":12},{"id":12,"number":"210","floor":2,"description":"Компьютерная лаборатория №5. Включая компьютерный класс №501 и №502","typeId":1,"left":10,"top":154,"width":25,"height":12},{"id":5,"number":"204","floor":2,"description":"Учебная аудитория","typeId":1,"left":10,"top":98,"width":25,"height":12},' +
    '{"id":9,"number":"208","floor":2,"description":"Кафедра: Промышленный дизайн","typeId":1,"left":20,"top":126,"width":25,"height":12}]'
)

function App() {
    const dispatch = useDispatch()
    const [isGrab, setIsGrab] = useState(false)
    const [isMove, setIsMove] = useState(false)

    const rooms = roomsFallback

    rooms.push({
        left: 100,
        top: 100,
        width: 20,
        height: 20,
        floor: 2,
        number: '222'
    })

    console.log(JSON.stringify(rooms))
    setRoomsAction(rooms)
    console.log(rooms)



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

        console.log("down")
        const bmstuFundament = document.querySelector(".bmstu-fundament")
        bmstuFundament.baseLeft = e.clientX
        bmstuFundament.baseTop = e.clientY
        bmstuFundament.style.transition = "0s"
        setIsMove(true)
    }

    const mousemove = (e) => {
        if (!isMove) return
        console.log("move")

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
            <Signin />
            <BmstuFeedback />
            <BmstuMenu />
            <ClickPopover />
            <BmstuFundament />
            <ScaleGroup />
        </div>
    )
}

export default App
