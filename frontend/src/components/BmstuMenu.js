import React from "react"
import { Dropdown, Input, Select, Space } from "antd"
import { useState } from "react"
import styled from "styled-components"
import { setLevelAction, useLevel, useRooms } from "../slices/rooms"
import eb from "../eb"
import { useDispatch } from "react-redux"

export default function BmstuMenu() {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState("")
    const [open, setOpen] = useState(false)
    const [dropdownMenu, setDropdownMenu] = useState([])
    const rooms = useRooms()
    const level = useLevel()

    const searchFunction = (room, value) => {
        const numberCondition =
            room.number !== "Stairs" &&
            new RegExp(value, "i").test(room.number) &&
            value
        const titleCondition = new RegExp(value, "i").test(room.title) && value
        const descriptionCondition =
            new RegExp(value, "i").test(room.description) && value

        return numberCondition || titleCondition || descriptionCondition
    }

    const changeSearch = (e) => {
        const value = e.target.value.trim()

        setSearchValue(value)

        const founded = rooms.filter((room) => searchFunction(room, value))

        const newDropdownMenu = founded.map((room) => ({
            key: room.id,
            label: (
                <span>
                    <b>{room.number}</b> {room.title}
                </span>
            )
        }))

        console.log(newDropdownMenu)

        if (newDropdownMenu.length) {
            setDropdownMenu(newDropdownMenu)
            setOpen(true)
        } else {
            setOpen(false)
            setTimeout(() => {
                setDropdownMenu(newDropdownMenu)
            }, 400)
        }
    }

    const dropdownItemClick = (e) => {
        const roomId = e.key
        const room = rooms.find((room) => room.id == roomId)

        if (room) {
            dispatchRoomFocus(roomId)
            setSearchValue(room.number)
            setOpen(false)
        }
    }

    const onSearch = () => {
        const room = rooms.filter((room) =>
            searchFunction(room, searchValue)
        )[0]

        if (room) {
            dispatchRoomFocus(room.id)
            setSearchValue(room.number)
            setOpen(false)
        }
    }

    const dispatchRoomFocus = (id) => {
        console.log("dispath", id)
        eb.emit("roomFocus", id)
    }

    const changeLevel = (level) => {
        dispatch(setLevelAction(level))
    }

    return (
        <Container>
            <Space direction="vertical">
                <StyledDropdown
                    menu={{ items: dropdownMenu, onClick: dropdownItemClick }}
                    open={open}
                >
                    <StyledSearch
                        onChange={changeSearch}
                        value={searchValue}
                        onSearch={onSearch}
                    />
                </StyledDropdown>
                <Select defaultValue={2} onChange={changeLevel} value={level}>
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                </Select>
            </Space>
        </Container>
    )
}

const StyledDropdown = styled(Dropdown)`
    max-height: 500px;
`

const StyledSearch = styled(Input.Search)``

const FloorLabel = styled.div`
    height: 100%;
    background: white;
`

const Container = styled.div`
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 20;
`
