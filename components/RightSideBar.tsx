
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BankCard from './BankCard'

const RightSideBar = (
    { user, transactions, banks }: RightSidebarProps
) => {
  return (
    <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner'>

            </div>
            <div className='profile'>
                <div className='profile-img'>
                    <span className='text-5xl font-bold text-blue-500'>{user?.name[0]}</span>
                </div>
                <div className='profile-details'>
                    <h2 className='profile-name'>{user?.name}</h2>
                    <p className='text-gray-500'>Account Holder</p>
                    <p className='profile-email mt-2'>{user?.email}</p>

                </div>
            </div>
                    
                
        </section> 
        <section className='banks'>
            <div className='flex w-full justify-between'>
                <h2 className='text-xl font-bold'>Banks</h2>
                <Link href='/' className='flex gap-2'>
                    <Image src='/icons/plus.svg' width={20} height={20} alt='Add Bank' />
                    <h2 className='text-blue-500 text-14 font-semibold'>Add Bank</h2>
                </Link>
            </div>
            {
                banks?.length > 0 && (
                    <div className='relative flex flex-1 flex-col items-center justify-center  gap-5  bg-white rounded-lg '>
                        <div className='relative z-10'>
                            <BankCard 
                                key = {banks[0].$id}
                                account={banks[0]}
                                userName={user?.name}
                                showBalance={false}
                            />
                        </div>
                        {banks[1] && (
                            <div className='absolute z-0 right-0 top-8 w-[90%]'>
                                <BankCard 
                                    key = {banks[1].$id}
                                    account={banks[1]}
                                    userName={user?.name}
                                    showBalance={false}
                                />
                                </div>
                        )}
                    </div>
                )

            }
        </section>
    </aside>
  )
}

export default RightSideBar