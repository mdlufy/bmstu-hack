import React from "react";
import "./styles.css";

function ScaleGroup({ increase, decrease }) {
    return (
        <div className="scale">
            <span>
                <button className="increase" onClick={increase}>
                    +
                </button>
                <button className="decrease" onClick={decrease}>
                    -
                </button>
            </span>
        </div>
    );
}

export default ScaleGroup;
