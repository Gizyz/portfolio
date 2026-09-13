import Window from './Window';
import appWindow from '@/app/types';


export default function WindowManager(props: { height: number, width: number, windowList: appWindow[] }) {

    return (
        <div>
            {
                props.windowList.map((window) => {
                    <Window windowProps={window} />
                })
            }
        </div>
    )
}