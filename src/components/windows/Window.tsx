import React, { useRef } from "react";
type Props = {
    active: Boolean,
    xPos: Number,
    yPos: Number,

    
}

export default function Window() {
    const position = useRef({ x: 100, y: 100 });

    return (
        <div className="">
        </div>
    )
}
