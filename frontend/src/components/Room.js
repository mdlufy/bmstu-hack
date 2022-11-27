import React, { useState } from "react"
import styled from "styled-components"
import { Popover, Tooltip } from "antd"

export default function Room(props) {
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)

    const zoomToRoom = (e) => {
        props.zoomToRoom(e, props)
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
                <Container {...props} onClick={zoomToRoom}>
                    {props.number}
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
