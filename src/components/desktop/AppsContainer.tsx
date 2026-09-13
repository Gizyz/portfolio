import apps from "@/data/apps.json";
import Image from "next/image";
import appWindow from "@/app/types";

interface desktopApp {
    id: number,
    name: string,
    icon: string,
    component: string,
    description: string,
    xPos: number,
    yPos: number
}

export default function AppsContainer(props: { height: number, width: number, onClick: () => (void); }) {
    //Displays apps correctly on load
    let deskApps = function (apps: any[]): Array<desktopApp> {
        let list: Array<desktopApp> = [];
        let x: number = 0;
        let y: number = 0;

        for (let app of apps) {
            let newApp: desktopApp =
            {
                id: app.id,
                name: app.name,
                icon: app.icon,
                component: app.component,
                description: app.description,
                xPos: x * 90,
                yPos: y * 90
            }
            list.push(newApp);
            if (y * 90 < props.height - 200) {
                y++;
            } else {
                y = 0;
                x++;
            }
        }
        return list;
    };




    return (
        <div className="w-full h-full">
            {deskApps(apps).map((app: desktopApp) =>
                <div key={app.id}
                    className={"absolute z-1 bg-opacity-0 bg-blue-400/0 hover:bg-blue-400/50 h-20 w-20 flex flex-col justify-center items-center select-none rounded-sm"}
                    style={{
                        top: `${app.yPos}px`,
                        left: `${app.xPos}px`,
                    }}>
                    <Image
                        src={app.icon}
                        alt={app.name}
                        width={100}
                        height={100}
                        className="w-10 h-10"
                        priority />

                    <p className="text-white">{app.name}</p>
                </div>)
            }

        </div >
    )
}