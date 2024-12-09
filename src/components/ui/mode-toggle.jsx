"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (   
    <div>
      <div className="cursor-pointer dark:hidden" onClick={() => setTheme("dark")}>
        <Sun className="h-[22px] w-[22px]  transition-all" />
      </div>   
      <div className="cursor-pointer hidden dark:block rotate-0" onClick={() => setTheme("light")}>
        <Moon className="h-[22px] w-[22px]  transition-all " />
      </div> 
    </div>  
  )
}
