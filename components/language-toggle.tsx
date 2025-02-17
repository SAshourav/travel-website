"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "en" ? "bn" : "en")}>
      {language === "en" ? "বাংলা" : "English"}
    </Button>
  )
}

