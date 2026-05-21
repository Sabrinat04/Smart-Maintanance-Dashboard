'use client'
import { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AppShell, card } from './AppShell'
import { auditLogs, kpiByRole, maintenanceRequests, notifications } from '@/data/mockData'

const badgeCls = (t: string) => t.includes('Breach') || t.includes('Critical') || t.includes('Cannot') ? 'bg-red-100 text-red-700' : t.includes('High') || t.includes('Progress') ? 'bg-amber-100 text-amber-700' : t.includes('Closed') || t.includes('Verified') || t.includes('Complete') ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
const Badge = ({ text }: { text: string }) => <span className={`rounded-full px-2 py-1 text-xs font-semibold ${badgeCls(text)}`}>{text}</span>

function SharedTable({ title }: { title: string }) {
  return <div className={card}><h3 className='mb-4 text-2xl font-semibold'>{title}</h3><table className='w-full text-sm'><thead><tr className='border-b text-left text-slate-500'><th className='py-2'>ID</th><th>Request / Tenant</th><th>Building / Unit</th><th>Status</th><th>Priority</th><th>SLA</th></tr></thead><tbody>{maintenanceRequests.map(r => <tr key={r.id} className='border-b'><td className='py-3'>{r.id}</td><td>{r.title}<div className='text-slate-500'>{r.tenant}</div></td><td>{r.building}<div className='text-slate-500'>{r.unit}</div></td><td><Badge text={r.status} /></td><td><Badge text={r.priority} /></td><td>{r.sla}</td></tr>)}</tbody></table></div>
}

function FormPage({ title, fields, note }: { title: string; fields: string[]; note?: string }) {
  const [msg, setMsg] = useState('')
  return <div className={card}><h1 className='mb-1 text-3xl font-bold'>{title}</h1>{note && <p className='mb-4 text-sm text-slate-600'>{note}</p>}<div className='grid gap-3 md:grid-cols-2'>{fields.map(f => <label key={f} className='text-sm font-medium'>{f}<input className='mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2' placeholder={`Enter ${f.toLowerCase()}`} /></label>)}</div><div className='mt-4 flex gap-2'><button onClick={() => setMsg('Saved successfully. Audit log recorded.')} className='rounded-xl bg-[#0B4EDB] px-4 py-2 text-white'>Save</button><button className='rounded-xl border border-slate-300 px-4 py-2'>Cancel</button></div>{msg && <p className='mt-3 text-sm text-emerald-600'>{msg}</p>}</div>
}

export function RoleDashboard({ role, title, subtitle }: { role: any; title: string; subtitle: string }) {
  const kpis = (kpiByRole as any)[role] || []
  return <AppShell role={role} title={title}><div className='mb-6'><h1 className='text-5xl font-bold'>{title}</h1><p className='text-slate-600'>{subtitle}</p></div><div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>{kpis.map((k: any) => <div key={k.label} className={card}><p className='text-xs uppercase text-slate-500'>{k.label}</p><p className='mt-2 text-5xl font-bold text-[#0B4EDB]'>{k.value}</p></div>)}</div><div className='mt-6 grid gap-5 xl:grid-cols-3'><div className='xl:col-span-2'><SharedTable title='Recent Requests Needing Attention' /></div><div className='space-y-5'><div className={card}><h3 className='mb-3 text-xl font-semibold'>Notifications</h3>{notifications.map(n => <div key={n.id} className='mb-2 rounded-lg bg-slate-50 p-2 text-sm'>{n.title}</div>)}</div><div className={card}><h3 className='mb-3 text-xl font-semibold'>Audit Logs</h3>{auditLogs.map(a => <div key={a.ts + a.action} className='mb-2 rounded-lg bg-slate-50 p-2 text-sm'><p className='font-medium'>{a.action}</p><p className='text-slate-500'>{a.actor} · {a.ts}</p></div>)}</div></div></div></AppShell>
}

export function ListPage({ role, title }: { role: any; title: string }) {
  const path = usePathname()
  const page = useMemo(() => {
    if (path.includes('/tenant/requests/new')) return <FormPage title='Create Maintenance Request' fields={['Building*', 'Unit*', 'Category*', 'Priority*', 'Preferred Visit Time', 'Description*', 'Attachments']} note='Accepted files: JPG/JPEG/PNG/MP4/MOV. Image max 5MB, video max 25MB.' />
    if (path.includes('/tenant/profile')) return <div className='grid gap-4 lg:grid-cols-3'><div className={`${card} lg:col-span-2`}><h2 className='text-2xl font-semibold'>Profile & Unit Information</h2><p className='mt-2 text-slate-600'>Building and unit are read-only and changed by Admin only.</p><div className='mt-4 grid gap-3 md:grid-cols-2'><div className='rounded-xl bg-slate-50 p-3'>Alex Morgan<br/>alex@tenant.com<br/>+1 555 201 9912</div><div className='rounded-xl bg-slate-50 p-3'>Skyline Tower, Unit 402<br/>Occupied<br/>Open: 3 · Completed: 12</div></div></div><div className={card}><h3 className='text-lg font-semibold'>Security</h3><p className='text-sm text-slate-600'>Last login: 2026-05-21 08:00 UTC</p><button className='mt-3 w-full rounded-xl border border-slate-300 py-2'>Change Password</button></div></div>
    if (path.includes('/admin/sla-settings')) return <div className='space-y-4'><SharedTable title='SLA Rules: Critical 1h/8h · High 2h/24h · Medium 4h/48h · Low 8h/72h' /><div className={card}><h3 className='text-xl font-semibold'>SLA Behavior</h3><ul className='mt-3 list-disc pl-5 text-sm text-slate-700'><li>Response starts at New and stops at Assigned.</li><li>Resolution starts at New and stops at Verified.</li><li>Pause during Cancellation Requested.</li><li>Continue with flag during Cannot Complete.</li><li>Reset SLA cycle on approved Reopen.</li></ul></div></div>
    if (path.includes('/tech/complete')) return <div className={card}><h1 className='text-3xl font-bold'>Complete Task</h1><p className='mt-2 text-sm'>Before photo and after photo are required to complete.</p><div className='mt-4 space-y-2 text-sm'><p>Before Photo: Missing</p><p>After Photo: Uploaded</p><p>Notes: Added</p></div><button disabled className='mt-4 rounded-xl bg-slate-300 px-4 py-2 text-white'>Mark Completed</button><p className='mt-2 text-sm text-red-600'>Upload before photo to continue.</p></div>
    if (path.includes('/management/reports')) return <FormPage title='Report Export' fields={['Report Type', 'Date Range', 'Priority Filter', 'Category Filter', 'Building Filter', 'Format (PDF/Excel)']} note='All exports are written to audit logs.' />
    return <div className='space-y-5'><h1 className='text-3xl font-bold capitalize'>{title.replace(/\s+/g, ' ')}</h1><SharedTable title='Operational Data' /><FormPage title='Action Panel' fields={['Reason (Required for reject/reassign)', 'Assignee', 'Notes']} /></div>
  }, [path, title])

  return <AppShell role={role} title={title}>{page}</AppShell>
}
