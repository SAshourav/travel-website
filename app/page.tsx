"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, Compass, Users, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export default function Home() {
  const { language, t, formatCurrency } = useLanguage()

  const destinations = [
    {
      name: language === "en" ? "Bandarban" : "বান্দরবান",
      description: language === "en" ? "Discover hidden trails" : "লুকায়িত ট্রেইল আবিষ্কার করুন",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: language === "en" ? "Cox's Bazar" : "কক্সবাজার",
      description: language === "en" ? "World's longest sea beach" : "বিশ্বের দীর্ঘতম সমুদ্র সৈকত",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: language === "en" ? "Sundarbans" : "সুন্দরবন",
      description: language === "en" ? "Explore mangrove forests" : "ম্যানগ্রোভ বন অন্বেষণ করুন",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const features = [
    {
      icon: Compass,
      title: language === "en" ? "Local Expertise" : "স্থানীয় দক্ষতা",
      description: language === "en" ? "Connect with verified local guides" : "যাচাইকৃত স্থানীয় গাইডদের সাথে যোগাযোগ করুন",
    },
    {
      icon: Users,
      title: language === "en" ? "Unique Experiences" : "অনন্য অভিজ্ঞতা",
      description:
        language === "en" ? "Discover hidden gems and authentic culture" : "অজানা গন্তব্য এবং প্রকৃত সংস্কৃতি আবিষ্কার করুন",
    },
    {
      icon: Calendar,
      title: language === "en" ? "Customized Itineraries" : "কাস্টমাইজড ভ্রমণসূচি",
      description: language === "en" ? "Plan your perfect adventure" : "আপনার নিখুঁত অ্যাডভেঞ্চার পরিকল্পনা করুন",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-20">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                {t("hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground">{t("hero.subtitle")}</p>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input className="pl-9" placeholder={t("hero.searchPlaceholder")} />
                </div>
                <Button type="submit">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Travel illustration"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 -z-10" />
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">{t("popularDestinations.title")}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  width={600}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                  <p className="text-sm text-gray-300">{destination.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">{t("features.title")}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border rounded-lg p-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t("cta.title")}</h2>
            <p className="text-lg mb-8">{t("cta.subtitle")}</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/create-itinerary">{t("cta.button")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

