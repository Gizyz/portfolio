import React, { useRef } from "react";
import TopBar from './TopBar'
import appWindow from "@/app/types";


export default function Window(props: appWindow) {
    const position = useRef({ x: 100, y: 100 });

    return (
        <div key={props.id} className="absolute">
            <div className="absolute "
                style={{
                    top: `${props.yPos}px`,
                    left: `${props.xPos}px`,
                    width: `${props.width}px`,
                    height: `${props.height}px`
                }}>
                <TopBar />
                {props.content}

            </div>
        </div >
    )
}
