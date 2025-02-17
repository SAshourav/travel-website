"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const { language, t } = useLanguage()

  const footerLinks = {
    company: [
      { label: language === "en" ? "About" : "আমাদের সম্পর্কে", href: "/about" },
      { label: language === "en" ? "Careers" : "কর্মসংস্থান", href: "/careers" },
      { label: language === "en" ? "Press" : "প্রেস", href: "/press" },
    ],
    support: [
      { label: language === "en" ? "Contact" : "যোগাযোগ", href: "/contact" },
      { label: language === "en" ? "FAQ" : "সাধারণ প্রশ্ন", href: "/faq" },
      { label: language === "en" ? "Safety" : "নিরাপত্তা", href: "/safety" },
    ],
    legal: [
      { label: language === "en" ? "Privacy" : "গোপনীয়তা নীতি", href: "/privacy" },
      { label: language === "en" ? "Terms" : "শর্তাবলী", href: "/terms" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-lg font-semibold mb-4">WanderRoots</h2>
            <p className="text-sm text-muted-foreground">
              {language === "en" ? "Discover the Uncharted, Your Way" : "আপনার মতো করে অনাবিষ্কৃত বাংলাদেশ খুঁজুন"}
            </p>
          </motion.div>
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-lg font-semibold mb-4">
                {language === "en"
                  ? category.charAt(0).toUpperCase() + category.slice(1)
                  : category === "company"
                    ? "কোম্পানি"
                    : category === "support"
                      ? "সহায়তা"
                      : "আইনি"}
              </h2>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 WanderRoots. {language === "en" ? "All rights reserved." : "সর্বস্বত্ব সংরক্ষিত।"}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

