import { List, message, Typography } from "antd"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { DeleteOutlined } from "@ant-design/icons"
import { getFavorites, selectFavorites, selectToken } from "../slices/user"
import axios from "axios"

export default function Favorites() {
    const dispatch = useDispatch()
    const favorites = useSelector(selectFavorites)
    const token = useSelector(selectToken)
    console.log(favorites, "favo")

    const deleteFavorite = (id) => {
        console.log("delete", id)
        axios
            .delete(`/favorite/${id}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            .then(() => {
                dispatch(getFavorites())
            })
            .catch(() => {
                message.error("Не удалось удалить(")
            })
    }

    return favorites.length ? (
        <List
            dataSource={favorites.map((item) => (
                <FavoriteItem>
                    {item.title}{" "}
                    <DeleteOutlined
                        onClick={deleteFavorite.bind(null, item.favoriteId)}
                    />
                </FavoriteItem>
            ))}
            bordered
            renderItem={(item) => <StyledListItem>{item}</StyledListItem>}
        ></List>
    ) : null
}

const FavoriteItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
const StyledListItem = styled(List.Item)`
    background: white;
    // border-radius: 5px;
`
