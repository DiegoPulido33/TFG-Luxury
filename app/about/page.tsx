"use client"

import { SiteHeader } from "@/components/site-header"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                About Luxury Motors
              </h1>
              <p className="text-lg text-muted-foreground mb-12">
                Redefining luxury automotive excellence since 1995
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-4">Our Heritage</h2>
                <p className="text-muted-foreground mb-6">
                  For over two decades, Luxury Motors has been at the forefront of the luxury automotive industry,
                  providing discerning clients with access to the world's most exceptional vehicles.
                </p>
                <p className="text-muted-foreground">
                  Our commitment to excellence, attention to detail, and personalized service has made us
                  the preferred choice for automotive connoisseurs worldwide.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1562141961-b5d1855f5614?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury showroom"
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
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-2">Expertise</h3>
                <p className="text-muted-foreground">
                  Our team of specialists brings decades of experience in luxury automotive consulting.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in vehicle selection and customer service.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Embracing the latest automotive technologies and luxury trends.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}