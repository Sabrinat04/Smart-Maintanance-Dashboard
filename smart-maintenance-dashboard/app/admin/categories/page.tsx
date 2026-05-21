import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='admin' title='Service Categories'><PageHeader title='Service Categories' subtitle='Configure service categories and SLA mapping.'/><div className={card}><p className='text-sm text-slate-700'>Plumbing, Electrical, HVAC, Elevator, Cleaning, Security, Fire Safety, and General Maintenance with in-use warnings.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
