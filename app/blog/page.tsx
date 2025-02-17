import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Hidden Trails of Bandarban: A Local's Guide",
      excerpt:
        "Discover the secret paths and viewpoints that only locals know about in the beautiful hills of Bandarban.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Rahul Ahmed",
      date: "Feb 15, 2024",
      readTime: "5 min read",
      category: "Adventure",
    },
    {
      id: 2,
      title: "Local Food Guide: Cox's Bazar",
      excerpt: "A culinary journey through the coastal flavors of Bangladesh's most popular beach destination.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Priya Das",
      date: "Feb 12, 2024",
      readTime: "4 min read",
      category: "Food & Culture",
    },
    {
      id: 3,
      title: "Wildlife Photography in Sundarbans",
      excerpt: "Tips and locations for capturing the perfect wildlife shots in the world's largest mangrove forest.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Mohammad Khan",
      date: "Feb 10, 2024",
      readTime: "6 min read",
      category: "Photography",
    },
    {
      id: 4,
      title: "Best Time to Visit Bangladesh",
      excerpt: "A comprehensive guide to weather patterns and seasonal activities across Bangladesh.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Travel Expert",
      date: "Feb 8, 2024",
      readTime: "7 min read",
      category: "Travel Tips",
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Travel Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Stories, tips, and guides from our local experts and travelers.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <Link href={`/blog/${post.id}`}>
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={400}
                className="aspect-video object-cover transition-transform hover:scale-105"
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

