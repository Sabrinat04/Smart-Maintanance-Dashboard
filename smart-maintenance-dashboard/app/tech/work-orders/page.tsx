import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='tech' title='Work Orders'><PageHeader title='Work Orders' subtitle='View all assigned work orders.'/><div className={card}><p className='text-sm text-slate-700'>Status/priority/SLA filters with table-list-card toggle and actions Open/Start/Continue.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
