import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSideBar from '@/components/RightSideBar'
import React from 'react'
import { get } from 'http'
import { getLoggedInUser } from '@/lib/action/user.actions'

const Home = async() => {
    const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                type = "greeting"
                title = "Welcome to Dash"
                description = "Access your account information, make payments, and more from the comfort of your home."
                user= {loggedIn?.name || 'Guest'} 
                subtext='Get started by selecting an option below.'
                />
                <TotalBalanceBox 
                accounts={[]}
                totalBanks={0}
                totalCurrentBalance={123234.23}
                />
            </header>
        </div>
        <RightSideBar
            user = {loggedIn}
            transșactions = {[]}
            banks = {[{currentBalance : 2323.43}, {}]}
        />
         
    </section>
  )
}

export default Home