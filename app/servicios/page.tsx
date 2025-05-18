"use client";

import { SiteHeader } from "@/components/site-header";
import { motion } from "framer-motion";

export default function ServicesPage() {
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
                                Nuestros Servicios
                            </h1>
                            <p className="text-lg text-muted-foreground mb-12">
                                En Luxury Motors, ofrecemos una gama de servicios diseñados para brindarte una experiencia automotriz de lujo incomparable.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {/* Atención Personalizada */}
                            <div className="bg-card rounded-xl shadow-lg text-center p-6">
                                <h3 className="text-2xl font-bold mb-2">Atención Personalizada</h3>
                                <p className="text-muted-foreground">
                                    Nuestro equipo de expertos te ofrece un asesoramiento exclusivo, adaptado a tus preferencias y necesidades.
                                </p>
                                <div className="w-full h-64 mt-10 overflow-hidden rounded-lg flex items-center justify-center">
                                    <img
                                        src="/images/servicios/servicios1.webp"
                                        alt="Atención personalizada"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Garantía Premium */}
                            <div className="bg-card rounded-xl shadow-lg text-center p-6">
                                <h3 className="text-2xl font-bold mb-2">Garantía Premium</h3>
                                <p className="text-muted-foreground">
                                    Todos nuestros vehículos cuentan con garantías extendidas y revisiones certificadas para tu tranquilidad.
                                </p>
                                <div className="w-full h-64 mt-10 overflow-hidden rounded-lg flex items-center justify-center">
                                    <img
                                        src="/images/servicios/servicios2.webp"
                                        alt="Garantía premium"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Entrega a Domicilio */}
                            <div className="bg-card rounded-xl shadow-lg text-center p-6">
                                <h3 className="text-2xl font-bold mb-2">Entrega a Domicilio</h3>
                                <p className="text-muted-foreground">
                                    Recibe tu vehículo directamente en la puerta de tu casa, con total seguridad y comodidad.
                                </p>
                                <div className="w-full h-64 mt-10 overflow-hidden rounded-lg flex items-center justify-center">
                                    <img
                                        src="/images/servicios/servicios3.webp"
                                        alt="Entrega a domicilio"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Financiación a Medida */}
                            <div className="bg-card rounded-xl shadow-lg text-center p-6">
                                <h3 className="text-2xl font-bold mb-2">Financiación a Medida</h3>
                                <p className="text-muted-foreground">
                                    Ofrecemos planes de financiación flexibles que se adaptan a tu presupuesto y estilo de vida.
                                </p>
                                <div className="w-full h-64 mt-10 overflow-hidden rounded-lg flex items-center justify-center">
                                    <img
                                        src="/images/servicios/servicios4.webp"
                                        alt="Financiación a medida"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Vehículos Certificados */}
                            <div className="bg-card rounded-xl shadow-lg text-center p-6">
                                <h3 className="text-2xl font-bold mb-2">Vehículos Certificados</h3>
                                <p className="text-muted-foreground">
                                    Cada vehículo ha pasado por una rigurosa inspección para garantizar su calidad y rendimiento.
                                </p>
                                <div className="w-full h-64 mt-10 overflow-hidden rounded-lg flex items-center justify-center">
                                    <img
                                        src="/images/servicios/servicios5.webp"
                                        alt="Vehículos certificados"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Atención Postventa */}
                            <div className="bg-card rounded-xl shadow-lg text-center p-6">
                                <h3 className="text-2xl font-bold mb-2">Atención Postventa</h3>
                                <p className="text-muted-foreground">
                                    Nuestro compromiso continúa después de la compra, ofreciéndote soporte y mantenimiento continuo.
                                </p>
                                <div className="w-full h-64 mt-10 overflow-hidden rounded-lg flex items-center justify-center">
                                    <img
                                        src="/images/servicios/servicios6.webp"
                                        alt="Atención postventa"
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
