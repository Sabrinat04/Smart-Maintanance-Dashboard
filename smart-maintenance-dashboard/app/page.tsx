import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-3xl rounded-2xl bg-white p-10 shadow-sm">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">Smart Maintenance Dashboard</h1>
        <p className="mb-6 text-slate-600">Presentation-ready MVP using Next.js App Router, TypeScript, Tailwind, and mock data.</p>
        <Link href="/dashboard" className="inline-block rounded-lg bg-blue-600 px-5 py-3 font-medium text-white">Open Dashboard</Link>
      </div>
    </main>
  )
}
