import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='tenant' title='My Requests'><PageHeader title='My Requests' subtitle='Track request status and SLA progress.'/><div className={card}><p className='text-sm text-slate-700'>Filters by status/category/date/search with actions View, Cancel (if allowed), Reopen (if closed).</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
