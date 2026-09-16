'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import BtmBar from "@/components/bar/BtmBar";
import AppsContainer from "./AppsContainer";
import WindowManager from '../windows/WindowManager'
import appWindow from '@/app/types';
import apps from '@/data/apps.json';
import { Console } from 'console';

export default function Desktop() {
    const [appWindows, setAppWindows] = useState<appWindow[]>([]);
    const [desktopSize, setDesktopSize] = useState({ width: 100, height: 100 });

    const handleResize = () => {
        setDesktopSize({ width: window.innerWidth, height: window.innerHeight });
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleAppLaunch = (appId: number) => {
        const app = apps[appId];
        let openApp: appWindow = {
            id: app.id,
            name: app.name,
            icon: app.icon,
            description: app.description,
            xPos: appId * 5,
            yPos: appId * 5,
            height: 300,
            width: 400
        }
        setAppWindows([...appWindows, openApp]);
        console.log(openApp);
    }

    return (
        <main className="bg-gray-200 w-full h-full">
            <Image
                src='/blissXp.jpg'
                alt=""
                width={2560}
                height={1440}
                priority
                className="object-cover w-full h-full absolute z-0 select-none"
            />
            <AppsContainer height={desktopSize.height} width={desktopSize.width} onClick={handleAppLaunch} />
            <WindowManager height={desktopSize.height} width={desktopSize.width} openAppList={appWindows} setWinList={setAppWindows} />
            <div className="z-10 absolute bottom-0 w-full">
                <BtmBar onClick={handleAppLaunch} />
            </div>
        </main>
    )
}