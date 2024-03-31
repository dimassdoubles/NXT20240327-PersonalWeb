"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"


interface NavLink {
    path: string, 
    name: string,
}

const links: NavLink[] = [
    {path: "/", name: "home"},
    {path: "/projects", name: "my projects"},
    {path: "/contact", name: "contact"},
]

interface NavProps {
    containerStyles: string,
    linkStyles?: string | "",
    underlineStyles?: string | "",
}

const Nav: React.FC<NavProps> = (props) => {
    const path = usePathname()    


    return <nav className={props.containerStyles}>
        {links.map((link, index) => {
            return (
                <Link href={link.path} key={index} className={`capitalize ${props.linkStyles}`}>
                    {link.path === path && (
                        <motion.span 
                            initial={{y: "-100%"}} 
                            animate={{y: 0}}  
                            transition={{type: "tween"}}
                            layoutId="underline"
                            className={`${props.underlineStyles}`}
                            

                        />
                    )}
                    {link.name}
                </Link>
            )
        })}
    </nav>    
}

export default Nav 