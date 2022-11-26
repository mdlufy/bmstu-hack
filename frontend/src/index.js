import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import store from "./store"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import Room from "./objects/room"
import Bmstu from "./objects/bmstu"

Bmstu.init()

new Room({
    x: 10,
    y: 40,
    number: 222,
    name: "222"
}).add()

new Room({
    x: 10,
    y: 70,
    number: 223,
    name: "223"
}).add()

new Room({
    x: 12,
    y: 100,
    number: 224,
    name: "224"
}).add()

new Room({
    x: 55,
    y: 40,
    number: 225,
    name: "225"
}).add()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
