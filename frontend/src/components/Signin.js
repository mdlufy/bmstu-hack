import { Button, Form, Input, message } from "antd"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setTokenAction } from "../slices/user"

export default function Signin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = () => {
        axios("/signin")
            .then(() => {
                message.success("Вход выполнен")
                navigate("/")
            })
            .catch(() => {
                dispatch(setTokenAction("123"))
                message.error("Не удалось войти")
            })
    }

    const onFinishFailed = () => {}

    return (
        <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Логин"
                name="login"
                rules={[{ required: true, message: "Заполните поле" }]}
            >
                <Input size="large" />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: "Заполните поле" }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}
