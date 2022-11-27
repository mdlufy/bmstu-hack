import { Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { selectToken, setFavoritesAction, setTokenAction } from "../slices/user"

export default function BmstuUser() {
    const dispatch = useDispatch()
    const token = useSelector(selectToken)

    const logout = () => {
        console.log("logout")
        dispatch(setTokenAction(null))
        dispatch(setFavoritesAction([]))
        localStorage.setItem("token", null)
    }

    return (
        <Container>
            {token && (
                <Button type="primary" onClick={logout}>
                    Выход
                </Button>
            )}
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    right: 200px;
    bottom: 10px;
    z-index: 20;
`
