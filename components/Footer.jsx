import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <div className='h-[80px] p-4 flex flex-row justify-between bg-darkprimary'>
<Image src={"../soai.svg"} width={120} height={120} alt='soai'/>
<div  className='flex flex-row items-center  gap-4'>
  <Link href={"./"}>
  <Image src={"./mail.svg"} width={30} alt='mail' height={30}/>
  </Link>
  
  <Link href={"./"}>
  <Image src={"./tiktok.svg"} width={30} alt='mail' height={30}/>
  </Link>
  <Link href={"./"}>
  <Image src={"./Vector.svg"} width={30} alt='mail' height={30}/>
  </Link>
  <Link href={"./"}>
  <Image src={"./insta.svg"} width={30} alt='mail' height={30}/>
  </Link>
</div>
    </div>
  )
}

export default Footer