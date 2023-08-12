import { FaUserGroup, FaMessage, FaClipboardList, FaUserPlus } from 'react-icons/fa6';


const NavBarButton = ({ icon, text }: { icon: JSX.Element, text: string }) => (
    <button className='flex items-center justify-center rounded-md cursor-pointer text-sm py-1 px-3 min-w-[70px] bg-lighter-highlight text-white border-none text-center gap-1'>
        {icon}
        <div>{text}</div>
    </button>
)

export default function Navbar(): JSX.Element {
    return (
        <>
            <div
                className='w-full h-16 flex justify-between items-center'
            >
                <h1 className='text-white m-0 py-3 text-xl font-semibold'>
                    <a href='/' className='flex items-center gap-1'>
                        <FaUserGroup />
                        PomoDuo
                    </a>
                </h1>
                <span className='flex items-center gap-2'>
                    <NavBarButton icon={<FaMessage />} text='Chat' />
                    <NavBarButton icon={<FaClipboardList />} text='Tasks' />
                    <NavBarButton icon={<FaUserPlus />} text='Invite' />
                </span>
            </div>
            <div className='bg-dark-highlight h-[1px] w-full mb-10'></div>
        </>
    )
}