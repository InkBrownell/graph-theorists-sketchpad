import React, {useRef, useState} from 'react';
import './Field.css';

import VertexComponent from "./Vertex"
import ClickAction from "./features/clickAction/ClickAction";

function Field(props) {
    const {clickAction} = props
    const [dragging, setDragging] = useState(null);
    const [vertices, setVertices] = useState([]);
    const [edges, setEdges] = useState([])
    const root = useRef()

    const addVertex = (newVertex) => {
        const copy = [...vertices];
        copy.push(newVertex)
        setVertices(copy);
    }

    const onMouseDown = (event) => {
        if (clickAction === ClickAction.ADD_VERTEX) {
            const x = event.clientX;
            const y = event.clientY;
            addVertex({position: [x, y]});
        }
    }

    const onVertexMouseDown = (event, index) => {
        event.stopPropagation()
        if (clickAction === ClickAction.SELECT) {
            startDrag(event, index)
        }
    }

    const moveVertex = (index, newPosition) => {
        const copy = [...vertices]
        copy[index].position = newPosition
        setVertices(copy);
    }

    const startDrag = (event, index) => {
        event.stopPropagation()
        setDragging(index)
    }

    const stopDrag = (event) => {
        event.preventDefault()
        setDragging(null)
    }

    const onMouseMove = (event) => {
        if (dragging !== null) {
            event.preventDefault()
            moveVertex(dragging, [event.clientX, event.clientY])
        }
    }

    return (
        <div
            className="Field"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            ref={root}
        >
            {vertices.map((vertex, index) => {
                return (<VertexComponent
                    vertex={vertex}
                    key={index}
                    onMouseDown={(event) => onVertexMouseDown(event, index)}
                />)
            })}
        </div>
    );
}

export default Field;
