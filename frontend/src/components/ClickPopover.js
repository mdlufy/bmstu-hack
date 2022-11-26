import React from "react"
import styled from "styled-components"
import { useClickPopover } from "../slices/popover"

export default function ClickPopover() {
    const clickPopover = useClickPopover()

    console.log(clickPopover)
    return clickPopover.isOpen ? (
        <Container>{clickPopover.content}</Container>
    ) : null
}

const Container = styled.div`
    position: fixed;
    left: 50%;
    top: 50px;
    transform: translateX(-50%) translateY(-100%);
    z-index: 10;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 10px;
`
