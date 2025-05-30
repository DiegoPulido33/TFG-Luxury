import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container flex flex-col items-center justify-center min-h-[600px] py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

// MONGODB_URI="mongodb+srv://Puvero:luxurymotors33@luxury-motors.bzjgxvk.mongodb.net/?retryWrites=true&w=majority&appName=Luxury-Motors"
// NEXT_PUBLIC_BASE_URL="https://tfg-luxury-chi.vercel.app"

// BREVO_API_KEY="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"
// # BREVO_FROM_EMAIL=info@luxurymotors.com
// # BREVO_FROM_NAME=Luxury Motors
// # BREVO_TO_EMAIL=info@luxurymotors.com
