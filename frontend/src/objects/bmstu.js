import { fabric } from "fabric"
import canvas from "../components/MainCanvas/MainCanvas"
import {
    leftColumn,
    leftRow,
    leftArc,
    rightColumn,
    rightRow,
    rightArc,
    centerDownRect,
    centerUpReact
} from "./bmstu-parts"

export default class Bmstu {
    static init() {
        this.group = new fabric.Group([], {
            selectable: false,
            zoomX: 1,
            zoomY: 1
        })
        this.group.name = "bmstu"
        console.log(this.group.zoomX)

        this.group.addWithUpdate(leftColumn)
        this.group.addWithUpdate(leftRow)
        this.group.addWithUpdate(leftArc)
        this.group.addWithUpdate(rightColumn)
        this.group.addWithUpdate(rightRow)
        this.group.addWithUpdate(rightArc)
        this.group.addWithUpdate(centerDownRect)
        this.group.addWithUpdate(centerUpReact)

        canvas.add(this.group)
        console.log(this.group.zoomX)

        canvas.on("mouse:wheel", function (opt) {
            var delta = opt.e.deltaY
            var zoom = canvas.getZoom()
            zoom *= 0.999 ** delta
            if (zoom > 20) zoom = 20
            if (zoom < 0.01) zoom = 0.01
            canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom)
            opt.e.preventDefault()
            opt.e.stopPropagation()
        })
    }

    static scaleMinus() {
        this.group.set({
            scaleY: this.group.scaleX * 0.9,
            scaleX: this.group.scaleX * 0.9
        })
    }

    static scalePlus() {
        this.group.set({
            scaleY: this.group.scaleX * 1.1,
            scaleX: this.group.scaleX * 1.1
        })
    }
}
