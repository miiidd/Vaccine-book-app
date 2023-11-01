import Image from 'next/image'
import styles from './topMenu.module.css'
import TopMenuItem from './TopMenuItems'
import { getServerSession} from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'

export default async function TopMenu() {
    const session = await getServerSession(authOptions)

    return (
        <div className='h-12 bg-white fixed top-0 left-0 right-0 z-30 flex flex-row border-b border-gray-400'> 
        <div className="flex flex-row absolute left-0 h-full">
        {
            session? <Link href="/api/auth/signout">
                <div className='flex items-center px-2 py-4 text cyan-600 text-sm'>
                Sign-Out of {session.user?.name}</div></Link> 
            : <Link href="/api/auth/signin"><div className='flex items-center absolute left-0 h-full px-2 text cyan-600 text-sm'>Sign-In</div></Link>
        }
        <TopMenuItem title='My Booking' pageRef='/mybooking'/>
        </div>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo' width={0} height={0} sizes='100vh'/>
        
        </div>
    );
}