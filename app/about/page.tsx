"use client";

import { SiteHeader } from "@/components/site-header";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative py-24 flex items-center justify-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Sobre Luxury Motors
              </h1>
              <p className="text-lg text-muted-foreground mb-12">
                Redefiniendo la excelencia automotriz de lujo desde 1995
              </p>
            </motion.div>

            {/* NUEVO DISEÑO CON 2/3 IMAGEN Y 1/3 TEXTO */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mt-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-1"
              >
                <h2 className="text-3xl font-bold mb-4">Nuestra Herencia</h2>
                <p className="text-muted-foreground mb-6">
                  Durante más de dos décadas, Luxury Motors ha estado a la
                  vanguardia de la industria automotriz de lujo, ofreciendo a
                  clientes exigentes acceso a los vehículos más excepcionales
                  del mundo.
                </p>
                <p className="text-muted-foreground">
                  Nuestro compromiso con la excelencia, la atención al detalle y
                  el servicio personalizado nos ha convertido en la opción
                  preferida para los conocedores del automóvil en todo el mundo.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="md:col-span-2 relative aspect-[16/9] overflow-hidden rounded-lg"
              >
                <img
                  src="/images/about/about_hero.jpg"
                  alt="Showroom de lujo"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
            >
              <div className="bg-card rounded-xl shadow-lg text-center p-6">
                <h3 className="text-2xl font-bold mb-2">Experiencia</h3>
                <p className="text-muted-foreground">
                  Nuestro equipo de especialistas aporta décadas de experiencia
                  en consultoría automotriz de lujo.
                </p>
                <div className="w-full h-80 mt-10 overflow-hidden rounded-lg">
                  <img
                    src="/images/about/experiencia.avif"
                    alt="Experiencia"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-lg text-center p-6">
                <h3 className="text-2xl font-bold mb-2">Excelencia</h3>
                <p className="text-muted-foreground">
                  Mantenemos los más altos estándares en la selección de
                  vehículos y atención al cliente.
                </p>
                <div className="w-full h-80 mt-10 overflow-hidden rounded-lg">
                  <img
                    src="/images/about/excelencia.avif"
                    alt="Excelencia"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-lg text-center p-6">
                <h3 className="text-2xl font-bold mb-2">Innovación</h3>
                <p className="text-muted-foreground">
                  Adoptamos las últimas tecnologías automotrices y tendencias de
                  lujo.
                </p>
                <div className="w-full h-80 mt-10 overflow-hidden rounded-lg">
                  <img
                    src="/images/about/innovacion.avif"
                    alt="Innovación"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
