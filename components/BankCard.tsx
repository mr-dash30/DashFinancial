import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatAmount } from '@/lib/utils'

const BankCard = ({
    account,
    userName,
    showBalance = true
}: CreditCardProps) => {
    return (
        <div className='flex flex-col'>
            <Link href="/" className='bank-card'>
                <div className='bank-card_content'>
                    <div>
                        <h1 className='text-xl font-bold text-white'>{account?.officialName || 'CIBC'}</h1>
                        <p className='font-ibm-plex-serif font-black text-white'>{formatAmount(account.currentBalance)}</p>
                    </div>
                    <article className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <h1 className='text-12 font-semibold text-white'>{userName}</h1>
                            <h2 className='text-12 font-semibold text-white'>◍◍ / ◍◍</h2>
                        </div>
                        <p className='text-14 font-semibold text-white tracking-[1.1px]'> ◍◍◍◍ ◍◍◍◍ ◍◍◍◍ <span className='text-16'>1234</span></p>

                    </article>

                </div>
                <div className='bank-card_icon pl-3'>
                    <Image src='/icons/payPass.svg' width={30} height={30} alt='payPass' />
                    <Image src='/icons/mastercard.svg' width={50} height={50} alt='mastercard' />
                </div>
                <Image src="/icons/lines.svg" width={316} height={316} alt='lines' className='absolute top-0 left-0' />


            </Link>
        </div>
    )
}

export default BankCard