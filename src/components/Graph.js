import React from "react";
import ForceGraph2D from "react-force-graph-2d";

export default function Graph({ graphData }) {
    return (
        <div style={{ width: "100%", height: "800px" }}>
        <ForceGraph2D
            graphData={graphData}
            nodeAutoColorBy="type"
            nodeLabel="title"
            linkDirectionalArrowLength={6}
            linkDirectionalArrowRelPos={1}
            nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.title;
            const fontSize = 12 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.fillStyle = node.color || "blue";
            ctx.beginPath();
            ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.fillText(label, node.x + 6, node.y + 6);
            }}
        />
        </div>
    );
}
