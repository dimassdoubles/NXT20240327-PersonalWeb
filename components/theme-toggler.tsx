"use client"

import { variant } from "@/lib/utils"
import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

const toggleStyle = variant(
    "h-[1.2rem] w-[1.2rem] transition-all",
    {
        type: {
            light: "rotate-0 scale-100 dark:rotate-90 dark:scale-0",
            dark: "absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100",
        }
    }
)

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme()

    return (
        <Button variant="outline" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <SunIcon className={toggleStyle({type: "light"})}/>
            <MoonIcon className={toggleStyle({type: "dark"})}/>
        </Button>
    )
}

export default ThemeToggler
