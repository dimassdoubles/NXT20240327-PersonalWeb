"use client"

import Link from "next/link"
import { ReactNode } from "react"
import {
    RiYoutubeFill,
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookFill,
    RiInstagramFill,
} from "react-icons/ri"

interface SocialIcon {
    path: string, 
    component: ReactNode
}

const icons: SocialIcon[] = [
    {
        path: "/",
        component: <RiYoutubeFill/>
    },
    {
        path: "/",
        component: <RiLinkedinFill/>
    },
    {
        path: "/",
        component: <RiGithubFill/>
    },
    {
        path: "/",
        component: <RiFacebookFill/>
    },
    {
        path: "/",
        component: <RiInstagramFill/>
    },
]

interface SocialsProps {
    contianerStyles?: string |"", 
    iconStyles?: string | "",
}

const Socials = (props: SocialsProps) => {
    return (
        <div className={props.contianerStyles}>
            {icons.map((icon, index) => {
              return (
                <Link href={icon.path} key={index}>
                  <div className={props.iconStyles}>{icon.component}</div>
                </Link>
              )
            })}
        </div>
    )
}

export default Socials
