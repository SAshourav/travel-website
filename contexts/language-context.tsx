"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "bn"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  formatCurrency: (amount: number) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    "hero.title": "Discover the Uncharted, Your Way",
    "hero.subtitle": "Experience authentic local travel with verified guides and hidden gems across Bangladesh.",
    "hero.searchPlaceholder": "Where do you want to go?",
    "popularDestinations.title": "Popular Destinations",
    "features.title": "Why Choose WanderRoots",
    "cta.title": "Ready to Start Your Journey?",
    "cta.subtitle": "Create your custom itinerary today and explore Bangladesh your way.",
    "cta.button": "Create Your Itinerary",
    // Add more translations as needed
  },
  bn: {
    "hero.title": "আপনার মতো করে অনাবিষ্কৃত বাংলাদেশ খুঁজুন",
    "hero.subtitle": "যাচাইকৃত গাইড এবং অজানা গন্তব্যের মাধ্যমে বাংলাদেশের প্রকৃত স্থানীয় ভ্রমণের অভিজ্ঞতা নিন।",
    "hero.searchPlaceholder": "আপনি কোথায় যেতে চান?",
    "popularDestinations.title": "জনপ্রিয় গন্তব্য",
    "features.title": "কেন WanderRoots বেছে নেবেন",
    "cta.title": "আপনার যাত্রা শুরু করতে প্রস্তুত?",
    "cta.subtitle": "আজই আপনার কাস্টম ভ্রমণসূচি তৈরি করুন এবং আপনার মতো করে বাংলাদেশ ঘুরে দেখুন।",
    "cta.button": "আপনার ভ্রমণসূচি তৈরি করুন",
    // Add more translations as needed
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string) => {
    return translations[language][key] || key
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === "en" ? "en-BD" : "bn-BD", {
      style: "currency",
      currency: "BDT",
      currencyDisplay: "narrowSymbol",
    }).format(amount)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, formatCurrency }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

