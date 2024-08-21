import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { logout } from '../lib/action/user.actions'

const Footer = ({user, type = "desktop"} : FooterProps) => {
    const router = useRouter();
    const handleLogout = async() => {
        const loggedOut = await logout();
        if(loggedOut !== undefined) router.push('/sign-in');

        console.log('Logout')
    }
  return (
    <footer className='footer'>
        <div className={type==='desktop'? 'footer_name' : 'footer_name-mobile'}>
            <p className='text-xl font-bold text-gray-700'>
                {user?.name[0]}

                

            </p>
        </div>
        <div className={type==='desktop'? 'footer_email' : 'footer_email-mobile'}>
            <h2 className='text-14 font-semibold text-gray-700 truncate'>
                {user?.name} 
            </h2>
            <p className='text-gray-500 text-12 font-semibold'>
                {user?.email}
            </p>
        </div>
        <div className='footer_image' onClick={handleLogout}>
            <Image src='/icons/logout.svg' width={20} height={20} alt='Logout' />
        </div>
    </footer> 
  )
}

export default Footer