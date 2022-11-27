import React from "react"
import { Dropdown, Input } from "antd"
import { useState } from "react"
import styled from "styled-components"
import { useRooms } from "../slices/rooms"
import eb from "../eb"

export default function BmstuMenu() {
    const [searchValue, setSearchValue] = useState("")
    const [open, setOpen] = useState(false)
    const [dropdownMenu, setDropdownMenu] = useState([])
    const rooms = useRooms()

    const changeSearch = (e) => {
        const value = e.target.value.trim()

        setSearchValue(value)

        const founded = rooms.filter(
            (room) => new RegExp(value, "i").test(room.number) && value
        )

        const newDropdownMenu = founded.map((room) => ({
            key: room.id,
            label: room.number
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
        const room = rooms.filter(
            (room) =>
                new RegExp(searchValue, "i").test(room.number) && searchValue
        )[0]

        if (room) {
            setSearchValue(room.number)
            setOpen(false)
        }
    }

    const dispatchRoomFocus = (id) => {
        eb.emit("roomFocus", id)
    }

    return (
        <Container>
            <Dropdown
                menu={{ items: dropdownMenu, onClick: dropdownItemClick }}
                open={open}
            >
                <StyledSearch
                    onChange={changeSearch}
                    value={searchValue}
                    onSearch={onSearch}
                />
            </Dropdown>
        </Container>
    )
}

const StyledSearch = styled(Input.Search)``

const Container = styled.div`
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 20;
`
