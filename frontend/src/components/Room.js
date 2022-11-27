import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Popover } from "antd"
import eb from "../eb"

export default function Room(props) {
    const { room } = props
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    const roomRef = useRef(null)

    const roomFocus = (roomId) => {
        console.log("roomfocus2", roomId, room.id)
        if (roomId == room.id) {
            props.zoomToRoom(room)
            hide()
            setTimeout(() => setClicked(true), 500)

            console.log("roomfocus")
        }
    }

    useEffect(() => {
        eb.on("roomFocus", roomFocus)

        return () => eb.off("roomFocus", roomFocus)
    }, [])

    const zoomToRoom = () => {
        props.zoomToRoom(room)
        hide()
        setTimeout(() => setClicked(true), 500)
    }

    const hide = () => {
        setClicked(false)
        setHovered(false)
    }

    const handleHoverChange = (open) => {
        console.log(open, "open changes")
        setHovered(open)
        setClicked(false)
    }

    const handleClickChange = (open) => {
        setHovered(false)
        if (open) return
        setClicked(open)
    }

    return (
        <Popover
            placement="top"
            title="test"
            trigger="hover"
            color="white"
            open={hovered}
            onOpenChange={handleHoverChange}
            overlayInnerStyle={{ color: "black" }}
        >
            <Popover
                content={
                    <div>
                        test
                        <a onClick={hide}>Close</a>
                    </div>
                }
                title="Click title"
                trigger="click"
                open={clicked}
                onOpenChange={handleClickChange}
            >
                <Container {...room} onClick={zoomToRoom} ref={roomRef}>
                    {room.number}
                </Container>
            </Popover>
        </Popover>
    )
}

const Container = styled.div`
    text-align: center;
    position: absolute;
    left: ${(props) => props.left}px;
    top: ${(props) => props.top}px;
    width: ${(props) => props.width || 25}px;
    height: ${(props) => props.height || 12}px;
    background: orange;
    font-size: 10px;
    cursor: pointer;
`
