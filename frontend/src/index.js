import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { fabric } from "fabric"
import canvas from "./canvas"
import Room from "./room"

console.log(canvas)

const strokeWidth = 1
const stroke = "#D3D1E2"

var points = [
    {
        x: 0,
        y: 0
    },
    {
        x: 35,
        y: 635
    },
    {
        x: 55,
        y: 661
    },
    {
        x: 290,
        y: 661
    },
    {
        x: 285,
        y: 604
    },
    {
        x: 100,
        y: 584
    },
    {
        x: 86,
        y: 0
    }
]
var polygon = new fabric.Polygon(points, {
    left: 0,
    top: 25,
    fill: "#D3D1E2",
    strokeWidth,
    stroke,
    scaleX: 1,
    scaleY: 1,
    objectCaching: false,
    transparentCorners: false,
    cornerColor: "blue"
})

var polygon2 = new fabric.Polygon(
    [
        {
            x: 0,
            y: 0
        },
        {
            x: 304,
            y: -13
        },
        {
            x: 321,
            y: 305
        },
        {
            x: 260,
            y: 308
        },
        {
            x: 248,
            y: 46
        },
        {
            x: 1,
            y: 50
        }
    ],
    {
        left: 91,
        top: 155,
        fill: "#D3D1E2",
        strokeWidth,
        stroke,
        scaleX: 1,
        scaleY: 1,
        objectCaching: false,
        transparentCorners: false,
        cornerColor: "blue"
    }
)

var polygon3 = new fabric.Polygon(
    [
        {
            x: 0,
            y: 0
        },
        {
            x: 48,
            y: 637
        },
        {
            x: -150,
            y: 637
        },
        {
            x: -150,
            y: 709
        },
        {
            x: 112,
            y: 722
        },
        {
            x: 128,
            y: 703
        },
        {
            x: 84,
            y: -6
        }
    ],
    {
        left: 707,
        top: 6,
        fill: "#D3D1E2",
        strokeWidth,
        stroke,
        scaleX: 1,
        scaleY: 1,
        objectCaching: false,
        transparentCorners: false,
        cornerColor: "blue"
    }
)

var polygon4 = new fabric.Polygon(
    [
        {
            x: 2,
            y: 0
        },
        {
            x: -300,
            y: 13
        },
        {
            x: -284,
            y: 320
        },
        {
            x: -223,
            y: 325
        },
        {
            x: -231,
            y: 121
        },
        {
            x: 11,
            y: 107
        }
    ],
    {
        left: 565,
        top: 160,
        fill: "#D3D1E2",
        strokeWidth,
        stroke,
        scaleX: 1,
        scaleY: 1,
        objectCaching: false,
        transparentCorners: false,
        cornerColor: "blue"
    }
)

var polygon5 = new fabric.Polygon(
    [
        {
            x: 0,
            y: 0
        },
        {
            x: 61,
            y: 0
        },
        {
            x: 61,
            y: -28
        },
        {
            x: 126,
            y: -28
        },
        {
            x: 126,
            y: -4
        },
        {
            x: 168,
            y: -4
        },
        {
            x: 172,
            y: 78
        },
        {
            x: 5,
            y: 87
        }
    ],
    {
        left: 401,
        top: 224,
        fill: "#D3D1E2",
        strokeWidth,
        stroke,
        scaleX: 1,
        scaleY: 1,
        objectCaching: false,
        transparentCorners: false,
        cornerColor: "blue"
    }
)

var polygon6 = new fabric.Polygon(
    [
        {
            x: 0,
            y: 0
        },
        {
            x: 168,
            y: 5
        },
        {
            x: 170,
            y: 104
        },
        {
            x: 140,
            y: 104
        },
        {
            x: 140,
            y: 125
        },
        {
            x: 32,
            y: 125
        },
        {
            x: 32,
            y: 99
        },
        {
            x: 0,
            y: 99
        }
    ],
    {
        left: 412,
        top: 474,
        fill: "#D3D1E2",
        strokeWidth,
        stroke,
        scaleX: 1,
        scaleY: 1,
        objectCaching: false,
        transparentCorners: false,
        cornerColor: "blue"
    }
)

var circle1 = new fabric.Circle({
    radius: 140,
    left: 180,
    top: 455,
    skewY: 7,
    scaleX: 1.5,
    startAngle: 180,
    endAngle: 270,
    stroke: "#D3D1E2",
    strokeWidth: 50,
    fill: "white"
})

var circle2 = new fabric.Circle({
    radius: 145,
    left: 325,
    top: 480,
    scaleX: 1.5,
    startAngle: 270,
    endAngle: 360,
    stroke: "#D3D1E2",
    strokeWidth: 50,
    fill: "white"
})

canvas.add(polygon)
canvas.add(polygon2)
canvas.add(polygon3)
canvas.add(polygon4)
canvas.add(polygon5)
canvas.add(polygon6)
canvas.add(circle1)
canvas.add(circle2)

new Room({
    c: canvas,
    x: 10,
    y: 10,
    number: 222
}).add()

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
