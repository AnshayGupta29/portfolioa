"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? (localStorage.getItem("theme") === "dark" ? "dark" : "light") : "light",
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)
      document.documentElement.classList.toggle("dark", theme === "dark")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/30"
    >
      {theme === "light" ? <Moon className="h-4 w-4 text-purple-500" /> : <Sun className="h-4 w-4 text-yellow-400" />}
    </Button>
  )
}
