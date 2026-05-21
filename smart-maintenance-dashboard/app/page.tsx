import Link from 'next/link'
import { modules } from '@/lib/dashboardData'

export default function Home(){
  return <main className='min-h-screen bg-slate-100 p-10'><h1 className='text-5xl font-bold mb-3'>Smart Maintenance Platform</h1><p className='text-slate-700 mb-8'>Enterprise maintenance operations prototype across all stakeholders.</p><div className='grid md:grid-cols-2 gap-6'>{modules.map(m=><Link key={m.basePath} href={`${m.basePath}/${m.pages[0].slug}`} className='rounded-2xl bg-white border p-6 shadow-sm hover:shadow-md'><h2 className='text-2xl font-bold'>{m.name}</h2><p className='text-slate-600'>{m.role}</p><p className='mt-3 text-sm text-slate-500'>{m.pages.length} pages</p></Link>)}</div></main>
}
