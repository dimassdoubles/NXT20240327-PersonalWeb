"use client"

import { ReactNode } from "react"
import CountUp from "react-countup"

interface BadgeProps {
    containerStyles: string, 
    icon: ReactNode, 
    endCountNum: number,
    endCountText: string,
    badgeText: string,
}

const Badge = (props: BadgeProps) => {
    return (
        <div className={`badge ${props.containerStyles}`}>
            <div className="text-3xl text-primary">{props.icon}</div>
            <div>
                <div>
                    <CountUp end={props.endCountNum} delay={0.5} duration={0.4} useEasing={true}/>
                    {props.endCountText}
                </div>
            </div>
        </div>
    )
}

export default Badge
