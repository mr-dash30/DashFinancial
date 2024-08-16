'use client'

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCountUp = ({
    amount
}: { amount: number }) => {
    return (
        <div className='w-full'><CountUp
            end={amount}
            duration={1.5}
            decimal='.'
            decimals={2}
            separator=','
            prefix='CA$'
        /></div>
    )
}

export default AnimatedCountUp