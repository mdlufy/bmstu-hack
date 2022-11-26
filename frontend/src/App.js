import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import axios from "axios"
import { Layout } from "antd"
import AppHeader from "./components/Header"
import AuthCheck from "./components/AuthCheck"
import { useDispatch } from "react-redux"
import { setTokenAction } from "./slices/user"
import Auth from "./pages/Auth"

axios.defaults.baseURL = "http://localhost:8080"

function App() {
    const dispatch = useDispatch()
    const [isInit, setIsInit] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")

        dispatch(setTokenAction(token))
        setIsInit(true)
    }, [])

    return isInit ? (
        <BrowserRouter basename="/">
            <Layout>
                <Layout.Header className="header">
                    <div className="logo" />
                    <AppHeader />
                </Layout.Header>
                <Layout.Content>
                    <Routes>
                        <Route path="/auth" element={<Auth />}></Route>
                    </Routes>
                </Layout.Content>
            </Layout>
        </BrowserRouter>
    ) : null

}

export default App
