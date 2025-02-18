"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Leaf, Cloud, Mountain, Coffee, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"

export default function SylhetPage() {
  const { language, formatCurrency } = useLanguage()

  const content = {
    en: {
      title: "Sylhet",
      subtitle: "Land of Tea Gardens and Natural Wonders",
      description:
        "Sylhet, nestled in northeastern Bangladesh, is a region of rolling tea gardens, pristine waterfalls, and rich cultural heritage. Experience the serene beauty of endless tea estates, explore mystical forests, and discover the charm of Sylheti culture.",
      attractions: [
        {
          title: "Ratargul Swamp Forest",
          description: "Bangladesh's only freshwater swamp forest",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Jaflong",
          description: "Crystal clear water and stone collections",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Lalakhal",
          description: "Turquoise water canal surrounded by hills",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      activities: [
        {
          icon: Leaf,
          title: "Tea Garden Tours",
          description: "Visit centuries-old tea estates",
        },
        {
          icon: Mountain,
          title: "Nature Walks",
          description: "Explore pristine forests and hills",
        },
        {
          icon: Coffee,
          title: "Tea Tasting",
          description: "Sample fresh local tea varieties",
        },
      ],
      hotels: [
        {
          name: "Grand Sultan Tea Resort",
          description: "Luxury resort amid tea gardens",
          price: 15000,
          rating: 4.7,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Rose View Hotel",
          description: "Premium city hotel with modern amenities",
          price: 8000,
          rating: 4.4,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Hotel Star Pacific",
          description: "Comfortable stay in city center",
          price: 5000,
          rating: 4.2,
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
      practicalInfo: {
        weather: [
          "October to March - Best weather",
          "June to September - Monsoon season",
          "Year-round green landscapes",
        ],
        transportation: [
          "Flights from Dhaka (45 minutes)",
          "Bus services available (6-8 hours)",
          "Local transport: CNG, rental cars",
        ],
        tips: ["Try local Sylheti cuisine", "Visit tea gardens early morning", "Carry rain gear during monsoon"],
      },
    },
    bn: {
      title: "সিলেট",
      subtitle: "চা বাগান এবং প্রাকৃতিক বিস্ময়ের দেশ",
      description:
        "বাংলাদেশের উত্তর-পূর্বাঞ্চলে অবস্থিত সিলেট, ঢেউ খেলানো চা বাগান, অকলুষিত জলপ্রপাত এবং সমৃদ্ধ সাংস্কৃতিক ঐতিহ্যের এক অঞ্চল। অসীম চা বাগানের শান্ত সৌন্দর্য, রহস্যময় বনভূমি এবং সিলেটি সংস্কৃতির মোহনীয়তা উপভোগ করুন।",
      attractions: [
        {
          title: "রাতারগুল সোয়াম্প ফরেস্ট",
          description: "বাংলাদেশের একমাত্র মিঠা পানির জলাবন",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "জাফলং",
          description: "স্বচ্ছ পানি এবং পাথর সংগ্রহ",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "লালাখাল",
          description: "পাহাড় ঘেরা ফিরোজা রঙের জলপথ",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      activities: [
        {
          icon: Leaf,
          title: "চা বাগান ভ্রমণ",
          description: "শতাব্দী প্রাচীন চা বাগান দেখুন",
        },
        {
          icon: Mountain,
          title: "প্রকৃতি পর্যবেক্ষণ",
          description: "অকলুষিত বন ও পাহাড় অন্বেষণ",
        },
        {
          icon: Coffee,
          title: "চা টেস্টিং",
          description: "স্থানীয় তাজা চায়ের স্বাদ নিন",
        },
      ],
      hotels: [
        {
          name: "গ্র্যান্ড সুলতান টি রিসোর্ট",
          description: "চা বাগানের মাঝে বিলাসবহুল রিসোর্ট",
          price: 15000,
          rating: 4.7,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "রোজ ভিউ হোটেল",
          description: "আধুনিক সুযোগ-সুবিধাযুক্ত প্রিমিয়াম সিটি হোটেল",
          price: 8000,
          rating: 4.4,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "হোটেল স্টার প্যাসিফিক",
          description: "শহরের কেন্দ্রে আরামদায়ক অবস্থান",
          price: 5000,
          rating: 4.2,
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
      practicalInfo: {
        weather: ["অক্টোবর থেকে মার্চ - সেরা আবহাওয়া", "জুন থেকে সেপ্টেম্বর - বর্ষা মৌসুম", "সারা বছর সবুজ প্রকৃতি"],
        transportation: ["ঢাকা থেকে ফ্লাইট (৪৫ মিনিট)", "বাস সার্ভিস উপলব্ধ (৬-৮ ঘণ্টা)", "স্থানীয় পরিবহন: সিএনজি, ভাড়ার গাড়ি"],
        tips: ["স্থানীয় সিলেটি খাবার খেয়ে দেখুন", "ভোরে চা বাগান ভ্রমণ করুন", "বর্ষায় বৃষ্টির সরঞ্জাম সাথে রাখুন"],
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
          alt="Sylhet Tea Gardens"
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

      {/* Leaf Pattern Divider */}
      <div className="relative -mt-16 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-background fill-current">
          <path d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,181.3C672,181,768,203,864,197.3C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Experiences" : "অভিজ্ঞতা"}</h2>
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
          <h2 className="text-3xl font-bold mb-8">{language === "en" ? "Travel Guide" : "ভ্রমণ গাইড"}</h2>
          <Tabs defaultValue="weather" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="weather">
                <Cloud className="h-4 w-4 mr-2" />
                {language === "en" ? "Weather" : "আবহাওয়া"}
              </TabsTrigger>
              <TabsTrigger value="transportation">
                <Map className="h-4 w-4 mr-2" />
                {language === "en" ? "Getting There" : "যাতায়াত"}
              </TabsTrigger>
              <TabsTrigger value="tips">
                <Leaf className="h-4 w-4 mr-2" />
                {language === "en" ? "Travel Tips" : "ভ্রমণ টিপস"}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="weather" className="mt-6">
              <ul className="space-y-2">
                {t.practicalInfo.weather.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Cloud className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="transportation" className="mt-6">
              <ul className="space-y-2">
                {t.practicalInfo.transportation.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Map className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="tips" className="mt-6">
              <ul className="space-y-2">
                {t.practicalInfo.tips.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-primary" />
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
              {language === "en" ? "Ready to Explore Sylhet?" : "সিলেট ভ্রমণে প্রস্তুত?"}
            </h2>
            <p className="text-lg mb-8">
              {language === "en" ? "Book your tea garden adventure today." : "আজই আপনার চা বাগান অ্যাডভেঞ্চার বুক করুন।"}
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

