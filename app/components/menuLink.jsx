"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = ({item}) => {

  const pathname = usePathname()

  return (
    <Link href={item.path} className={`flex items-center gap-3 p-3 rounded
    hover:bg-[#4de81a] 
      ${pathname === item.path && 'bg-[#68e93d]'}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink