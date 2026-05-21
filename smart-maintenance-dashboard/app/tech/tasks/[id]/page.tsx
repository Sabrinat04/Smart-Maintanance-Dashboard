import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='tech' title='Task Details'><PageHeader title='Task Details' subtitle='Full task context and execution actions.'/><div className={card}><p className='text-sm text-slate-700'>Description, priority, SLA countdown, access notes, masked tenant contact, attachments, timeline, and execution actions.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
