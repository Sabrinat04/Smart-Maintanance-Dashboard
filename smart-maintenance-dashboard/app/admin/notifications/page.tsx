import { AppShell } from '@/components/AppShell'
import { PageHeader, card } from '@/components/ModuleUI'

export default function Page(){return <AppShell role='admin' title='Notification Settings'><PageHeader title='Notification Settings' subtitle='Manage provider connections, templates, and delivery logs.'/><div className={card}><p className='text-sm text-slate-700'>Providers: In-app, Email, WhatsApp, SMS with Connected/Not Configured/Failed states and test actions.</p><div className='mt-3 grid gap-2 md:grid-cols-3'>{['Filter Bar','Feature Table / Cards','Action Panel'].map(i=><div key={i} className='rounded-lg bg-slate-50 p-3 text-sm'>{i}</div>)}</div></div></AppShell>}
