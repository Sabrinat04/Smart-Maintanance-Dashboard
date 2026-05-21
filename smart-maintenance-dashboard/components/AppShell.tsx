'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { brand, roleMenus } from '@/data/mockData'

export function AppShell({ role, title, children }: { role: keyof typeof roleMenus; title: string; children: React.ReactNode }) {
  const path = usePathname()
  return (
    <div className="min-h-screen bg-[#EEF2F8] text-slate-900">
      <div className="flex">
        <aside className="sticky top-0 h-screen w-72 border-r border-slate-200 bg-[#E9EEF8] p-6">
          <h1 className="text-4 font-bold text-[#0B4EDB]">{brand.appName}</h1>
          <p className="text-slate-500">Enterprise Platform</p>
          <div className="mt-8 space-y-7">
            {roleMenus[role].map((sec) => (
              <div key={sec.group}>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">{sec.group}</h3>
                <div className="space-y-1">
                  {sec.items.map((i) => (
                    <Link key={i.href} href={i.href} className={`block rounded-xl px-4 py-3 ${path === i.href ? 'bg-blue-100 text-[#0B4EDB]' : 'hover:bg-white/60'}`}>
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
        <section className="flex-1">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-10 py-5">
            <h2 className="text-4 font-semibold">{title}</h2>
            <input placeholder="Search..." className="w-80 rounded-2xl border border-slate-200 bg-[#EEF2F8] px-4 py-2" />
          </header>
          <main className="p-8">{children}</main>
        </section>
      </div>
    </div>
  )
}

export const card = 'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'
