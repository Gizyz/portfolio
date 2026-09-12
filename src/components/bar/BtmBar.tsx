import AppLaunch from './AppLaunch';

const appCards = [{
    icon: '/favicon.ico',
    name: 'About me',
    id: 1
}, {
    icon: '/favicon.ico',
    name: 'react',
    id: 2
}, {
    icon: '/favicon.ico',
    name: 'react',
    id: 3
}, {
    icon: '/favicon.ico',
    name: 'react',
    id: 4
}, {
    icon: '/favicon.ico',
    name: 'react',
    id: 5
},]

export default function BtmBar() {


    return (
        <div className="w-full h-15 bg-blue-400 flex justify-between">
            <div className='flex'>
                <div className='h-full bg-green-400 flex items-center justify-center p-2'>
                    <img></img>
                    <p className=''>start</p>
                </div>
                {appCards.map((app) =>
                    <AppLaunch key={app.id} icon={app.icon} name={app.name} onClick={(e: MouseEvent) => (console.log(e))} />
                )}
            </div>

            <div className='flex items-center justify-center'>
                <p> 12:00 pm</p>
            </div>

        </div>
    )
}
