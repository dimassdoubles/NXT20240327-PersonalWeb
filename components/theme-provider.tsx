"use client"

import {ThemeProvider as NextThemesProvider} from "next-themes"
import React from "react"

interface ThemeProviderProps {
    children: React.ReactNode,
    attribute: string,
    defaultTheme: string,
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  return (
    <>
      <NextThemesProvider attribute={props.attribute} defaultTheme={props.defaultTheme}>
        {props.children}
      </NextThemesProvider>
    </>
  )
}

export default ThemeProvider