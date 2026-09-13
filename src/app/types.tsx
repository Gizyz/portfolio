export default interface appWindow {
    id: number
    xPos: Number,
    yPos: Number,
    height: Number,
    width: Number,
    name: String,
    description: String,
    icon: String,
    content: React.ReactNode,
}

