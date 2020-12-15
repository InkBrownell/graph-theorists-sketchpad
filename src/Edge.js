import React from "react";
import './Edge.css'

function Edge(props) {
    const {edge, onMouseDown} = props
    const [start, end] = edge.endpoints
    const [x1, y1] = start.position
    const [x2, y2] = end.position

    const rem2px = (rem) => {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    }

    return (
        <path
            onMouseDown={onMouseDown}
            className='Edge-Path'
            fill='transparent'
            stroke='black'
            strokeWidth='6'

            d={
                `M ${x1 - rem2px(10 - 1)} ${y1}
                 L ${x2 - rem2px(10 - 1)} ${y2}`
            }
        />
    )


}

export default Edge;
