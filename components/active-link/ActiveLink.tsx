'use client'

import Link from "next/link"
import styles from './ActiveLink.module.css'
import { usePathname } from "next/navigation";


interface Props {
    path: string;
    text: string;
}

const ActiveLink = ({path, text} : Props) => {

    const pathName = usePathname();
    console.log(pathName)

  return (
    
    <Link 

      className={ pathName === path ? styles.activeLink : styles.link }

      href={ path }>
        {text}
    </Link>
    
  )
}

export default ActiveLink
