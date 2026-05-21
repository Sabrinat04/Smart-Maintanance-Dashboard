import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='tenant' title='Profile & Unit Information'><PageHeader title='Profile & Unit Information' subtitle='Manage tenant profile details.'/><div className={card}><p className='text-sm text-slate-700'>Building/unit are read-only. Supports contact updates and password change.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
