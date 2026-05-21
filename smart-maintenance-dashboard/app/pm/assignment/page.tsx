import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='pm' title='Assignment Board'><PageHeader title='Assignment Board' subtitle='Assign approved requests to available technicians.'/><div className={card}><p className='text-sm text-slate-700'>Technician availability, workload, skills, suggested technician card, assign/reassign with required reason.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
