import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import { ModeToggle } from './ModeToggler'

function Header() {
  return (
    <header className='flex items-center justify-between'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image
            src="https://www.shareicon.net/data/128x128/2015/09/13/100506_dropbox_512x512.png"
            alt="logo"
            className=''
            height={40}
            width={40}
          />
        <h1 className='font-bold text-xl'>MY BOX </h1>
        </Link>
        <div className='flex space-x-2 px-5 '>
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