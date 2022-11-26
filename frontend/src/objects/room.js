import { fabric } from "fabric"
import Bmstu from "./bmstu"
import canvas from "../canvas"
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
            fontSize: 12,
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
            left: x,
            top: y
        })

        this.group.name = name

        this.group.on("mouseup", (e) => {
            const pointer = e.pointer
            const target = e.target

            console.log("click", e)
            console.log(target)
            store.dispatch(setOpenAction({ name: "clickPopover", open: true }))
            store.dispatch(
                setContentAction({ name: "clickPopover", content: "asd" })
            )
            store.dispatch(
                setCoordsAction({
                    name: "clickPopover",
                    coords: {
                        left: target.left + target.width / 2,
                        top: target.top
                    }
                })
            )
        })
    }

    add() {
        canvas.add(this.group)
    }
}
