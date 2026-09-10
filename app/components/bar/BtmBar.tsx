import AppLaunch from './AppLaunch'

const appCards = [{
    icon: 'favicon.ico',
    name: 'About me',
}, {
    icon: 'favicon.ico',
    name: 'react',
}, {
    icon: 'favicon.ico',
    name: 'react',
}, {
    icon: 'favicon.ico',
    name: 'react',
}, {
    icon: 'favicon.ico',
    name: 'react',
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
                    < AppLaunch icon={app.icon} name={app.name} onClick={(e: MouseEvent) => (console.log(e))} />
                )}
            </div>

            <div className='flex items-center justify-center'>
                <p> 12:00 pm</p>
            </div>

        </div>
    )
}
