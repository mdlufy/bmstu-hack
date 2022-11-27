import { Button, Form, Input, message, Modal } from "antd"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { selectToken, setTokenAction } from "../slices/user"
import { useState } from "react"
import styled from "styled-components"
import { useForm } from "antd/es/form/Form"
import useSelection from "antd/es/table/hooks/useSelection"

export default function Signin() {
    const dispatch = useDispatch()
    const [form] = useForm()
    const token = useSelector(selectToken)

    const onFinish = () => {
        axios
            .post("/login", form.getFieldsValue())
            .then(({ data }) => {
                console.log(data)
                dispatch(setTokenAction(data.token))
                localStorage.setItem("token", data.token)
                setIsModalOpen(false)
                message.success("Вход выполнен")
            })
            .catch(() => {
                dispatch(setTokenAction("123"))
                message.error("Не удалось войти")
            })
    }

    const onFinishFailed = () => {}

    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <Container>
            {token && (
                <Button
                    className={"auth-button"}
                    type="primary"
                    onClick={showModal}
                >
                    Войти
                </Button>
            )}
            <Modal
                title="Авторизация"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    form={form}
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Логин"
                        name="name"
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
            </Modal>
        </Container>
    )
}

export const Container = styled.div`
    position: absolute;
    right: 70px;
    bottom: 10px;
    z-index: 20;
`
