import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='admin' title='Building Management'><PageHeader title='Building Management' subtitle='Manage building master data and operational health.'/><div className={card}><p className='text-sm text-slate-700'>Building name, city, units, assigned PM, active requests, SLA compliance, deactivation warning when open requests exist.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
