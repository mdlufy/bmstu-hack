import React from "react";
import Bmstu from "../../objects/bmstu";
import canvas from "../MainCanvas/MainCanvas";
import "./styles.css";

function ScaleGroup({ increase, decrease }) {
    function increase() {
        Bmstu.scalePlus();
        canvas.renderAll();

    }

    function decrease() {
        Bmstu.scaleMinus();
        canvas.renderAll();
    }

    return (
        <div className="scale">
            <span>
                <button className="increase" onClick={() => increase()}>
                    +
                </button>
                <button className="decrease" onClick={() => decrease()}>
                    -
                </button>
            </span>
        </div>
    );
}

export default ScaleGroup;
