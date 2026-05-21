import { AppShell } from '@/components/AppShell'
import { DataTable, PageHeader, StatusBadge, card } from '@/components/ModuleUI'
export default function Page(){const rows=[['Nina Park','+1***1029','nina@mail.com','Skyline Tower','U14B','2026-05-20','Pending',''],['David Lang','+1***7821','david@mail.com','Green Valley','U999','2026-05-20','Unit Mismatch','']]
return <AppShell role='admin' title='Tenant Approval Queue'><PageHeader title='Tenant Approval Queue' subtitle='Review and approve tenant registrations.'/>
<DataTable headers={['Tenant Name','Phone','Email','Requested Building','Requested Unit','Submitted Date','Status','Actions']} rows={rows.map(r=>[r[0],r[1],r[2],r[3],r[4],r[5],<StatusBadge key='s' value={r[6]}/>,<div key='a' className='flex gap-2'><button className='text-emerald-700'>Approve</button><button className='text-red-700'>Reject</button></div>])}/>
<div className='mt-4 grid gap-4 xl:grid-cols-2'><div className={card}><h3 className='font-semibold'>Reject Reason (Required)</h3><textarea className='mt-2 w-full rounded border p-2' placeholder='Reason for rejection'/></div><div className={card}><h3 className='font-semibold'>Approval History</h3><p className='text-sm text-slate-600 mt-2'>Sarah Miller approved 5 tenants on May 21, 2026.</p></div></div>
</AppShell>}
