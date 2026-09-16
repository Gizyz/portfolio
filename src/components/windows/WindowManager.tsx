import React, { useEffect } from 'react';
import Window from './Window';
import appWindow from '@/app/types';
import Portfolio from '@/app/Portfolio/portfolio';
import { Dispatch, SetStateAction, useState } from "react";


const compList = [
    <Portfolio />
];


export default function WindowManager(props: { height: number, width: number, openAppList: appWindow[], setWinList: Dispatch<SetStateAction<appWindow[]>> }) {
    const [moving, setMoving] = useState(false);
    const [mousePos, setMousePos] = useState({})

    function focus(index: number,) {
        console.log("focus: ", index);
        let app = props.openAppList[index];
        let newList = [...props.openAppList];
        newList.splice(index, 1);
        newList.push(app);
        props.setWinList(newList);
    }
    const handleClick = (e: React.MouseEvent, operation: number, index: number) => {
        switch (operation) {
            // moving
            case -3: {
                if (moving) {
                    focus(index)
                    let app = props.openAppList[index];
                    app.xPos += e.movementX;
                    app.yPos += e.movementY;
                    let newList = [...props.openAppList];
                    newList.splice(index, 1);
                    newList.push(app);
                    props.setWinList(newList);
                }
                break;
            }
            // mouse down
            case -2: {
                setMoving(true)
                focus(index);
                break;
            }
            // mouse up
            case -1: {
                setMoving(false);
                break;
            }
            case 1: {
                console.log("Closing", props.openAppList[index].name);

                const newList = [...props.openAppList];
                newList.splice(index, 1)
                props.setWinList(newList);
                break;
            } case 2: {
                console.log("Full Scren", props.openAppList[index].name);
                break;
            } case 3: {
                console.log("Minimising", props.openAppList[index].name);
                break;
            }
        }
    }



    return (
        <div className='top-0 left-0 absolute w-full h-full'>
            {props.openAppList.map((win, i) =>
                <Window key={i} {...win} children={compList[0]} index={i} click={handleClick} />
            )}
        </div >
    )
}