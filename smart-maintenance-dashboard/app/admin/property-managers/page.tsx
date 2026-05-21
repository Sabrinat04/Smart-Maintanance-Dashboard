import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='admin' title='Property Manager Management'><PageHeader title='Property Manager Management' subtitle='Manage PM assignments and building coverage.'/><div className={card}><p className='text-sm text-slate-700'>PM list, assigned buildings, active requests, Assign Buildings drawer, and deactivate actions.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
