import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='tech' title='Cannot Complete'><PageHeader title='Cannot Complete' subtitle='Escalate work exceptions to PM.'/><div className={card}><p className='text-sm text-slate-700'>Reason is required; PM review notice shown.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
