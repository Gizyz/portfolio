import React from "react";
import Image from "next/image";

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
            <Image key={icon} className='h-10 w-auto' src={icon} title={name} alt={name} width={50}
                height={50}
                priority />
            <span></span>
        </div>
    )
}
