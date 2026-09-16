import React, { useRef } from "react";
import TopBar from './TopBar'
import appWindow from "@/app/types";

type WindowProps = {
    id: number
    name: string
    icon: string
    description: string
    xPos: number
    yPos: number
    height: number
    width: number
    children?: React.ReactNode
    index: number
    click: (event: React.MouseEvent, operation: number, index: number) => void
}

export default function Window({
    id,
    name,
    icon,
    description,
    xPos,
    yPos,
    height,
    width,
    children,
    index,
    click,
}: WindowProps) {
    return (
        <div key={index}

            className={`select-none absolute border rounded-2smm bg-amber-50 z-${id}`}
            style={{
                top: `${yPos}px`,
                left: `${xPos}px`,
                width: `${width}px`,
                height: `${height}px`,
            }
            }>
            <TopBar icon={icon} name={name} index={index} click={click} />

            <div className="h-full" onMouseDown={(e) => click(e, -2, index)}>{children}</div>

        </div>
    )
}
