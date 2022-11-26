import { fabric } from "fabric"
import Bmstu from "./bmstu"
import canvas from "../components/MainCanvas/MainCanvas"
import store from "../store"
import {
    setContentAction,
    setCoordsAction,
    setOpenAction
} from "../slices/popover"

export default class Room {
    constructor({ x, y, width = 25, height = 25, number, name }) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.number = new fabric.Text(String(number), {
            fontSize: 10,
            originX: "center",
            originY: "center"
        })

        this.room = new fabric.Rect({
            fill: "orange",
            left: 0,
            top: 0,
            width,
            height,
            originX: "center",
            originY: "center"
        })

        this.group = new fabric.Group([this.room, this.number], {
            selectable: false,
            zoomX: 1,
            zoomY: 1,
            left: x,
            top: y
        })

        this.group.name = name

        window.Bmstu = Bmstu
        window.canvas = canvas
        this.group.on("mouseup", (e) => {
            console.log("click")
            const centerX = window.innerWidth / 2
            const centerY = window.innerHeight / 2

            const viewportLeft = canvas.viewportTransform[4]
            const viewportTop = canvas.viewportTransform[5]
            const pointer = e.pointer

            // canvas.setZoom(6)
            // canvas.viewportTransform[4] = centerX - pointer.x
            // canvas.viewportTransform[5] = centerY - pointer.y
            console.log(canvas)
            console.log(canvas.viewportTransform)
            canvas.absolutePan({
                x: pointer.x - centerX,
                y: pointer.y - centerY
            })
            // canvas.zoomToPoint({ x: centerX, y: centerY }, 4)

            const target = e.target

            store.dispatch(setOpenAction({ name: "clickPopover", open: true }))
            store.dispatch(
                setContentAction({ name: "clickPopover", content: "asd" })
            )

            canvas.renderAll()
            // store.dispatch(
            //     setCoordsAction({
            //         name: "clickPopover",
            //         coords: {
            //             left:
            //                 viewportLeft +
            //                 target.left * zoomX +
            //                 (target.width / 2) * zoomX,
            //             top: viewportTop + target.top * zoomY
            //         }
            //     })
            // )
        })
    }

    add() {
        console.log(Bmstu.group.zoomX)
        canvas.add(this.group)
    }
}
