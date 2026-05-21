import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='management' title='Technician Performance'><PageHeader title='Technician Performance' subtitle='Read-only technician productivity dashboard.'/><div className={card}><p className='text-sm text-slate-700'>Assigned/completed/cannot-complete, average response/resolution, completion rate, technician comparison table.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
