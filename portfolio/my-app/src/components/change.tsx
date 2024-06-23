"use client"

import * as React from "react"
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"


const ModeToggle = () => {

  const {theme, setTheme } = useTheme()
  console.log(theme)

  
  const ChangeTheme =() =>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
    <div onClick={() => ChangeTheme()}>   
    {useTheme().theme === 'light' ? 
    <SunIcon  className="w-full"></SunIcon> 
    : 
    <MoonIcon className="w-full"></MoonIcon> }
    </div>
    </>
  )
};

export default ModeToggle;