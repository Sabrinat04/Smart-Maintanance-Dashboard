'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DashboardModule, ModulePage } from '@/lib/dashboardData'

export function DashboardLayout({mod,page,children}:{mod:DashboardModule;page:ModulePage;children?:React.ReactNode}){
  const pathname=usePathname()
  return <div className='min-h-screen bg-slate-50 text-slate-900'><header className='h-16 border-b bg-white flex items-center px-6 justify-between'><h1 className='font-semibold text-2xl'>Smart Maintenance Platform</h1><input className='border rounded-xl px-4 py-2 w-72' placeholder='Search reports...' /></header><div className='flex'><aside className='w-72 bg-[#031a36] text-white min-h-[calc(100vh-64px)] p-4'><h2 className='text-3xl font-bold'>{mod.name}</h2><p className='text-slate-300 mb-4'>{mod.role}</p><nav className='space-y-1'>{mod.pages.map(p=>{const href=`${mod.basePath}/${p.slug}`;const active=pathname===href || (pathname===mod.basePath&&p===mod.pages[0]);return <Link key={p.slug} href={href} className={`block rounded-lg px-3 py-2 ${active?'bg-white/10 border-l-2':'hover:bg-white/5'}`}>{p.title}</Link>})}</nav></aside><main className='flex-1 p-6'><h2 className='text-4xl font-bold mb-2'>{page.title}</h2><p className='text-slate-600 mb-6'>{page.description}</p>{children}</main></div></div>
}

export const KpiCard=({label,value}:{label:string;value:string})=><div className='rounded-2xl border bg-white p-4 shadow-sm'><p className='text-sm text-slate-500'>{label}</p><p className='text-2xl font-bold'>{value}</p></div>
export const StatusBadge=({s}:{s:string})=><span className='px-2 py-1 rounded-full text-xs bg-slate-100 border'>{s}</span>

export function ModulePageView({mod,page}:{mod:DashboardModule;page:ModulePage}){
return <DashboardLayout mod={mod} page={page}><div className='grid md:grid-cols-4 gap-4 mb-6'>{page.kpis.map(k=><KpiCard key={k.label} label={k.label} value={k.value}/>)}</div>{page.bullets&&<div className='rounded-2xl bg-white border p-4 mb-6'><h3 className='font-semibold mb-2'>Operational Highlights</h3><ul className='list-disc pl-6 space-y-1'>{page.bullets.map(b=><li key={b}>{b}</li>)}</ul></div>}{page.table&&<div className='rounded-2xl bg-white border overflow-x-auto'><table className='w-full text-left'><thead className='bg-slate-100'><tr>{page.table.columns.map(c=><th key={c} className='p-3 text-sm'>{c}</th>)}</tr></thead><tbody>{page.table.rows.map((r,i)=><tr key={i} className='border-t'>{r.map((c,j)=><td key={j} className='p-3'>{j===2?<StatusBadge s={c}/>:c}</td>)}</tr>)}</tbody></table></div>}</DashboardLayout>}
