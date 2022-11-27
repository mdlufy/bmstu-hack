import React, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import {
    useBmstuTranslate,
    useBmstuScale,
    setScaleAction,
    setTranslateAction,
    useBmstuOrigin,
    setOriginAction
} from "../slices/bmstu"
import { setLevelAction, useLevel, useRooms } from "../slices/rooms"
import BmstuFundamentImage from "./BmstuFundamentImage"
import Room from "./Room"
import eb from "../eb"

export default function BmstuFundament() {
    const dispatch = useDispatch()
    const bmstuRef = useRef(null)
    const scale = useBmstuScale()
    const translate = useBmstuTranslate()
    const origin = useBmstuOrigin()
    const rooms = useRooms()
    const level = useLevel()

    const zoomToRoom = (room) => {
        const originX = room.left
        const originY = room.top
        const newLeft = window.innerWidth / 2 - room.left
        const newTop = window.innerHeight / 2 - room.top
        console.log(translate, "translate")

        console.log(originX, originY, "origin")
        console.log(newLeft, newTop, "new")
        // el.style.transformOrigin = `${originX}px ${originY}px`
        // el.style.transform = `scale(2) translateX(${newLeft}px) translateY(${newTop}px)`
        // el.style.left = newLeft + "px"
        // el.style.top = newTop + "px"

        dispatch(setScaleAction(2))
        dispatch(setTranslateAction({ x: newLeft, y: newTop }))
        dispatch(setOriginAction({ x: originX, y: originY }))
    }

    const roomFocus = (roomId) => {
        const room = rooms.find((room) => room.id == roomId)

        if (room) {
            dispatch(setLevelAction(room.floor))
            zoomToRoom(room)
        }
    }

    useEffect(() => {
        eb.on("roomFocus", roomFocus)

        return () => eb.off("roomFocus", roomFocus)
    })

    const roomsForLevel = rooms.filter((room) => room.floor == level)

    return (
        <Container
            ref={bmstuRef}
            scale={scale}
            translate={translate}
            origin={origin}
            className="bmstu-fundament"
        >
            <BmstuFundamentImage />
            {roomsForLevel.map((room) => (
                <Room room={room} zoomToRoom={zoomToRoom} />
            ))}
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
