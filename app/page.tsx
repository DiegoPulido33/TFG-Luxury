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
import Image from "next/image";

const featuredCategories = [
  {
    title: "Colección de Lujo",
    description: "Descubre el confort supremo",
    href: "/inventory/Luxury",
    image: "/images/RR.webp",
  },
  {
    title: "Coches Deportivos",
    description: "Pura potencia",
    href: "/inventory/Sports",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Colección Clásica",
    description: "Elegancia atemporal",
    href: "/inventory/Classic",
    image: "/images/Classic1.webp",
  },
  {
    title: "Fórmula 1",
    description: "Excelencia en carreras",
    href: "/inventory/Formula-one",
    image: "/images/f1_renault.webp",
  },
  {
    title: "Motocicletas",
    description: "Lujo sobre dos ruedas",
    href: "/inventory/Motorcycles",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Jets",
    description: "Lujo en el aire",
    href: "/inventory/Jets",
    image: "/images/Embraer.webp",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Sección Hero */}
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
                Experimenta una
                <strong className="block font-extrabold text-white">
                  Excelencia Automotriz Inigualable
                </strong>
              </h1>

              <p className="mt-4 max-w-xl sm:text-xl/relaxed text-gray-300">
                Descubre nuestra colección seleccionada de los mejores vehículos
                de lujo del mundo. Donde el rendimiento se une con la
                sofisticación.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/inventory">Explorar Colección</Link>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Reservar una Visita Privada</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Carrusel de Categorías Destacadas */}
        <section className="flex items-center justify-center bg-muted py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Categorías Destacadas
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Explora nuestras exclusivas colecciones de vehículos
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
                        <Image
                          width={800}
                          height={450}
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

        {/* Sección de Vehículos Destacados */}
        <section className="bg-background py-24 sm:py-32 flex items-center justify-center">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Vehículos Destacados
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Explora nuestras últimas incorporaciones a nuestra colección
                excepcional
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Vehículo 1 */}
              <Link
                href="/vehicle/102"
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02] bg-card border border-border dark:border-white/20
"
              >
                <div className="aspect-[16/9]">
                  <Image
                    width={800}
                    height={450}
                    src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Bentley"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-foreground">
                  <h3 className="text-xl font-bold mb-2">
                    Bentley Flying Spur
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    €320,000
                  </p>
                  <Button asChild>
                    <Link href="/vehicle/102">Ver Detalles</Link>
                  </Button>
                </div>
              </Link>

              {/* Vehículo 2 */}
              <Link
                href="/vehicle/201"
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02] bg-card border border-border dark:border-white/20"
              >
                <div className="aspect-[16/9]">
                  <Image
                    width={800}
                    height={450}
                    src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Ferrari"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-foreground">
                  <h3 className="text-xl font-bold mb-2">
                    Ferrari SF90 Stradale
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    €500,000
                  </p>
                  <Button asChild>
                    <Link href="/vehicle/201">Ver Detalles</Link>
                  </Button>
                </div>
              </Link>

              {/* Vehículo 3 */}
              <Link
                href="/vehicle/101"
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02] bg-card border border-border dark:border-white/20"
              >
                <div className="aspect-[16/9]">
                  <Image
                    width={800}
                    height={450}
                    src="/images/RR.webp"
                    alt="Rolls-Royce"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-foreground">
                  <h3 className="text-xl font-bold mb-2">
                    Rolls-Royce Phantom
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    €450,000
                  </p>
                  <Button asChild>
                    <Link href="/vehicle/101">Ver Detalles</Link>
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
