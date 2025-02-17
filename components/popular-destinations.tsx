import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function PopularDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Bandarban",
      description: "Discover hidden trails and local culture",
      image: "/placeholder.svg?height=400&width=600",
      guides: 12,
      tours: 25,
    },
    {
      id: 2,
      name: "Cox's Bazar",
      description: "World's longest natural sea beach",
      image: "/placeholder.svg?height=400&width=600",
      guides: 15,
      tours: 30,
    },
    {
      id: 3,
      name: "Sundarbans",
      description: "World's largest mangrove forest",
      image: "/placeholder.svg?height=400&width=600",
      guides: 8,
      tours: 15,
    },
  ]

  return (
    <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <Link key={destination.id} href={`/destinations/${destination.id}`}>
          <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
            <Image
              src={destination.image || "/placeholder.svg"}
              alt={destination.name}
              width={600}
              height={400}
              className="aspect-[3/2] object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">{destination.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{destination.description}</p>
              <div className="mt-4 flex gap-4 text-sm text-gray-500">
                <span>{destination.guides} Local Guides</span>
                <span>{destination.tours} Tours</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

