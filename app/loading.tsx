import { SiteHeader } from "@/components/site-header"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container flex items-center justify-center min-h-[600px]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      </main>
    </div>
  )
}