import Link from 'next/link'

const links = [
  { href: '/dashboard', label: 'Dashboard Home' },
  { href: '/dashboard/tenant', label: 'Tenant' },
  { href: '/dashboard/technician', label: 'Technician' },
  { href: '/dashboard/property-manager', label: 'Property Manager' },
  { href: '/dashboard/admin', label: 'Admin' },
  { href: '/dashboard/management', label: 'Management' },
]

export function DashboardShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex">
        <aside className="min-h-screen w-64 bg-slate-900 p-6 text-white">
          <h1 className="mb-8 text-xl font-bold">Smart Maintenance</h1>
          <nav className="space-y-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2 text-slate-200 transition hover:bg-slate-700 hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <header className="mb-6 flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-800">{title}</h2>
            <div className="flex gap-3">
              <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Search requests..." />
              <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm"><option>All statuses</option></select>
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  )
}
