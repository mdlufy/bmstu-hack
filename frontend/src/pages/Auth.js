import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectToken } from "../slices/user"
import { Segmented } from "antd"
import styled from "styled-components"
import { useState } from "react"
import Signin from "../components/Signin"

export default function Auth() {
    const token = useSelector(selectToken)
    const [isSignin, setIsSignin] = useState(true)


    if (token) return <Navigate to="/" />

    return (
        <Container>
            <FormContainer>{isSignin ? <Signin /> : <Signup />}</FormContainer>
        </Container>
    )
}

const Container = styled.div`
    padding: 20px;

    .ant-segmented {
        margin-bottom: 30px;
    }
`

const FormContainer = styled.div`
    .ant-form-item-label {
        width: 150px;
        text-align: right;
      
    }

    .ant-btn {
        margin-left: 150px;
    }
`
