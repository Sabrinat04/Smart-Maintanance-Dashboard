import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='admin' title='Unit Management'><PageHeader title='Unit Management' subtitle='Manage unit records and tenant links.'/><div className={card}><p className='text-sm text-slate-700'>Unit must belong to a building. Add/Edit/Link/Unlink tenant actions with occupancy and open request visibility.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
