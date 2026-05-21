import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='pm' title='Cancellation Decisions'><PageHeader title='Cancellation Decisions' subtitle='Review tenant cancellation requests.'/><div className={card}><p className='text-sm text-slate-700'>Shows tenant reason, technician assigned, work started indicator, SLA pause indicator, approve/reject(reason required).</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
