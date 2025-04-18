"use client"

import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container flex flex-col items-center justify-center min-h-[600px] py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            An error occurred while processing your request.
          </p>
          <Button onClick={reset}>Try again</Button>
        </div>
      </main>
    </div>
  )
}