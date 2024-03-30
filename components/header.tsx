"use client"

// components
import { useEffect, useState } from "react"
import Logo from "./logo"
import MobileNav from "./mobile-nav"
import Nav from "./nav"
import ThemeToggler from "./theme-toggler"
import { usePathname } from "next/navigation"

const Header = () => {
    const [header, setHeader] = useState(false)
    const pathName = usePathname

    useEffect(() => {
      const scrollYPos = () => window.scrollY > 50 ? setHeader(true) : setHeader(false)

      window.addEventListener("scroll", scrollYPos)

      // remove event
      return () => window.removeEventListener("scroll", scrollYPos)
    })

    return (
     <header className="backdrop-filter backdrop-blur-lg bg-white dark:bg-[#020817] bg-opacity-70 dark:bg-opacity-70 sticky top-0 z-30 transition-all">
        <div className="container mx-auto">
         <div className="flex justify-between items-center">
          <Logo/> 

          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav 
              containerStyles="hidden xl:flex gap-x-8 items-center" 
              linkStyles="relative hover:text-primary transition-all" 
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav/>
            </div>
            
            <ThemeToggler/>

          </div>

         </div>
        </div>
     </header>
    )
}

export default Header