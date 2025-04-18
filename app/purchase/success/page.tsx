import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PurchaseSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We have received your purchase request. Our team will contact you shortly to finalize the details.
            </p>
            <Button asChild>
              <Link href="/inventory">Browse More Vehicles</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}