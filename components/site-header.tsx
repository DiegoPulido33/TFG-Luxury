"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Gauge } from "lucide-react";

const navigation = [
  { name: "Inventario", href: "/inventory" },
  { name: "Servicios", href: "/servicios" },
  { name: "Sobre Nosotros", href: "/about" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Desktop logo and nav */}
        <div className="mr-4 hidden md:flex items-center space-x-6">
          <Link href="/" className="group flex items-center space-x-2">
            <Image
              src="/images/logoBueno.webp"
              alt="Luxury Motors Logo"
              width={120}
              height={50}
              className="transition-transform duration-300 group-hover:translate-x-1 object-contain"
            />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative inline-block overflow-hidden rounded-md px-3 py-2 transition-colors duration-300
                  text-foreground/60 group
                  ${pathname === item.href ? "text-white" : ""}
                `}
              >
                <span
                  className="relative z-10 transition-colors duration-300 group-hover:text-black"
                >
                  {item.name}
                </span>
                <span
                  className={`
                    absolute left-0 top-0 h-[200%] w-0 bg-[#D4AF37] z-0 rounded-md
                    transition-all duration-300 ease-out group-hover:w-full
                  `}
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Gauge className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex flex-col items-center gap-6 px-6 pt-8"
          >
            {/* Mobile logo */}
            <Link href="/" className="flex items-center justify-center">
              <Image
                alt="Luxury Motors Logo"
                width={140}
                height={60}
                src="/images/logoBueno.webp"
                className="object-contain"
              />
            </Link>

            {/* Mobile nav */}
            <nav className="mt-8 flex w-full flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative mx-2 inline-block overflow-hidden rounded-md px-4 py-3 text-center
                    text-base font-medium text-foreground/60 group
                    ${pathname === item.href ? "text-white" : ""}
                  `}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    {item.name}
                  </span>
                  <span
                    className={`
                      absolute left-0 top-0 h-[200%] w-0 bg-[#D4AF37] z-0 rounded-md
                      transition-all duration-300 ease-out group-hover:w-full
                    `}
                  />
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Contact Button */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button
            asChild
            className={`
              relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-2
              text-white bg-transparent border border-white group
            `}
          >
            <Link href="/contact">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Contacto
              </span>
              <span
                className={`
                  absolute left-0 top-0 h-[200%] w-0 bg-[#D4AF37] z-0 rounded-md
                  transition-all duration-300 ease-out group-hover:w-full
                `}
              />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
