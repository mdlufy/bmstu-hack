import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import store from "./store"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
// import Room from "./objects/room"
// import Bmstu from "./objects/bmstu"
import axios from "axios"

axios.defaults.baseURL = "http://192.168.199.70:8080/api"

// axios("/objects/2")
//     .then(({ data }) => {
//         console.log(objects)
//         for (const object of objects) {
//           new Room()
//         }
//     })
//     .catch(console.error)

//192.168.199.70:8080/api/objects/2

// Bmstu.init()

// new Room({
//     x: 5,
//     y: 35,
//     width: 55,
//     height: 25,
//     number: "",
//     name: "hall"
// }).add()

// new Room({
//     x: 55,
//     y: 70,
//     height: 12,
//     number: 201,
//     name: "201"
// }).add()

// new Room({
//     x: 55,
//     y: 84,
//     height: 12,
//     number: 203,
//     name: "203"
// }).add()

// new Room({
//     x: 55,
//     y: 98,
//     height: 12,
//     number: 205,
//     name: "205"
// }).add()

// new Room({
//     x: 55,
//     y: 112,
//     height: 12,
//     number: 207,
//     name: "207"
// }).add()

// new Room({
//     x: 55,
//     y: 126,
//     height: 24,
//     number: 209,
//     name: "209"
// }).add()

// new Room({
//     x: 55,
//     y: 152,
//     height: 12,
//     number: 211,
//     name: "211"
// }).add()

// // left

// new Room({
//     x: 10,
//     y: 70,
//     height: 12,
//     number: 200,
//     name: "200"
// }).add()

// new Room({
//     x: 10,
//     y: 84,
//     height: 12,
//     number: 202,
//     name: "202"
// }).add()

// new Room({
//     x: 10,
//     y: 98,
//     height: 12,
//     number: 204,
//     name: "204"
// }).add()

// new Room({
//     x: 10,
//     y: 112,
//     height: 12,
//     number: 206,
//     name: "206"
// }).add()

// new Room({
//     x: 10,
//     y: 126,
//     height: 12,
//     number: 208,
//     name: "208"
// }).add()

// new Room({
//     x: 10,
//     y: 140,
//     height: 12,
//     number: "210a",
//     name: "210a"
// }).add()

// new Room({
//     x: 10,
//     y: 154,
//     height: 12,
//     number: 210,
//     name: "210"
// }).add()

// new Room({
//     x: 10,
//     y: 168,
//     height: 12,
//     number: 212,
//     name: "212"
// }).add()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
