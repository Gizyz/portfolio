import Image from 'next/image';

type BarProps = {
    name: string,
    icon: string,
    index: number,
    click: (event: React.MouseEvent, operation: number, index: number) => (void)

}

export default function TopBar({ name, icon, index, click }: BarProps) {
    return (
        <div className="w-full h-6 bg-blue-200 flex justify-between border"
            onMouseUp={(e) => click(e, -1, index)} onMouseMove={(e) => click(e, -3, index)}>

            <div className="w-full flex flex-row" onMouseDown={(e) => click(e, -2, index)}>
                <Image src={icon}
                    alt={name}
                    width={10}
                    height={10}
                    priority
                    className="object-contain"></Image>
                <h1>{name}</h1>
            </ div>
            <div className="flex flex-row">
                <div className="w-3 bg-blue-500 flex items-center justify-center" onMouseDown={(e) => click(e, 3, index)} >
                    <span> - </span>
                </div>
                <div className="w-3 bg-blue-500 flex items-center justify-center" onMouseDown={(e) => click(e, 2, index)}>
                    <span> &#9633; </span>
                </div>
                <div className="w-3 bg-red-500 flex items-center justify-center" onMouseDown={(e) => click(e, 1, index)}>
                    <span> X </span>
                </div>
            </div>
        </div >
    )
}