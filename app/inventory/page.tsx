import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

const categories = [
  {
    title: "Coches de Lujo",
    href: "/inventory/luxury",
    image: "/images/RR.webp",
    description: "Experimenta un confort y sofisticación incomparables"
  },
  {
    title: "Coches Deportivos",
    href: "/inventory/sports",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Puro rendimiento y excelencia en conducción"
  },
  {
    title: "Fórmula 1",
    href: "/inventory/formula-one",
    image: "/images/F1.webp",
    description: "Experimenta la cúspide de la ingeniería del automovilismo"
  },
  {
    title: "Colección Clásica",
    href: "/inventory/classic",
    image: "/images/Classic1.webp",
    description: "Obras maestras automotrices atemporales"
  },
  {
    title: "Motocicletas",
    href: "/inventory/motorcycles",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Excelencia premium sobre dos ruedas"
  },
  {
    title: "Aviación",
    href: "/inventory/aviation",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "El lujo toma vuelo"
  }
]

export default function InventoryPage() {
  return (
    <div className="flex min-h-screen flex-col flex items-center justify-center">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nuestra Colección</h1>
            <p className="text-lg text-muted-foreground">
              Explora nuestras categorías cuidadosamente seleccionadas de vehículos excepcionales
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
                    <Link href={category.href}>Explorar Colección</Link>
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
