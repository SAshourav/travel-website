import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FeaturedGuides() {
  const guides = [
    {
      id: 1,
      name: "Rahul Ahmed",
      location: "Bandarban",
      expertise: "Trekking, Cultural Tours",
      rating: 4.9,
      reviews: 128,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Priya Das",
      location: "Cox's Bazar",
      expertise: "Beach Tours, Local Food",
      rating: 4.8,
      reviews: 96,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Mohammad Khan",
      location: "Sundarbans",
      expertise: "Wildlife, Photography",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {guides.map((guide) => (
        <Card key={guide.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Image
                src={guide.image || "/placeholder.svg"}
                alt={guide.name}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold">{guide.name}</h3>
                <p className="text-sm text-gray-500">{guide.location}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">{guide.expertise}</p>
            <div className="mt-4 flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{guide.rating}</span>
              <span className="text-sm text-gray-500">({guide.reviews} reviews)</span>
            </div>
            <Button className="mt-4 w-full">Contact Guide</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

