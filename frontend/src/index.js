import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { fabric } from "fabric"
import canvas from "./canvas"

console.log(canvas)

var points = [
    {
        x: 3,
        y: 4
    },
    {
        x: 16,
        y: 3
    },
    {
        x: 30,
        y: 5
    },
    {
        x: 25,
        y: 55
    },
    {
        x: 19,
        y: 44
    },
    {
        x: 15,
        y: 30
    },
    {
        x: 15,
        y: 55
    },
    {
        x: 9,
        y: 55
    },
    {
        x: 6,
        y: 53
    },
    {
        x: -2,
        y: 55
    },
    {
        x: -4,
        y: 40
    },
    {
        x: 0,
        y: 20
    }
]
var polygon = new fabric.Polygon(points, {
    left: 100,
    top: 50,
    fill: "#D81B60",
    strokeWidth: 4,
    stroke: "green",
    scaleX: 4,
    scaleY: 4,
    objectCaching: false,
    transparentCorners: false,
    cornerColor: "blue"
})

canvas.add(polygon)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
