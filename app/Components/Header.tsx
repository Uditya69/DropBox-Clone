import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import { ModeToggle } from './ModeToggler'

function Header() {
  return (
    <header className='flex items-center justify-between py-3 px-2'>
        <Link href='/' className='flex items-center space-x-4'>
          <Image
            src="https://www.shareicon.net/data/128x128/2015/11/08/668675_box_512x512.png"
            alt="logo"
            className='dark:invert '
            
            height={40}
            width={40}
          />
        <h1 className='font-bold text-xl'>MY BOX </h1>
        </Link>
        <div className='flex items-center justify-between space-x-5 px-5 '>
          <ModeToggle/>
          <UserButton afterSignOutUrl='/'/>
          <SignedOut>
            <SignInButton afterSignInUrl='/dashboard' mode='modal'/>
          </SignedOut>
        </div>
    </header>
  )
}

export default Header