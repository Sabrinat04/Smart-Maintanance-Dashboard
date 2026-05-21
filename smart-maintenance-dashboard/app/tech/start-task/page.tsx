import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='tech' title='Start Task'><PageHeader title='Start Task' subtitle='Confirm checklist and start timestamp.'/><div className={card}><p className='text-sm text-slate-700'>Validation note: only assigned technician can start.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
