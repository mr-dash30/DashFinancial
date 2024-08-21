import React from 'react'
import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/action/user.actions'

const SignUp = async() => {
  const loggedUser = await getLoggedInUser();
  return (
    <section className='flex-center size-full max-sm:px-6'>
    <AuthForm type={"sign-up"}/>
    
  </section>
  )
}

export default SignUp