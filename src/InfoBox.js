import React from "react";
import './InfoBox.css'

function InfoBox(props) {
    const {numVertices, numEdges, numComponents, graphTypes} = props
    return (
      <div className='InfoBox'>
          <div>Vertices: <strong>{numVertices}</strong></div>
          <div>Edges: <strong>{numEdges}</strong></div>
          <div>Components: <strong>{numComponents}</strong></div>
      </div>
    );
}

export default InfoBox;