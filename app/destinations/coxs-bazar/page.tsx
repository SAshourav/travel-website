"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Waves, Sun, Fish, Ship, Umbrella } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"

export default function CoxsBazarPage() {
  const { language, formatCurrency } = useLanguage()

  const content = {
    en: {
      title: "Cox's Bazar",
      subtitle: "World's Longest Natural Sea Beach",
      description:
        "Cox's Bazar, home to the world's longest natural sandy beach stretching 120 kilometers along the Bay of Bengal, offers a perfect blend of sun, sea, and local culture. Experience breathtaking sunsets, fresh seafood, and endless beach activities in this coastal paradise.",
      attractions: [
        {
          title: "Main Beach",
          description: "120km of uninterrupted sandy beach",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Inani Beach",
          description: "Coral-rich beach with unique rock formations",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Marine Drive",
          description: "Scenic coastal road with ocean views",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      activities: [
        {
          icon: Waves,
          title: "Beach Activities",
          description: "Swimming, surfing, and beach sports",
        },
        {
          icon: Ship,
          title: "Boat Tours",
          description: "Sunset cruises and island visits",
        },
        {
          icon: Fish,
          title: "Seafood Dining",
          description: "Fresh local seafood experiences",
        },
      ],
      hotels: [
        {
          name: "Sayeman Beach Resort",
          description: "Luxury beachfront resort with ocean views",
          price: 12000,
          rating: 4.5,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Long Beach Hotel",
          description: "Modern comfort with private beach access",
          price: 8000,
          rating: 4.3,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Ocean Paradise",
          description: "Family-friendly resort with pool",
          price: 6000,
          rating: 4.2,
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
      practicalInfo: {
        bestTime: [
          "November to March - Perfect weather",
          "Avoid monsoon season (June-September)",
          "Early morning for beach activities",
        ],
        transportation: [
          "Flights from Dhaka (1 hour)",
          "Bus services available (8-10 hours)",
          "Local transport: CNG, rickshaw",
        ],
        tips: [
          "Book hotels in advance during peak season",
          "Respect local customs and dress modestly",
          "Try local seafood at Burmese Market",
        ],
      },
    },
    bn: {
      title: "কক্সবাজার",
      subtitle: "বিশ্বের দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকত",
      description:
        "কক্সবাজার, বঙ্গোপসাগরের তীরে ১২০ কিলোমিটার দীর্ঘ প্রাকৃতিক বালুময় সৈকতের অধিকারী, সূর্য, সমুদ্র এবং স্থানীয় সংস্কৃতির নিখুঁত সমন্বয় উপস্থাপন করে। এই উপকূলীয় স্বর্গে মনোরম সূর্যাস্ত, তাজা সামুদ্রিক খাবার এবং অসীম সৈকত কার্যক্রমের অভিজ্ঞতা নিন।",
      attractions: [
        {
          title: "মূল সৈকত",
          description: "১২০ কিমি অবিচ্ছিন্ন বালুময় সৈকত",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "ইনানী বিচ",
          description: "প্রবাল সমৃদ্ধ এবং অনন্য পাথর গঠনযুক্ত সৈকত",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "মেরিন ড্রাইভ",
          description: "সমুদ্র দৃশ্যের মনোরম উপকূলীয় সড়ক",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      activities: [
        {
          icon: Waves,
          title: "সৈকত কার্যক্রম",
          description: "সাঁতার, সার্ফিং এবং বিচ স্পোর্টস",
        },
        {
          icon: Ship,
          title: "নৌকা ভ্রমণ",
          description: "সূর্যাস্ত ক্রুজ এবং দ্বীপ ভ্রমণ",
        },
        {
          icon: Fish,
          title: "সামুদ্রিক খাবার",
          description: "তাজা স্থানীয় সামুদ্রিক খাবার",
        },
      ],
      hotels: [
        {
          name: "সায়েমান বিচ রিসোর্ট",
          description: "সমুদ্র দৃশ্যসহ বিলাসবহুল বিচফ্রন্ট রিসোর্ট",
          price: 12000,
          rating: 4.5,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "লং বিচ হোটেল",
          description: "প্রাইভেট বিচ অ্যাক্সেসসহ আধুনিক আরাম",
          price: 8000,
          rating: 4.3,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "ওশান প্যারাডাইস",
          description: "পরিবার-বান্ধব রিসোর্ট সুইমিং পুলসহ",
          price: 6000,
          rating: 4.2,
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
      practicalInfo: {
        bestTime: ["নভেম্বর থেকে মার্চ - আদর্শ আবহাওয়া", "বর্ষা মৌসুম এড়িয়ে চলুন (জুন-সেপ্টেম্বর)", "সৈকত কার্যক্রমের জন্য ভোর বেলা"],
        transportation: ["ঢাকা থেকে ফ্লাইট (১ ঘণ্টা)", "বাস সার্ভিস উপলব্ধ (৮-১০ ঘণ্টা)", "স্থানীয় পরিবহন: সিএনজি, রিকশা"],
        tips: [
          "পিক সিজনে আগে থেকে হোটেল বুক করুন",
          "স্থানীয় রীতিনীতি মেনে চলুন এবং মার্জিত পোশাক পরুন",
          "বার্মিজ মার্কেটে স্থানীয় সামুদ্রিক খাবার চেষ্টা করুন",
        ],
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Cox's Bazar Beach"
          fill
          className="object-cover"
          priority
        />
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

      {/* Wave Divider */}
      <div className="relative -mt-16 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-background fill-current">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Popular Attractions" : "জনপ্রিয় আকর্ষণ"}</h2>
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
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Beach Activities" : "সৈকত কার্যক্রম"}</h2>
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

        {/* Hotels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Beach Resorts" : "বিচ রিসোর্ট"}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.hotels.map((hotel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <Image
                    src={hotel.image || "/placeholder.svg"}
                    alt={hotel.name}
                    width={400}
                    height={300}
                    className="object-cover aspect-video"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                    <p className="text-muted-foreground mb-4">{hotel.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-bold text-primary">
                        {formatCurrency(hotel.price)}
                        <span className="text-sm text-muted-foreground">/{language === "en" ? "night" : "রাত"}</span>
                      </div>
                      <Button variant="outline">{language === "en" ? "Book Now" : "বুক করুন"}</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Practical Information */}
        <section>
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Travel Guide" : "ভ্রমণ গাইড"}</h2>
          <Tabs defaultValue="bestTime" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="bestTime">
                <Sun className="h-4 w-4 mr-2" />
                {language === "en" ? "Best Time" : "সেরা সময়"}
              </TabsTrigger>
              <TabsTrigger value="transportation">
                <Ship className="h-4 w-4 mr-2" />
                {language === "en" ? "Getting There" : "যাতায়াত"}
              </TabsTrigger>
              <TabsTrigger value="tips">
                <Umbrella className="h-4 w-4 mr-2" />
                {language === "en" ? "Travel Tips" : "ভ্রমণ টিপস"}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="bestTime" className="mt-6">
              <ul className="space-y-2">
                {t.practicalInfo.bestTime.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="transportation" className="mt-6">
              <ul className="space-y-2">
                {t.practicalInfo.transportation.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Ship className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="tips" className="mt-6">
              <ul className="space-y-2">
                {t.practicalInfo.tips.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Umbrella className="h-4 w-4 text-primary" />
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
              {language === "en" ? "Ready for Your Beach Getaway?" : "আপনার বিচ ছুটির জন্য প্রস্তুত?"}
            </h2>
            <p className="text-lg mb-8">
              {language === "en" ? "Book your perfect beach vacation today." : "আজই আপনার নিখুঁত বিচ ছুটি বুক করুন।"}
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

