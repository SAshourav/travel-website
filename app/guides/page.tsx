import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Languages } from "lucide-react"
import Image from "next/image"

export default function GuidesPage() {
  const guides = [
    {
      id: 1,
      name: "Rahul Ahmed",
      location: "Bandarban",
      languages: ["English", "Bengali", "Marma"],
      expertise: ["Trekking", "Cultural Tours", "Photography"],
      experience: "5 years",
      rating: 4.9,
      reviews: 128,
      image: "/placeholder.svg?height=300&width=300",
      bio: "Professional trekking guide with deep knowledge of Bandarban's hidden trails and local communities.",
    },
    {
      id: 2,
      name: "Priya Das",
      location: "Cox's Bazar",
      languages: ["English", "Bengali", "Hindi"],
      expertise: ["Beach Tours", "Local Food", "Cultural Experience"],
      experience: "4 years",
      rating: 4.8,
      reviews: 96,
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specialized in coastal tours and authentic local food experiences in Cox's Bazar.",
    },
    {
      id: 3,
      name: "Mohammad Khan",
      location: "Sundarbans",
      languages: ["English", "Bengali"],
      expertise: ["Wildlife Tours", "Photography", "Boat Tours"],
      experience: "7 years",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert wildlife guide with extensive experience in Sundarbans mangrove forest.",
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Local Guides</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Meet our experienced local guides who will make your journey unforgettable.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Card key={guide.id}>
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
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {guide.location}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{guide.bio}</p>
              <div className="mt-4 flex items-center gap-2">
                <Languages className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">{guide.languages.join(", ")}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {guide.expertise.map((skill) => (
                  <span key={skill} className="rounded-full bg-secondary/10 px-3 py-1 text-xs text-secondary">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{guide.rating}</span>
                <span className="text-sm text-muted-foreground">({guide.reviews} reviews)</span>
              </div>
              <Button className="mt-4 w-full">Contact Guide</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

