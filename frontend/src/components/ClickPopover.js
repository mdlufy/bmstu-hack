import React from "react"
import styled from "styled-components"
import { useClickPopover } from "../slices/popover"

export default function ClickPopover() {
    const clickPopover = useClickPopover()

    console.log(clickPopover)
    return clickPopover.isOpen ? (
        <Container
            left={clickPopover.coords.left}
            top={clickPopover.coords.top}
        >
            {clickPopover.content}
        </Container>
    ) : null
}

const Container = styled.div`
    position: fixed;
    left: ${(props) => props.left}px;
    top: ${(props) => props.top - 10}px;
    transform: translateX(-50%) translateY(-100%);
    z-index: 10;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 10px;
`
