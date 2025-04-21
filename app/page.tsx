import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const featuredCategories = [
  {
    title: "Luxury Collection",
    description: "Discover ultimate comfort",
    href: "/inventory/luxury",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sports Cars",
    description: "Pure performance",
    href: "/inventory/sports",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Classic Collection",
    description: "Timeless elegance",
    href: "/inventory/classic",
    image:
      "https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Formula 1",
    description: "Racing excellence",
    href: "/inventory/formula-one",
    image:
      "https://images.unsplash.com/photo-1515036551567-bf1198cccc35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Motorcycles",
    description: "Two-wheel luxury",
    href: "/inventory/motorcycles",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div
            className="absolute top-0 left-0 w-full h-full align-center z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container relative z-10 mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                Experience Unparalleled
                <strong className="block font-extrabold text-primary">
                  Automotive Excellence
                </strong>
              </h1>

              <p className="mt-4 max-w-xl sm:text-xl/relaxed text-gray-300">
                Discover our curated collection of the world's finest luxury
                vehicles. Where performance meets sophistication.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/inventory">Explore Our Collection</Link>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Book a Private Viewing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories Carousel */}
        <section className="flex items-center justify-center bg-muted py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Featured Categories
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Explore our exclusive vehicle collections
              </p>
            </div>

            <div className="flex justify-center">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full max-w-7xl"
              >
                <CarouselContent>
                  {featuredCategories.map((category, index) => (
                    <CarouselItem
                      key={index}
                      className="px-2 md:basis-1/2 lg:basis-1/3"
                    >
                      <Link
                        href={category.href}
                        className="group block relative overflow-hidden rounded-lg aspect-[16/9]"
                      >
                        <img
                          src={category.image}
                          alt={category.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {category.title}
                          </h3>
                          <p className="text-gray-200">
                            {category.description}
                          </p>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Featured Vehicles Section */}
        <section className="bg-background py-24 sm:py-32 flex items-center justify-center">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Featured Vehicles
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Explore our latest additions to our exceptional collection
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Vehículo 1 */}
              <div className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[16/9]">
                  <img
                    src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Bentley"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-bold mb-2">
                    Bentley Flying Spur
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    €320,000
                  </p>
                  <Button asChild>
                    <Link href="/vehicle/1">View Details</Link>
                  </Button>
                </div>
              </div>

              {/* Vehículo 2 */}
              <div className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[16/9]">
                  <img
                    src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Ferrari"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-bold mb-2">
                    Ferrari SF90 Stradale
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    €500,000
                  </p>
                  <Button asChild>
                    <Link href="/vehicle/2">View Details</Link>
                  </Button>
                </div>
              </div>

              {/* Vehículo 3 */}
              <div className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[16/9]">
                  <img
                    src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Rolls-Royce"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-bold mb-2">
                    Rolls-Royce Phantom
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    €450,000
                  </p>
                  <Button asChild>
                    <Link href="/vehicle/3">View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
