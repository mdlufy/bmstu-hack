import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Popover } from "antd"
import { CloseOutlined } from "@ant-design/icons"
import eb from "../eb"
import stairs from "../assets/stairs.png"

export default function Room(props) {
    const { room } = props
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    const roomRef = useRef(null)

    const roomFocus = (roomId) => {
        if (roomId == room.id) {
            hide()
            setTimeout(() => setClicked(true), 500)
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
            title={room.title}
            trigger="hover"
            color="white"
            open={hovered}
            onOpenChange={handleHoverChange}
            overlayInnerStyle={{ color: "black" }}
        >
            <Popover
                content={
                    <div>
                        {room.description}
                        <CloseIcon onClick={hide} />
                    </div>
                }
                title={room.title}
                trigger="click"
                open={clicked}
                onOpenChange={handleClickChange}
                overlayInnerStyle={{ paddingTop: 25, maxWidth: 300 }}
            >
                <Container {...room} onClick={zoomToRoom} ref={roomRef}>
                    {room.number === "Stairs" ? (
                        <img src={stairs} />
                    ) : (
                        room.number
                    )}
                </Container>
            </Popover>
        </Popover>
    )
}

const CloseIcon = styled(CloseOutlined)`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: ${(props) => props.left}px;
    top: ${(props) => props.top}px;
    width: ${(props) => props.width || 25}px;
    height: ${(props) => props.height || 12}px;
    background: orange;
    font-size: 10px;
    cursor: pointer;

    img {
        width: 10px;
    }
`
