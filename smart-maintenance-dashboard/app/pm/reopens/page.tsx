import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='pm' title='Reopen Decisions'><PageHeader title='Reopen Decisions' subtitle='Handle closed requests with reopen requests.'/><div className={card}><p className='text-sm text-slate-700'>Shows prior feedback/photos and routes approved reopens back to Under Review.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
