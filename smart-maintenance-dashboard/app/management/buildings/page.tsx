import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='management' title='Building Comparison'><PageHeader title='Building Comparison' subtitle='Read-only building performance comparison.'/><div className={card}><p className='text-sm text-slate-700'>Requests, SLA, delays, trends, top/bottom buildings with city/building/date/category filters.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
