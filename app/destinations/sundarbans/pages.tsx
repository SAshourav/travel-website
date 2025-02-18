"use client"

import { Calendar } from "@/components/ui/calendar"
import Image from "next/image"
import { motion } from "framer-motion"
import { SailboatIcon as Boat, Camera, Bird, Map, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"

export default function SundarbansPage() {
  const { language, formatCurrency } = useLanguage()

  const content = {
    en: {
      title: "Sundarbans",
      subtitle: "World's Largest Mangrove Forest",
      description:
        "The Sundarbans, a UNESCO World Heritage site, is the world's largest mangrove forest and home to the majestic Royal Bengal Tiger. Experience the unique ecosystem where land meets sea, spot diverse wildlife, and explore the mysterious mangrove forests by boat.",
      attractions: [
        {
          title: "Mangrove Forest",
          description: "Dense mangrove ecosystem with unique wildlife",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Tiger Territory",
          description: "Home to the Royal Bengal Tiger",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "River Channels",
          description: "Intricate network of waterways",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      activities: [
        {
          icon: Boat,
          title: "River Cruises",
          description: "Explore waterways by boat",
        },
        {
          icon: Camera,
          title: "Wildlife Photography",
          description: "Capture unique species",
        },
        {
          icon: Bird,
          title: "Bird Watching",
          description: "Spot rare bird species",
        },
      ],
      tours: [
        {
          name: "3-Day Tiger Trail",
          description: "Complete Sundarbans experience with wildlife spotting",
          price: 25000,
          duration: "3 days",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "2-Day Forest Explorer",
          description: "Perfect weekend gateway to mangrove forest",
          price: 18000,
          duration: "2 days",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Day Trip Adventure",
          description: "Quick forest and wildlife experience",
          price: 8000,
          duration: "1 day",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
      practicalInfo: {
        bestTime: [
          "November to February - Best weather",
          "Avoid monsoon season (June-September)",
          "Early morning for wildlife spotting",
        ],
        permits: ["Forest permit required", "Tour operator handles permissions", "Carry valid ID proof"],
        safety: [
          "Always follow guide instructions",
          "Stay in groups during forest visits",
          "Maintain distance from wildlife",
        ],
      },
    },
    bn: {
      title: "সুন্দরবন",
      subtitle: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন",
      description:
        "ইউনেস্কো ওয়ার্ল্ড হেরিটেজ সাইট সুন্দরবন বিশ্বের বৃহত্তম ম্যানগ্রোভ বন এবং রয়্যাল বেঙ্গল টাইগারের আবাসস্থল। স্থল ও জলের সঙ্গমস্থলে অবস্থিত এই অনন্য বাস্তুসংস্থান, বিচিত্র বন্যপ্রাণী এবং রহস্যময় ম্যানগ্রোভ বনের নৌকা ভ্রমণের অভিজ্ঞতা নিন।",
      attractions: [
        {
          title: "ম্যানগ্রোভ বন",
          description: "অনন্য বন্যপ্রাণী সমৃদ্ধ ঘন ম্যানগ্রোভ বাস্তুতন্ত্র",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "বাঘের এলাকা",
          description: "রয়্যাল বেঙ্গল টাইগারের আবাসস্থল",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "নদী চ্যানেল",
          description: "জলপথের জটিল নেটওয়ার্ক",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      activities: [
        {
          icon: Boat,
          title: "নদী ভ্রমণ",
          description: "নৌকায় জলপথ অন্বেষণ",
        },
        {
          icon: Camera,
          title: "বন্যপ্রাণী ফটোগ্রাফি",
          description: "অনন্য প্রজাতি ক্যাপচার",
        },
        {
          icon: Bird,
          title: "পাখি পর্যবেক্ষণ",
          description: "বিরল পাখি প্রজাতি দেখুন",
        },
      ],
      tours: [
        {
          name: "৩-দিনের টাইগার ট্রেইল",
          description: "বন্যপ্রাণী দর্শনসহ সম্পূর্ণ সুন্দরবন অভিজ্ঞতা",
          price: 25000,
          duration: "৩ দিন",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "২-দিনের ফরেস্ট এক্সপ্লোরার",
          description: "ম্যানগ্রোভ বনে আদর্শ সপ্তাহান্তের ছুটি",
          price: 18000,
          duration: "২ দিন",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "দিনব্যাপী অ্যাডভেঞ্চার",
          description: "দ্রুত বন ও বন্যপ্রাণী অভিজ্ঞতা",
          price: 8000,
          duration: "১ দিন",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
      practicalInfo: {
        bestTime: ["নভেম্বর থেকে ফেব্রুয়ারি - সেরা আবহাওয়া", "বর্ষা মৌসুম এড়িয়ে চলুন (জুন-সেপ্টেম্বর)", "বন্যপ্রাণী দেখার জন্য ভোর বেলা"],
        permits: ["বন বিভাগের অনুমতি প্রয়োজন", "ট্যুর অপারেটর অনুমতি হ্যান্ডেল করে", "বৈধ আইডি প্রুফ রাখুন"],
        safety: ["সবসময় গাইডের নির্দেশ মানুন", "বন ভ্রমণে দলবদ্ধ থাকুন", "বন্যপ্রাণী থেকে দূরত্ব বজায় রাখুন"],
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1200" alt="Sundarbans" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl md:text-2xl">{t.subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Wave Pattern Divider */}
      <div className="relative -mt-16 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-background fill-current">
          <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
        >
          <p className="text-lg text-muted-foreground">{t.description}</p>
        </motion.div>

        {/* Attractions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Natural Wonders" : "প্রাকৃতিক বিস্ময়"}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.attractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.title}
                  width={600}
                  height={400}
                  className="object-cover aspect-video transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{attraction.title}</h3>
                    <p className="text-gray-200 text-sm">{attraction.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Forest Activities" : "বন কার্যক্রম"}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow"
              >
                <activity.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-muted-foreground">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tours */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Forest Tours" : "বন ভ্রমণ"}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.tours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <Image
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.name}
                    width={400}
                    height={300}
                    className="object-cover aspect-video"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                    <p className="text-muted-foreground mb-4">{tour.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-bold text-primary">
                        {formatCurrency(tour.price)}
                        <span className="text-sm text-muted-foreground">/{language === "en" ? "person" : "জন"}</span>
                      </div>
                      <Button variant="outline">{language === "en" ? "Book Tour" : "টুর বুক করুন"}</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Practical Information */}
        <section>
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Essential Information" : "প্রয়োজনীয় তথ্য"}</h2>
          <Tabs defaultValue="bestTime" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="bestTime">
                <Calendar className="h-4 w-4 mr-2" />
                {language === "en" ? "Best Time" : "সেরা সময়"}
              </TabsTrigger>
              <TabsTrigger value="permits">
                <Map className="h-4 w-4 mr-2" />
                {language === "en" ? "Permits" : "অনুমতি"}
              </TabsTrigger>
              <TabsTrigger value="safety">
                <AlertTriangle className="h-4 w-4 mr-2" />
                {language === "en" ? "Safety" : "নিরাপত্তা"}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="bestTime" className="mt-6">
              <ul className="space-y-2">
                {t.practicalInfo.bestTime.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="permits" className="mt-6">
              <ul className="space-y-2">
                {t.practicalInfo.permits.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Map className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="safety" className="mt-6">
              <ul className="space-y-2">
                {t.practicalInfo.safety.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </section>
      </div>

      {/* Booking CTA */}
      <section className="bg-primary text-primary-foreground py-16 mt-12">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold mb-4">
              {language === "en" ? "Ready to Explore the Sundarbans?" : "সুন্দরবন অন্বেষণে প্রস্তুত?"}
            </h2>
            <p className="text-lg mb-8">
              {language === "en" ? "Book your forest adventure today." : "আজই আপনার বন অভিযান বুক করুন।"}
            </p>
            <Button size="lg" variant="secondary">
              {language === "en" ? "Plan Your Trip" : "আপনার ভ্রমণ পরিকল্পনা করুন"}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

