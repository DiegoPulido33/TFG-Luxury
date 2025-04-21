import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

const categories = [
  {
    title: "Luxury Cars",
    href: "/inventory/luxury",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Experience unparalleled comfort and sophistication"
  },
  {
    title: "Sports Cars",
    href: "/inventory/sports",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Pure performance and driving excellence"
  },
  {
    title: "Formula 1",
    href: "/inventory/formula-one",
    image: "https://images.unsplash.com/photo-1515036551567-bf1198cccc35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Experience the pinnacle of motorsport engineering"
  },
  {
    title: "Classic Collection",
    href: "/inventory/classic",
    image: "https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Timeless automotive masterpieces"
  },
  {
    title: "Motorcycles",
    href: "/inventory/motorcycles",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Premium two-wheel excellence"
  },
  {
    title: "Aviation",
    href: "/inventory/aviation",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Luxury takes flight"
  }
]

export default function InventoryPage() {
  return (
    <div className="flex min-h-screen flex-col flex items-center justify-center">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Collection</h1>
            <p className="text-lg text-muted-foreground">
              Explore our carefully curated categories of exceptional vehicles
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.href} className="group overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{category.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button asChild>
                    <Link href={category.href}>Explore Collection</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}