import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar } from "lucide-react"
import Image from "next/image"

export default function PackagesPage() {
  const packages = [
    {
      id: 1,
      title: "Bandarban Adventure Trek",
      description: "3-day trekking adventure through the hills of Bandarban with local guide and accommodation.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "3 days",
      groupSize: "4-8 people",
      startDates: "Weekly",
      price: 299,
      includes: [
        "Professional local guide",
        "Accommodation in local homestays",
        "All meals",
        "Transport from Bandarban city",
      ],
    },
    {
      id: 2,
      title: "Cox's Bazar Beach Escape",
      description: "5-day beach holiday with water activities and seafood experiences.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "5 days",
      groupSize: "2-6 people",
      startDates: "Daily",
      price: 499,
      includes: ["Beachfront hotel accommodation", "Daily breakfast", "Water sports activities", "Local food tour"],
    },
    {
      id: 3,
      title: "Sundarbans Wildlife Safari",
      description: "4-day boat safari in the Sundarbans mangrove forest with wildlife viewing.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "4 days",
      groupSize: "6-12 people",
      startDates: "Monthly",
      price: 599,
      includes: ["Expert wildlife guide", "Boat accommodation", "All meals", "Forest permits"],
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Tour Packages</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Carefully curated tour packages for unforgettable experiences.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden">
            <Image
              src={pkg.image || "/placeholder.svg"}
              alt={pkg.title}
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">{pkg.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {pkg.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {pkg.groupSize}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {pkg.startDates}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-medium">Includes:</h4>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {pkg.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-2xl font-bold">${pkg.price}</div>
                <Button>Book Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

