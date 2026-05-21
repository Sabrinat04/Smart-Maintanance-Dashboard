import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='tenant' title='Notification Center'><PageHeader title='Notification Center' subtitle='Review and manage request notifications.'/><div className={card}><p className='text-sm text-slate-700'>Read/unread and type filters, mark read, mark all read, and links to related requests.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
