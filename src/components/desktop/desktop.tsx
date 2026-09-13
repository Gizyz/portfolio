'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import BtmBar from "@/components/bar/BtmBar";
import AppsContainer from "./AppsContainer";
import WindowManager from '../windows/WindowManager'
import appWindow from '@/app/types';

export default function Desktop() {
    const [appWindows, setAppWindows] = useState([])
    const [windowSize, setWindowSize] = useState({ width: 100, height: 100 });

    const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            <AppsContainer height={windowSize.height} width={windowSize.width} />
            <WindowManager height={windowSize.height} width={windowSize.width} windowList={appWindows} />
            <div className="z-1 absolute bottom-0 w-full">
                <BtmBar />
            </div>
        </main>
    )
}