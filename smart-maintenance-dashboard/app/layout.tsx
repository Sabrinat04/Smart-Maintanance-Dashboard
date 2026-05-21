import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Maintenance Dashboard',
  description: 'MVP frontend for role-based maintenance workflows',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
