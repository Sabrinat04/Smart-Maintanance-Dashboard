import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='admin' title='Manual Legacy Request Entry'><PageHeader title='Manual Legacy Request Entry' subtitle='Create legacy requests manually. Excel import is outside MVP.'/><div className={card}><p className='text-sm text-slate-700'>Includes tenant/building/unit/category/priority/description/original date/source/status/attachments/legacy flag and draft support.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
