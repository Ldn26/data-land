import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
    <div className='bg-darkprimary w-full py-2 px-4 h-[80px] flex justify-between items-center flex-row '>
      <Link href={"/"}>
        <Image src={'./logo.svg'} alt='logo' width={200} height={100} />
      </Link>
        <Link href={"/about"} className='flex items-center justify-center bg-[#1C605F] p-4 rounded-2xl'>
            <Image src={'./alert.svg'} alt='alert' width={30} height={30}/>
        </Link>
    </div>
  )
}

export default Header