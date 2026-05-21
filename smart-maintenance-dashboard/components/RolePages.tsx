'use client'
import { AppShell, card } from './AppShell'
import { auditLogs, kpiByRole, maintenanceRequests, notifications } from '@/data/mockData'

const badge = (text: string) => {
  const t = text.toLowerCase()
  const cls = t.includes('breach') || t.includes('critical') || t.includes('cancel') ? 'bg-red-100 text-red-700' : t.includes('high') || t.includes('warning') ? 'bg-amber-100 text-amber-700' : t.includes('complete') || t.includes('verified') || t.includes('track') ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
  return <span className={`rounded-full px-2 py-1 text-xs font-semibold ${cls}`}>{text}</span>
}

export function RoleDashboard({ role, title, subtitle }: { role: any; title: string; subtitle: string }) {
  const kpis = (kpiByRole as any)[role] || []
  return <AppShell role={role} title={title}><div className='mb-6'><h1 className='text-5xl font-bold'>{title}</h1><p className='text-slate-600'>{subtitle}</p></div><div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>{kpis.map((k: any) => <div key={k.label} className={card}><p className='text-xs uppercase text-slate-500'>{k.label}</p><p className='mt-2 text-5xl font-bold text-[#0B4EDB]'>{k.value}</p></div>)}</div><CommonPanels /></AppShell>
}

export function ListPage({ role, title }: { role: any; title: string }) {
  return <AppShell role={role} title={title}><h1 className='mb-4 text-3xl font-bold'>{title}</h1><CommonPanels /></AppShell>
}

function CommonPanels() {
  return <div className='mt-6 grid gap-5 xl:grid-cols-3'>
    <div className={`xl:col-span-2 ${card}`}><h3 className='mb-3 text-2xl font-semibold'>Requests</h3><table className='w-full text-sm'><thead><tr className='text-left text-slate-500'><th>ID</th><th>Request</th><th>Status</th><th>Priority</th><th>SLA</th></tr></thead><tbody>{maintenanceRequests.map(r=><tr key={r.id} className='border-t border-slate-100'><td className='py-3'>{r.id}</td><td>{r.title}</td><td>{badge(r.status)}</td><td>{badge(r.priority)}</td><td>{r.sla}</td></tr>)}</tbody></table></div>
    <div className='space-y-5'>
      <div className={card}><h3 className='mb-3 text-xl font-semibold'>Notifications</h3>{notifications.map(n=><div key={n.id} className='mb-2 flex items-center justify-between rounded-lg bg-slate-50 p-2 text-sm'><span>{n.title}</span>{!n.read && badge('New')}</div>)}</div>
      <div className={card}><h3 className='mb-3 text-xl font-semibold'>Audit Logs</h3>{auditLogs.map(a=><div key={a.ts+a.action} className='mb-2 rounded-lg bg-slate-50 p-2 text-sm'><p className='font-medium'>{a.action}</p><p className='text-slate-500'>{a.actor} · {a.ts}</p></div>)}</div>
    </div>
  </div>
}
