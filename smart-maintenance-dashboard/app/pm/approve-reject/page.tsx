import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='pm' title='Approve / Reject Workflow'><PageHeader title='Approve / Reject Workflow' subtitle='Detailed request review with duplicate checks.'/><div className={card}><p className='text-sm text-slate-700'>Selected request details, attachments preview, tenant notes, approval history, and rejection reason requirement.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
