"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-muted mt-12 text-foreground">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo / Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Luxury Motors</h2>
          <p className="text-muted-foreground">
            Concesionario de vehículos de alta gama. Vive la experiencia del
            lujo y la velocidad.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-md font-medium mb-4">Navegación</h3>
          <ul className="space-y-2">
            {[
              { name: "Inventario", href: "/inventory" },
              { name: "Servicios", href: "/servicios" },
              { name: "Sobre Nosotros", href: "/about" },
              { name: "Contacto", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-md font-medium mb-4">Contacto</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#D4AF37]" /> +34 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#D4AF37]" />{" "}
              info@luxurymotors.com
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-md font-medium mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-muted-foreground hover:text-[#D4AF37] transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-muted-foreground hover:text-[#D4AF37] transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-muted py-4 text-center text-xs text-muted-foreground">
        © {year} Luxury Motors. Todos los derechos reservados.
      </div>
    </footer>
  );
}
