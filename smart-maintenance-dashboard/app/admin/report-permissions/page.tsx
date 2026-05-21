import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='admin' title='Report Export Permissions'><PageHeader title='Report Export Permissions' subtitle='Control role-based report and export access.'/><div className={card}><p className='text-sm text-slate-700'>Matrix for Admin, Property Manager, and Management across report types plus PDF/Excel export rights. Exports are audit logged.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
