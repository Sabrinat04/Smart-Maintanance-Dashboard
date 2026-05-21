import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='pm' title='New Requests Review'><PageHeader title='New Requests Review' subtitle='Review incoming requests and decide next action.'/><div className={card}><p className='text-sm text-slate-700'>Includes tenant/building/unit/category/priority/attachments/submitted date with Open, Start Review, Approve, Reject(reason required).</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
