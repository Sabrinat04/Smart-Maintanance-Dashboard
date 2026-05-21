import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='pm' title='SLA Breaches'><PageHeader title='SLA Breaches' subtitle='Monitor and act on overdue/breached requests.'/><div className={card}><p className='text-sm text-slate-700'>Filters by breach type, priority, category, building, technician and red critical styling.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
