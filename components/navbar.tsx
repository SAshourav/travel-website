"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { href: "/destinations", labelEn: "Destinations", labelBn: "গন্তব্য" },
    { href: "/guides", labelEn: "Local Guides", labelBn: "স্থানীয় গাইড" },
    { href: "/packages", labelEn: "Tour Packages", labelBn: "ট্যুর প্যাকেজ" },
    { href: "/blog", labelEn: "Blog", labelBn: "ব্লগ" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-primary"
          >
            WanderRoots
          </motion.div>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {language === "en" ? item.labelEn : item.labelBn}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle />
          <Button asChild variant="default" className="animate-fade-left">
            <Link href="/create-itinerary">{language === "en" ? "Create Itinerary" : "ভ্রমণসূচি তৈরি করুন"}</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {language === "en" ? item.labelEn : item.labelBn}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

