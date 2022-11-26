import { fabric } from "fabric"

export default class Room {
    constructor({ c, x, y, width = 50, height = 50, number }) {
        this.c = c
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.number = new fabric.Text(String(number), {
            fontSize: 15,
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
            left: x,
            top: y
        })
    }

    add() {
        this.c.add(this.group)
    }
}
