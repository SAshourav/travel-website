import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogPosts() {
  const posts = [
    {
      id: 1,
      title: "Hidden Trails of Bandarban",
      excerpt: "Discover the secret paths and viewpoints that only locals know about.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Feb 15, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Local Food Guide: Cox's Bazar",
      excerpt: "A culinary journey through the coastal flavors of Bangladesh.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Feb 12, 2024",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Wildlife Photography in Sundarbans",
      excerpt: "Tips and locations for capturing the perfect wildlife shots.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Feb 10, 2024",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={600}
              height={400}
              className="aspect-[3/2] object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold">{post.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{post.excerpt}</p>
              <div className="mt-4 flex gap-4 text-xs text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

