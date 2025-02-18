"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Car, Utensils, Mountain, Camera, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"

export default function BandarbanPage() {
  const { language, formatCurrency } = useLanguage()
  const [activeImage, setActiveImage] = useState(0)

  const content = {
    en: {
      title: "Bandarban",
      subtitle: "The Land of Mountains and Tribal Culture",
      description:
        "Bandarban, a district of breathtaking beauty in southeastern Bangladesh, is home to the country's highest peaks, pristine lakes, and diverse tribal communities. Experience the serenity of nature and rich cultural heritage in this mountainous paradise.",
      attractions: [
        {
          title: "Boga Lake",
          description: "A stunning natural lake surrounded by mountains and clouds",
          image:
            "https://sjc.microlink.io/4koGHbv9WMJW5Xak-agpyE0FyP7MzogElw5LBO6fG50GQsxHIMKdL1bgvyXDlpAyd26gPnjmGOyiMPP7RdYPeg.jpeg",
        },
        {
          title: "Nilgiri",
          description: "One of the highest peaks offering spectacular views",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Tribal Villages",
          description: "Experience the unique culture of indigenous communities",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      activities: [
        {
          icon: Mountain,
          title: "Trekking",
          description: "Explore scenic mountain trails",
        },
        {
          icon: Camera,
          title: "Photography",
          description: "Capture breathtaking landscapes",
        },
        {
          icon: Users,
          title: "Cultural Tours",
          description: "Visit tribal communities",
        },
      ],
      hotels: [
        {
          name: "Hotel Hill View",
          description: "Modern comfort with panoramic mountain views",
          price: 3500,
          rating: 4.5,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Green Peak Resorts",
          description: "Luxury amid nature with traditional architecture",
          price: 5000,
          rating: 4.8,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Hill Side Resort",
          description: "Cozy cottages surrounded by nature",
          price: 4000,
          rating: 4.3,
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
      practicalInfo: {
        transportation: [
          "Bus services from Dhaka (10-12 hours)",
          "Private car rentals available",
          "Local transport: CNG, Chander Gari",
        ],
        food: ["Traditional tribal cuisine", "Local Bengali restaurants", "Fresh mountain produce"],
        tips: [
          "Best time to visit: November to February",
          "Carry warm clothes for night",
          "Book accommodations in advance",
        ],
      },
    },
    bn: {
      title: "বান্দরবান",
      subtitle: "পাহাড় এবং উপজাতীয় সংস্কৃতির দেশ",
      description:
        "বান্দরবান, বাংলাদেশের দক্ষিণ-পূর্বাঞ্চলের একটি অপরূপ সুন্দর জেলা, যেখানে রয়েছে দেশের সর্বোচ্চ পর্বতমালা, অকলুষিত হ্রদ এবং বিভিন্ন উপজাতি সম্প্রদায়। এই পার্বত্য স্বর্গে প্রকৃতির শান্তি এবং সমৃদ্ধ সাংস্কৃতিক ঐতিহ্যের অভিজ্ঞতা নিন।",
      attractions: [
        {
          title: "বগা লেক",
          description: "পাহাড় এবং মেঘে ঘেরা একটি মনোরম প্রাকৃতিক হ্রদ",
          image:
            "https://sjc.microlink.io/4koGHbv9WMJW5Xak-agpyE0FyP7MzogElw5LBO6fG50GQsxHIMKdL1bgvyXDlpAyd26gPnjmGOyiMPP7RdYPeg.jpeg",
        },
        {
          title: "নীলগিরি",
          description: "অসাধারণ দৃশ্য উপভোগের জন্য সর্বোচ্চ শৃঙ্গগুলির একটি",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "উপজাতীয় গ্রাম",
          description: "আদিবাসী সম্প্রদায়ের অনন্য সংস্কৃতি অনুভব করুন",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      activities: [
        {
          icon: Mountain,
          title: "ট্রেকিং",
          description: "মনোরম পাহাড়ি পথ অন্বেষণ করুন",
        },
        {
          icon: Camera,
          title: "ফটোগ্রাফি",
          description: "অপরূপ প্রাকৃতিক দৃশ্য ক্যাপচার করুন",
        },
        {
          icon: Users,
          title: "সাংস্কৃতিক ভ্রমণ",
          description: "উপজাতীয় সম্প্রদায় পরিদর্শন করুন",
        },
      ],
      hotels: [
        {
          name: "হোটেল হিল ভিউ",
          description: "পাহাড়ের পানোরামিক দৃশ্যসহ আধুনিক আরাম",
          price: 3500,
          rating: 4.5,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "গ্রীন পিক রিসোর্ট",
          description: "ঐতিহ্যবাহী স্থাপত্যের সাথে প্রকৃতির মাঝে বিলাসিতা",
          price: 5000,
          rating: 4.8,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "হিল সাইড রিসোর্ট",
          description: "প্রকৃতি ঘেরা আরামদায়ক কটেজ",
          price: 4000,
          rating: 4.3,
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
      practicalInfo: {
        transportation: ["ঢাকা থেকে বাস সার্ভিস (১০-১২ ঘণ্টা)", "প্রাইভেট কার ভাড়া পাওয়া যায়", "স্থানীয় পরিবহন: সিএনজি, চাঁদের গাড়ি"],
        food: ["ঐতিহ্যবাহী উপজাতীয় খাবার", "স্থানীয় বাঙালি রেস্তোরাঁ", "তাজা পাহাড়ি সবজি"],
        tips: ["ভ্রমণের সেরা সময়: নভেম্বর থেকে ফেব্রুয়ারি", "রাতের জন্য গরম কাপড় নিন", "আগে থেকে আবাসন বুক করুন"],
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <Image
          src="https://sjc.microlink.io/4koGHbv9WMJW5Xak-agpyE0FyP7MzogElw5LBO6fG50GQsxHIMKdL1bgvyXDlpAyd26gPnjmGOyiMPP7RdYPeg.jpeg"
          alt="Bandarban"
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
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Things to Do" : "করণীয়"}</h2>
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
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Where to Stay" : "থাকার জায়গা"}</h2>
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
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Practical Information" : "প্রয়োজনীয় তথ্য"}</h2>
          <Tabs defaultValue="transportation" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="transportation">
                <Car className="h-4 w-4 mr-2" />
                {language === "en" ? "Transportation" : "পরিবহন"}
              </TabsTrigger>
              <TabsTrigger value="food">
                <Utensils className="h-4 w-4 mr-2" />
                {language === "en" ? "Food" : "খাবার"}
              </TabsTrigger>
              <TabsTrigger value="tips">
                <Clock className="h-4 w-4 mr-2" />
                {language === "en" ? "Travel Tips" : "ভ্রমণ টিপস"}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="transportation" className="mt-6">
              <ul className="space-y-2">
                {t.practicalInfo.transportation.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="food" className="mt-6">
              <ul className="space-y-2">
                {t.practicalInfo.food.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Utensils className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="tips" className="mt-6">
              <ul className="space-y-2">
                {t.practicalInfo.tips.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
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
              {language === "en" ? "Ready to Experience Bandarban?" : "বান্দরবান অভিজ্ঞতার জন্য প্রস্তুত?"}
            </h2>
            <p className="text-lg mb-8">
              {language === "en"
                ? "Book your adventure today and discover the beauty of the hills."
                : "আজই আপনার অ্যাডভেঞ্চার বুক করুন এবং পাহাড়ের সৌন্দর্য আবিষ্কার করুন।"}
            </p>
            <Button size="lg" variant="secondary">
              {language === "en" ? "Start Planning" : "পরিকল্পনা শুরু করুন"}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

