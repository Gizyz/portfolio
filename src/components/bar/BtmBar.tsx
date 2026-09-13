import AppLaunch from './AppLaunch';
import appCards from '@/data/apps.json';

export default function BtmBar() {

    function handleAppClick(appName: String) {
        console.log(appName);
    }
    return (
        <div className="w-full h-15 bg-blue-400 flex justify-between">
            <div className='flex'>
                <div className='h-full bg-green-400 flex items-center justify-center p-2 w-20'>
                    <img></img>
                    <p className=''>start</p>
                </div>
                {appCards.map((app) =>
                    <AppLaunch key={app.id} icon={app.icon} name={app.name} onClick={(e: MouseEvent) => (handleAppClick(app.name))} />
                )}
            </div>

            <div className='flex items-center justify-center'>
                <p> 12:00 pm</p>
            </div>

        </div>
    )
}
