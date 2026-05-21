import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='pm' title='Cannot Complete Handling'><PageHeader title='Cannot Complete Handling' subtitle='Resolve technician cannot-complete exceptions.'/><div className={card}><p className='text-sm text-slate-700'>Includes reason, notes, attachments, SLA impact, and actions reassign/return to review/close unresolved with PM decision notes.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
