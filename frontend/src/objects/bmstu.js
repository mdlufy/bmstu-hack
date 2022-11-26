import { fabric } from "fabric"
import canvas from "../canvas"
import {
    leftColumn,
    leftRow,
    leftArc,
    rightColumn,
    rightRow,
    rightArc
} from "./bmstu-parts"

export default class Bmstu {
    static init() {
        this.group = new fabric.Group()

        this.group.addWithUpdate(leftColumn)
        this.group.addWithUpdate(leftRow)
        this.group.addWithUpdate(leftArc)
        this.group.addWithUpdate(rightColumn)
        this.group.addWithUpdate(rightRow)
        this.group.addWithUpdate(rightArc)

        canvas.add(this.group)
    }

    static add(obj) {
        this.group.addWithUpdate(obj)
    }
}
