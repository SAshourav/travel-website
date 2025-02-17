import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United States",
      rating: 5,
      comment: "Amazing experience with our local guide in Bandarban. The hidden trails were breathtaking!",
      date: "February 2024",
    },
    {
      id: 2,
      name: "David Chen",
      location: "Singapore",
      rating: 5,
      comment: "The custom itinerary service helped us discover places we would have never found on our own.",
      date: "January 2024",
    },
    {
      id: 3,
      name: "Emma Wilson",
      location: "UK",
      rating: 4,
      comment: "Great local insights and authentic experiences. Will definitely use WanderRoots again!",
      date: "January 2024",
    },
  ]

  return (
    <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardContent className="p-6">
            <div className="flex gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mt-4 text-sm">{review.comment}</p>
            <div className="mt-4">
              <div className="font-medium">{review.name}</div>
              <div className="text-sm text-gray-500">{review.location}</div>
              <div className="mt-1 text-xs text-gray-500">{review.date}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

