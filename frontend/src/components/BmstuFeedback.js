import { Button, Form, Input, message, Modal, Space } from "antd"
import { useForm } from "antd/es/form/Form"
import axios from "axios"
import { useState } from "react"
import styled from "styled-components"

export default function BmstuFeedback() {
    const [open, setOpen] = useState(false)
    const [form] = useForm()

    const submitForm = () => {
        const fields = form.getFieldsValue()

        axios
            .post("/feedback/", { data: fields })
            .then((res) => {
                console.log(res)
                message.success("Сообщение успешно отправлено, спасибо)")
            })
            .catch((err) => {
                console.log("errrr")
                message.error(err.message)
            })
        console.log(fields)
    }

    return (
        <Container>
            <Button type="primary" onClick={() => setOpen(true)}>
                Фидбэк
            </Button>
            <Modal
                open={open}
                onCancel={() => setOpen(false)}
                footer={
                    <Button type="primary" onClick={submitForm}>
                        Отправить
                    </Button>
                }
            >
                <Form form={form}>
                    <Form.Item name={"email"}>
                        <Input
                            placeholder="Email"
                            style={{
                                marginTop: 25
                            }}
                        />
                    </Form.Item>
                    <Form.Item name={"message"}>
                        <Input.TextArea placeholder="Сообщение"></Input.TextArea>
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
