import Image from "next/image"
import Link from "next/link"
import { Search, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PopularDestinations from "./components/popular-destinations"
import FeaturedGuides from "./components/featured-guides"
import BlogPosts from "./components/blog-posts"
import Reviews from "./components/reviews"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">WanderRoots</div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/destinations" className="text-sm font-medium hover:text-primary">
              Destinations
            </Link>
            <Link href="/guides" className="text-sm font-medium hover:text-primary">
              Local Guides
            </Link>
            <Link href="/packages" className="text-sm font-medium hover:text-primary">
              Tour Packages
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
          </nav>
          <Button>Create Itinerary</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative">
          <div className="container flex flex-col lg:flex-row items-center gap-8 py-20">
            <div className="flex flex-col gap-4 lg:w-1/2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover the Uncharted,
                <br />
                Your Way
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Experience authentic local travel with verified guides and hidden gems across the world.
              </p>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
                  <Input className="pl-8" placeholder="Where do you want to go?" />
                </div>
                <Button type="submit">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://sjc.microlink.io/c2yDdCDWqP-Gg3_SHRQRCwv0T8Fve8EoTWIIRJ0JiMm4FLtfesjDgxutX8GYFYIU0al7yHl41_Mc-7-dBfb_wg.jpeg"
                alt="Travel illustration"
                width={600}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="border-t bg-gray-50/50">
          <div className="container py-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Destinations</h2>
            <p className="mt-4 text-gray-500">Explore our most visited locations and hidden gems.</p>
            <PopularDestinations />
          </div>
        </section>

        <section className="container py-20">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Local Guides</h2>
          <p className="mt-4 text-gray-500">Meet our verified local experts who know every corner of their hometown.</p>
          <FeaturedGuides />
        </section>

        <section className="border-t bg-gray-50/50">
          <div className="container py-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Travel Stories</h2>
            <p className="mt-4 text-gray-500">Get inspired by real experiences from our community.</p>
            <BlogPosts />
          </div>
        </section>

        <section className="container py-20">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Traveler Reviews</h2>
          <p className="mt-4 text-gray-500">See what others are saying about their experiences.</p>
          <Reviews />
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:justify-between">
          <div>
            <div className="text-xl font-bold">WanderRoots</div>
            <p className="mt-2 text-sm text-gray-500">Discover the Uncharted, Your Way</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="font-medium">Company</div>
              <Link href="/about" className="text-sm text-gray-500 hover:text-primary">
                About
              </Link>
              <Link href="/careers" className="text-sm text-gray-500 hover:text-primary">
                Careers
              </Link>
              <Link href="/press" className="text-sm text-gray-500 hover:text-primary">
                Press
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium">Support</div>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-primary">
                Contact
              </Link>
              <Link href="/faq" className="text-sm text-gray-500 hover:text-primary">
                FAQ
              </Link>
              <Link href="/safety" className="text-sm text-gray-500 hover:text-primary">
                Safety
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium">Legal</div>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-primary">
                Terms
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-gray-500">© 2024 WanderRoots. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

