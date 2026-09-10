import React from "react";

type Props = {
    icon: string,
    name: string,
    onClick: Function
}

export default function AppLaunch({
    icon,
    name,
    onClick
}: Props) {

    return (
        <div className="h-full flex-col flex items-center justify-center hover:bg-blue-600 p-2">
            <img className='h-10 w-auto' src={icon} title={name} />
            <span></span>
        </div>
    )
}
