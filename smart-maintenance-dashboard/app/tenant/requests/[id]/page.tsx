import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='tenant' title='Request Details'><PageHeader title='Request Details' subtitle='View full lifecycle and request actions.'/><div className={card}><p className='text-sm text-slate-700'>Timeline, notes, attachments, SLA response/resolution, cancel/reopen actions, and closure feedback.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
