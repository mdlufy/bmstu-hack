import { Button } from "antd"
import styled from "styled-components"

export default function BmstuUser() {
    return (
        <Container>
            <Button>Выход</Button>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    right: 100px;
    bottom: 10px;
`
