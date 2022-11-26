import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import {
    useBmstuTranslate,
    useBmstuScale,
    setScaleAction,
    setTranslateAction,
    useBmstuOrigin,
    setOriginAction,
    setBmstuElAction
} from "../slices/bmstu"
import BmstuFundamentImage from "./BmstuFundamentImage"
import Room from "./Room"

export default function BmstuFundament() {
    const dispatch = useDispatch()
    const bmstuRef = useRef(null)
    const scale = useBmstuScale()
    const translate = useBmstuTranslate()
    const origin = useBmstuOrigin()

    const zoomToRoom = (e, { left, top }) => {
        console.log(e)
        const diffOriginX = 1970 / 4
        const diffOriginY = 1461 / 4
        const el = bmstuRef.current
        const room = e.target
        const originX = room.offsetLeft
        const originY = room.offsetTop
        const realLeft = e.clientX - translate.x
        const realTop = e.clientY - translate.y
        const newLeft = window.innerWidth / 2 - room.offsetLeft
        const newTop = window.innerHeight / 2 - room.offsetTop
        console.log(translate, "translate")

        console.log(originX, originY, "origin")
        console.log(realLeft, realTop, "real")
        console.log(newLeft, newTop, "new")
        // el.style.transformOrigin = `${originX}px ${originY}px`
        // el.style.transform = `scale(2) translateX(${newLeft}px) translateY(${newTop}px)`
        // el.style.left = newLeft + "px"
        // el.style.top = newTop + "px"

        dispatch(setScaleAction(2))
        dispatch(setTranslateAction({ x: newLeft, y: newTop }))
        dispatch(setOriginAction({ x: originX, y: originY }))
    }
    console.log("update", translate)

    return (
        <Container
            ref={bmstuRef}
            scale={scale}
            translate={translate}
            origin={origin}
            className="bmstu-fundament"
        >
            <BmstuFundamentImage />
            <Room left={10} top={70} content={200} zoomToRoom={zoomToRoom} />
            <Room left={200} top={200} content={200} zoomToRoom={zoomToRoom} />
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    left: ${(props) => props.translate.x}px;
    top: ${(props) => props.translate.y}px;
    transition: 0.3s;
    transform-origin: ${(props) => props.origin.x}px
        ${(props) => props.origin.y}px;
    transform: scale(${(props) => props.scale});
`
