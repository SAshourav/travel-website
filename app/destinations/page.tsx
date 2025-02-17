import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DestinationsPage() {
  const destinations = [
    {
      id: "bandarban",
      name: "Bandarban",
      description: "Discover hidden trails and local culture in the hill tracts of Bangladesh.",
      image: "/placeholder.svg?height=400&width=600",
      guides: 12,
      tours: 25,
      activities: ["Trekking", "Cultural Tours", "Photography"],
    },
    {
      id: "coxs-bazar",
      name: "Cox's Bazar",
      description: "Experience the world's longest natural sea beach and vibrant coastal life.",
      image: "/placeholder.svg?height=400&width=600",
      guides: 15,
      tours: 30,
      activities: ["Beach Tours", "Water Sports", "Seafood"],
    },
    {
      id: "sundarbans",
      name: "Sundarbans",
      description: "Explore the world's largest mangrove forest and spot Royal Bengal Tigers.",
      image: "/placeholder.svg?height=400&width=600",
      guides: 8,
      tours: 15,
      activities: ["Wildlife Tours", "Boat Trips", "Mangrove Walks"],
    },
    {
      id: "sylhet",
      name: "Sylhet",
      description: "Visit tea gardens and natural wonders in the northeastern region.",
      image: "/placeholder.svg?height=400&width=600",
      guides: 10,
      tours: 20,
      activities: ["Tea Garden Tours", "Hiking", "Waterfall Visits"],
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Popular Destinations</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our handpicked destinations with local guides and authentic experiences.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden">
            <Image
              src={destination.image || "/placeholder.svg"}
              alt={destination.name}
              width={600}
              height={400}
              className="aspect-video object-cover"
            />
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <div className="mt-1 flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    Bangladesh
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{destination.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {destination.activities.map((activity) => (
                  <span key={activity} className="rounded-full bg-secondary/10 px-3 py-1 text-xs text-secondary">
                    {activity}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{destination.guides} Guides</span>
                  <span>{destination.tours} Tours</span>
                </div>
                <Button asChild>
                  <Link href={`/destinations/${destination.id}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

