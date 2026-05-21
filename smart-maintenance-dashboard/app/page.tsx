import Link from 'next/link'
import { ROLE_CONFIG } from '@/lib/dashboardData'

export default function Home(){
  return <main className='min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 p-10'><div className='max-w-6xl mx-auto'><h1 className='text-5xl font-bold'>Smart Maintenance Request Platform</h1><p className='mt-3 text-slate-600'>Manager-ready prototype aligned to SRS v0.3 workflows, SLA governance, and multi-role operations.</p><div className='grid md:grid-cols-2 gap-5 mt-8'>{ROLE_CONFIG.map(r=>{const first=r.groups[0].items[0].slug;return <Link key={r.key} href={`${r.basePath}/${first}`} className='rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md'><p className='text-sm text-slate-500'>{r.subtitle}</p><h2 className='text-2xl font-bold'>{r.name}</h2><p className='mt-2 text-slate-600'>{r.groups.reduce((a,g)=>a+g.items.length,0)} structured pages</p></Link>})}</div></div></main>
}
